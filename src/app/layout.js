import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://fayanex.com'),
  title: {
    default: 'Fayanex Ventures — Industry 5.0 Woven-Bag Machinery',
    template: '%s — Fayanex Ventures',
  },
  description:
    'Fayanex Ventures is a deep-tech industrial machinery company engineering an integrated, closed-architecture Industry 5.0 system that extrudes and converts woven bags end to end. Based in Mysore, India.',
  keywords: [
    'Fayanex',
    'Industry 5.0',
    'PP woven bag machinery',
    'industrial machinery',
    'technical textiles',
    'Mysore',
  ],
  openGraph: {
    title: 'Fayanex Ventures',
    description:
      'Engineering an integrated, closed-architecture Industry 5.0 woven-bag machine.',
    type: 'website',
    locale: 'en_IN',
  },
  icons: { icon: '/favicon.svg' },
};

export const viewport = {
  themeColor: '#0A0A0C',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grain">
        <Nav />
        <main className="relative z-[2]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
