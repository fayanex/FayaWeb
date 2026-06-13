'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/technology/', label: 'Technology' },
  { href: '/products/', label: 'What We’re Building' },
  { href: '/about/', label: 'About' },
  { href: '/team/', label: 'Team' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-void/80 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[68px] max-w-shell items-center justify-between px-6 sm:px-8">
        <Link href="/" className="flex items-center" aria-label="Fayanex home">
          <img
            src="/fayanex-logo-sm.png"
            alt="Fayanex"
            className="h-[26px] w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`font-mono text-[0.72rem] uppercase tracking-[0.18em] transition-colors duration-300 hover:text-chrome ${
                  pathname === l.href ? 'text-chrome' : 'text-silver'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact/" className="hidden btn-ghost md:inline-flex">
          Contact
        </Link>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-chrome transition-transform duration-300 ${
              open ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-6 bg-chrome transition-opacity duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-px w-6 bg-chrome transition-transform duration-300 ${
              open ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* mobile drawer */}
      <div
        className={`overflow-hidden border-t border-line bg-void/95 backdrop-blur-md transition-[max-height] duration-500 md:hidden ${
          open ? 'max-h-96' : 'max-h-0 border-transparent'
        }`}
      >
        <ul className="flex flex-col px-6 py-4">
          {links.concat({ href: '/contact/', label: 'Contact' }).map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block py-3 font-mono text-sm uppercase tracking-[0.18em] text-silver hover:text-chrome"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
