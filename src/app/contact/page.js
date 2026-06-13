import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { Shell, Eyebrow } from '@/components/Section';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Fayanex Ventures — Mysore, Karnataka. contact@fayanex.com',
};

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
          <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-10">
                <div>
                  <Eyebrow>Email</Eyebrow>
                  <ul className="mt-4 space-y-2 text-lg text-chrome">
                    <li><a className="hover:text-silver" href="mailto:contact@fayanex.com">contact@fayanex.com</a></li>
                    <li><a className="hover:text-silver" href="mailto:info@fayanex.com">info@fayanex.com</a></li>
                  </ul>
                </div>
                <div className="hairline" />
                <div>
                  <Eyebrow>Phone</Eyebrow>
                  <p className="mt-4 text-lg text-chrome">
                    <a className="hover:text-silver" href="tel:+919206322847">+91 92063 22847</a>
                  </p>
                </div>
                <div className="hairline" />
                <div>
                  <Eyebrow>Location</Eyebrow>
                  <p className="mt-4 text-lg leading-relaxed text-chrome">
                    Mysore, Karnataka
                    <br />
                    <span className="text-silver">India</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Shell>
      </section>
    </>
  );
}
