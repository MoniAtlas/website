import Link from "next/link";
import { CardGrid, PublicPage, Section } from "@/components/public-page";

const registerUrl = "https://app.moniatlas.com/register";

const openBankingCards = [
  "Account balances",
  "Transactions",
  "Cash flow visibility",
  "Reduced manual updates",
  "Clearer financial overview",
];

const doesNotDoCards = [
  "Does not store your bank login details",
  "Does not move money",
  "Does not make payments",
  "Does not switch products for you",
  "Does not provide regulated financial advice",
];

export default function OpenBankingPage() {
  return (
    <PublicPage
      eyebrow="Open Banking"
      title="Open Banking and connected accounts"
      copy="MoniAtlas is being built to support secure, consent-based account connections using Open Banking."
      ctaHref={registerUrl}
      ctaLabel="Create Account"
      secondaryHref="/privacy"
      secondaryLabel="Read our Privacy Policy"
    >
      <Section
        title="What Open Banking helps with"
        copy="When available, connected accounts can help reduce manual updates by allowing supported balances and transactions to be viewed inside MoniAtlas."
      >
        <CardGrid items={openBankingCards} />
      </Section>

      <Section
        title="Consent-based access"
        copy="Open Banking connections are based on user consent. You will be shown what information is being requested and why before connecting an account."
        tone="muted"
      />

      <Section title="What MoniAtlas does not do">
        <CardGrid items={doesNotDoCards} />
      </Section>

      <Section
        title="Staying in control"
        copy="You decide what to connect, what to add manually, and what to remove. MoniAtlas is designed around transparency, consent, and user control."
        tone="muted"
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={registerUrl}
            className="rounded-full bg-[#004aad] px-6 py-3 text-center font-semibold text-white hover:bg-[#003f94]"
          >
            Create Account
          </Link>
          <Link
            href="/privacy"
            className="rounded-full border border-slate-300 px-6 py-3 text-center font-semibold text-slate-900 hover:border-[#004aad] hover:text-[#004aad]"
          >
            Read our Privacy Policy
          </Link>
        </div>
      </Section>
    </PublicPage>
  );
}
