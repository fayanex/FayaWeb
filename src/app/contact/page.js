import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import MysoreMap from '@/components/MysoreMap';
import { Shell, Eyebrow } from '@/components/Section';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Fayanex Ventures — Mysore, Karnataka. contact@fayanex.com',
};

const channels = [
  {
    k: 'Email',
    lines: [
      { label: 'contact@fayanex.com', href: 'mailto:contact@fayanex.com' },
      { label: 'info@fayanex.com', href: 'mailto:info@fayanex.com' },
    ],
  },
  {
    k: 'Phone',
    lines: [{ label: '+91 92063 22847', href: 'tel:+919206322847' }],
  },
  {
    k: 'Location',
    lines: [{ label: 'Mysore, Karnataka · India', href: null }],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk"
        intro="Whether you’re a partner, investor or curious about the machine we’re building, reach out."
      />

      <section className="py-24 sm:py-32">
        <Shell>
          <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-px overflow-hidden border border-line bg-line">
                {channels.map((c) => (
                  <div key={c.k} className="bg-void p-6">
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rotate-45 bg-gradient-to-br from-white to-silver" />
                      <span className="eyebrow">{c.k}</span>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {c.lines.map((l) => (
                        <li key={l.label} className="text-base text-chrome">
                          {l.href ? (
                            <a className="transition-colors hover:text-silver" href={l.href}>
                              {l.label}
                            </a>
                          ) : (
                            l.label
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <MysoreMap className="w-full" />
              </div>
            </Reveal>
          </div>
        </Shell>
      </section>
    </>
  );
}
