import Link from 'next/link';
import { Shell, Blade } from '@/components/Section';

export default function Footer() {
  return (
    <footer className="relative z-[2] border-t border-line bg-void pt-16">
      <Shell>
        <Blade className="mb-14" />
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img
              src="/fayanex-logo-sm.png"
              alt="Fayanex"
              className="h-7 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Deep-tech industrial machinery. Engineering an integrated,
              closed-architecture Industry 5.0 system for woven-bag
              manufacturing.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2.5 text-sm text-silver">
              <li><Link className="hover:text-chrome" href="/technology/">Technology</Link></li>
              <li><Link className="hover:text-chrome" href="/products/">What We&rsquo;re Building</Link></li>
              <li><Link className="hover:text-chrome" href="/about/">About</Link></li>
              <li><Link className="hover:text-chrome" href="/team/">Team</Link></li>
              <li><Link className="hover:text-chrome" href="/contact/">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm text-silver">
              <li><a className="hover:text-chrome" href="mailto:contact@fayanex.com">contact@fayanex.com</a></li>
              <li><a className="hover:text-chrome" href="mailto:info@fayanex.com">info@fayanex.com</a></li>
              <li><a className="hover:text-chrome" href="tel:+919206322847">+91 92063 22847</a></li>
              <li className="text-muted">Mysore, Karnataka, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-line py-7 sm:flex-row">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted">
            &copy; {new Date().getFullYear()} Fayanex Ventures LLP
          </p>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted">
            Mysore &middot; India
          </p>
        </div>
      </Shell>
    </footer>
  );
}
