import Link from "next/link";
import { PublicPage, Section } from "@/components/public-page";

const contactCards = [
  { title: "General enquiries", email: "hello@moniatlas.com" },
  { title: "Support", email: "support@moniatlas.com" },
  { title: "Privacy and data", email: "privacy@moniatlas.com" },
];

const helpfulLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Open Banking", href: "/open-banking" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

export default function ContactPage() {
  return (
    <PublicPage
      eyebrow="Contact"
      title="Contact MoniAtlas"
      copy="Have a question about MoniAtlas, connected accounts, pricing, privacy, or the product roadmap? Get in touch."
      ctaHref="mailto:hello@moniatlas.com"
      ctaLabel="Email us"
      secondaryHref="/pricing"
      secondaryLabel="View pricing"
    >
      <Section title="Contact options">
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {contactCards.map((card) => (
            <article
              key={card.email}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-slate-950">{card.title}</h2>
              <Link
                href={`mailto:${card.email}`}
                className="mt-4 inline-flex text-sm font-semibold text-[#004aad]"
              >
                {card.email}
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Contact form" tone="muted">
        <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_0.7fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="grid gap-5">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-slate-800">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  disabled
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-500 placeholder:text-slate-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-slate-800">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  disabled
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-500 placeholder:text-slate-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-semibold text-slate-800">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  disabled
                  placeholder="How can we help?"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-500 placeholder:text-slate-400"
                />
              </div>
            </div>
            <button
              type="button"
              className="mt-6 rounded-full bg-[#004aad] px-6 py-3 text-sm font-semibold text-white shadow-sm"
            >
              Submit
            </button>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              This form is not connected yet. For now, please contact us by email.
            </p>
          </div>

          <aside className="rounded-[1.75rem] bg-[#004aad] p-6 text-white">
            <h2 className="text-2xl font-bold">Helpful links</h2>
            <div className="mt-6 grid gap-3">
              {helpfulLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 font-semibold hover:bg-white/15"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </Section>
    </PublicPage>
  );
}
