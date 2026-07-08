import Link from "next/link";
import { CardGrid, PublicPage, Section } from "@/components/public-page";

const registerUrl = "https://app.moniatlas.com/register";

const differenceCards = [
  "Built around the full financial picture",
  "Manual-first so users can start quickly",
  "Connected account features planned",
  "AI insights designed to explain, not advise",
  "Focused on clarity, not financial noise",
];

export default function AboutPage() {
  return (
    <PublicPage
      eyebrow="About"
      title="About MoniAtlas"
      copy="MoniAtlas is being built to help financially busy people get a clearer view of their money, without relying on scattered spreadsheets, disconnected apps, and mental guesswork."
      ctaHref={registerUrl}
      ctaLabel="Create Account"
      secondaryHref="/how-it-works"
      secondaryLabel="See how it works"
    >
      <Section
        title="Why MoniAtlas exists"
        copy="Modern financial lives are increasingly fragmented. People manage multiple accounts, debts, pensions, investments, bills, mortgages, and goals across different providers. MoniAtlas exists to bring that information into one clearer view."
      />

      <Section
        title="Our mission"
        copy="To help people organise, track, and understand their financial lives with more clarity and confidence."
        tone="muted"
      />

      <Section title="What makes MoniAtlas different">
        <CardGrid items={differenceCards} />
      </Section>

      <Section
        title="Insights, not advice"
        copy="MoniAtlas does not provide regulated financial advice. The product is designed to help users understand their own information through organisation, tracking, planning, and explainable insights."
        tone="muted"
      >
        <Link
          href={registerUrl}
          className="mt-8 inline-flex rounded-full bg-[#004aad] px-6 py-3 font-semibold text-white hover:bg-[#003f94]"
        >
          Create Account
        </Link>
      </Section>
    </PublicPage>
  );
}
