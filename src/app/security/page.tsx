import Link from "next/link";
import { CardGrid, PublicPage, Section } from "@/components/public-page";

const principles = [
  "Secure by design",
  "Consent-based connections",
  "Read-only insight model",
  "Clear data controls",
  "No unnecessary data collection",
];

export default function SecurityPage() {
  return (
    <PublicPage
      eyebrow="Security"
      title="Security and data protection"
      copy="MoniAtlas is designed around clarity, consent, and control, with a GDPR-first approach to personal financial information."
      ctaHref="/contact"
      ctaLabel="Contact us"
      secondaryHref="/privacy"
      secondaryLabel="Privacy Policy"
    >
      <Section title="Security principles">
        <CardGrid items={principles} />
      </Section>

      <Section
        title="Read-only model"
        copy="MoniAtlas is designed to help you understand your money. It does not move money, make payments, or execute financial actions."
        tone="muted"
      />

      <Section
        title="Data control"
        copy="Users should be able to understand what information is held, how it is used, and how to request deletion or removal where applicable."
      />

      <Section
        title="Open Banking security positioning"
        copy="Where connected account features are available, MoniAtlas will use secure Open Banking flows. Bank login credentials are not stored by MoniAtlas."
        tone="muted"
      />

      <Section
        title="Disclaimer"
        copy="Security features will continue to evolve as MoniAtlas develops. This page explains the intended security approach for the public product."
      >
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-[#004aad] px-6 py-3 font-semibold text-white hover:bg-[#003f94]"
        >
          Contact us
        </Link>
      </Section>
    </PublicPage>
  );
}
