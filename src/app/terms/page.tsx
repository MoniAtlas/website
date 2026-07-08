import Link from "next/link";
import { PublicPage, Section } from "@/components/public-page";

const sections = [
  {
    title: "About MoniAtlas",
    copy: "MoniAtlas provides tools to organise, track, plan, and understand personal financial information.",
  },
  {
    title: "No financial advice",
    copy: "MoniAtlas does not provide regulated financial advice. Information and insights are provided for general organisation, tracking, planning, and understanding only.",
  },
  {
    title: "User responsibility",
    copy: "Users are responsible for the accuracy of information they add manually and for deciding how they use any insights shown by MoniAtlas.",
  },
  {
    title: "Account access",
    copy: "Users are responsible for keeping their login details secure and notifying MoniAtlas if they believe their account has been compromised.",
  },
  {
    title: "Availability",
    copy: "MoniAtlas is developing over time. Features may change, be added, removed, or temporarily unavailable.",
  },
  {
    title: "Connected account features",
    copy: "Where connected account features are available, access is based on user consent and may depend on third-party providers and financial institutions.",
  },
  {
    title: "Limitation",
    copy: "MoniAtlas is provided to support financial organisation and understanding. It should not be relied on as a substitute for professional financial advice.",
  },
];

export default function TermsPage() {
  return (
    <PublicPage
      eyebrow="Terms"
      title="Terms of Use"
      copy="These Terms explain the basic rules for using MoniAtlas."
      ctaHref="mailto:hello@moniatlas.com"
      ctaLabel="Contact us"
      secondaryHref="/privacy"
      secondaryLabel="Privacy Policy"
    >
      {sections.map((section, index) => (
        <Section
          key={section.title}
          title={section.title}
          copy={section.copy}
          tone={index % 2 === 0 ? "white" : "muted"}
        />
      ))}

      <Section title="Contact" copy="For questions, contact hello@moniatlas.com.">
        <Link
          href="mailto:hello@moniatlas.com"
          className="mt-8 inline-flex rounded-full bg-[#004aad] px-6 py-3 font-semibold text-white hover:bg-[#003f94]"
        >
          hello@moniatlas.com
        </Link>
      </Section>

      <Section
        title="Legal note"
        copy="These terms are a working public version and should be reviewed before full commercial launch."
        tone="muted"
      />
    </PublicPage>
  );
}
