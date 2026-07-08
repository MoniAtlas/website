import Link from "next/link";
import { PublicPage, Section } from "@/components/public-page";

const collectItems = [
  "Account registration details, such as name and email",
  "Information you choose to add manually",
  "Financial account information where connected account features are available and you provide consent",
  "Usage and technical information needed to operate and improve the service",
];

const useItems = [
  "To provide the MoniAtlas service",
  "To organise and display your financial information",
  "To generate insights and summaries",
  "To improve product performance and reliability",
  "To communicate important product updates",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-3 text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#004aad]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <PublicPage
      eyebrow="Privacy"
      title="Privacy Policy"
      copy="This Privacy Policy explains how MoniAtlas intends to collect, use, and protect personal information."
      ctaHref="mailto:privacy@moniatlas.com"
      ctaLabel="Contact privacy"
      secondaryHref="/terms"
      secondaryLabel="Terms of Use"
    >
      <Section title="Information we may collect">
        <BulletList items={collectItems} />
      </Section>

      <Section title="How we use information" tone="muted">
        <BulletList items={useItems} />
      </Section>

      <Section
        title="Open Banking data"
        copy="Where Open Banking features are available, MoniAtlas will only access data that you have consented to share. You will be shown what data is being requested and why."
      />

      <Section
        title="Data sharing"
        copy="MoniAtlas does not sell personal financial data. Data may be shared with service providers where needed to operate the product, subject to appropriate safeguards."
        tone="muted"
      />

      <Section
        title="Data retention and deletion"
        copy="Users should be able to request deletion of their data, subject to legal, operational, and security requirements."
      />

      <Section
        title="Security"
        copy="MoniAtlas is designed with a GDPR-first approach and intends to use appropriate technical and organisational measures to protect personal information."
        tone="muted"
      />

      <Section
        title="Contact"
        copy="For privacy questions, contact privacy@moniatlas.com."
      >
        <Link
          href="mailto:privacy@moniatlas.com"
          className="mt-8 inline-flex rounded-full bg-[#004aad] px-6 py-3 font-semibold text-white hover:bg-[#003f94]"
        >
          privacy@moniatlas.com
        </Link>
      </Section>

      <Section
        title="Legal note"
        copy="This policy is a working public version and should be reviewed before full commercial launch."
        tone="muted"
      />
    </PublicPage>
  );
}
