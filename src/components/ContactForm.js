'use client';
import { useState } from 'react';
import { SHEET_ENDPOINT } from '@/config';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [data, setData] = useState({ name: '', email: '', company: '', message: '' });

  const update = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));

  const submit = async () => {
    if (!data.name || !data.email || !data.message) {
      setStatus('error');
      return;
    }
    if (!SHEET_ENDPOINT || SHEET_ENDPOINT.includes('PASTE_')) {
      // No endpoint configured yet — fall back to email so nothing is lost.
      window.location.href =
        `mailto:contact@fayanex.com?subject=Enquiry from ${encodeURIComponent(
          data.name
        )}&body=${encodeURIComponent(data.message + '\n\n' + data.email)}`;
      return;
    }
    try {
      setStatus('sending');
      // Posted as form-encoded with no-cors: this is the reliable way to reach a
      // Google Apps Script web app from a static site (avoids CORS preflight).
      // The response is opaque, so we optimistically treat a completed POST as success.
      await fetch(SHEET_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });
      setStatus('ok');
      setData({ name: '', email: '', company: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const field =
    'w-full bg-surface/60 border border-line px-4 py-3 text-sm text-chrome placeholder:text-muted outline-none transition-colors duration-300 focus:border-silver';
  const label = 'mb-2 block font-mono text-[0.66rem] uppercase tracking-[0.2em] text-silver';

  if (status === 'ok') {
    return (
      <div className="border border-line bg-surface/40 p-10 text-center">
        <span className="mx-auto block h-2.5 w-2.5 rotate-45 bg-gradient-to-br from-white to-silver" />
        <h3 className="mt-6 font-display text-xl font-medium text-chrome">
          Message sent
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-silver">
          Thanks for reaching out. We&rsquo;ll get back to you at the address you
          provided.
        </p>
        <button
          className="btn-ghost mt-8"
          onClick={() => setStatus('idle')}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Name</label>
          <input id="name" className={field} value={data.name} onChange={update('name')} placeholder="Your name" />
        </div>
        <div>
          <label className={label} htmlFor="email">Email</label>
          <input id="email" type="email" className={field} value={data.email} onChange={update('email')} placeholder="you@company.com" />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="company">Company <span className="text-muted">(optional)</span></label>
        <input id="company" className={field} value={data.company} onChange={update('company')} placeholder="Organisation" />
      </div>
      <div>
        <label className={label} htmlFor="message">Message</label>
        <textarea id="message" rows={5} className={`${field} resize-none`} value={data.message} onChange={update('message')} placeholder="How can we help?" />
      </div>

      {status === 'error' && (
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-chrome">
          Please add your name, a valid email and a message, then try again.
        </p>
      )}

      <button className="btn-chrome" onClick={submit} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </div>
  );
}
