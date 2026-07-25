import Link from "next/link";
import { PublicPage, Section } from "@/components/public-page";

const cookieTypes = [
  {
    title: "Essential cookies",
    copy: "These cookies are needed for core site features, such as security, navigation, and remembering choices you make while using the website.",
  },
  {
    title: "Preference cookies",
    copy: "These cookies may remember settings that make the website more useful and consistent for you.",
  },
  {
    title: "Analytics cookies",
    copy: "These cookies may help us understand how people use the website so we can improve its content, performance, and usability.",
  },
];

export default function CookiePage() {
  return (
    <PublicPage
      eyebrow="Cookies"
      title="Cookie Policy"
      copy="This Cookie Policy explains how MoniAtlas may use cookies and similar technologies on its website."
      ctaHref="mailto:privacy@moniatlas.com"
      ctaLabel="Contact privacy"
      secondaryHref="/privacy"
      secondaryLabel="Privacy Policy"
    >
      <Section
        title="What are cookies?"
        copy="Cookies are small text files placed on your device when you visit a website. They can help a website work properly, remember preferences, and understand how it is used."
      />

      <Section title="How we may use cookies" tone="muted">
        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          {cookieTypes.map((cookie) => (
            <article
              key={cookie.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="h-2 w-12 rounded-full bg-[#004aad]" />
              <h3 className="mt-5 text-lg font-bold text-slate-950">{cookie.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{cookie.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Managing cookies"
        copy="You can usually control or delete cookies through your browser settings. If you block essential cookies, parts of the website may not work as intended."
      />

      <Section
        title="Updates to this policy"
        copy="We may update this policy as our website and services develop. Any changes will be published on this page."
        tone="muted"
      />

      <Section title="Contact">
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          For questions about this policy or how MoniAtlas uses cookies, contact privacy@moniatlas.com.
        </p>
        <Link
          href="mailto:privacy@moniatlas.com"
          className="mt-8 inline-flex rounded-full bg-[#004aad] px-6 py-3 font-semibold text-white hover:bg-[#003f94]"
        >
          privacy@moniatlas.com
        </Link>
      </Section>
    </PublicPage>
  );
}
