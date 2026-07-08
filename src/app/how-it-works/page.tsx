import Link from "next/link";
import { CardGrid, PublicPage, Section } from "@/components/public-page";

const registerUrl = "https://app.moniatlas.com/register";

const steps = [
  {
    title: "Create your free account",
    copy: "Sign up and start building your Money Map in minutes.",
  },
  {
    title: "Add your accounts",
    copy: "Start manually by adding the accounts, assets, and liabilities that matter to you, including bank accounts, savings, credit cards, loans, property, mortgages, pensions, investments, and crypto.",
  },
  {
    title: "View your financial picture",
    copy: "MoniAtlas organises your information into clear views for net worth, cash flow, debt, property, and future outlook.",
  },
  {
    title: "Ask Moni",
    copy: "Use the AI assistant to ask plain-English questions and receive explainable insights based on the information available in your account.",
  },
];

const trackItems = [
  "Bank and savings accounts",
  "Credit cards and loans",
  "Property and mortgages",
  "Pensions and investments",
  "Cash flow and bills",
  "Future outlook",
];

export default function HowItWorksPage() {
  return (
    <PublicPage
      eyebrow="How it works"
      title="How MoniAtlas works"
      copy="Create your free account, build your Money Map, and start bringing your accounts, assets, debts, cash flow, and future outlook into one clear view."
      ctaHref={registerUrl}
      ctaLabel="Create Account"
      secondaryHref="/pricing"
      secondaryLabel="View pricing"
    >
      <Section title="Four-step process">
        <div className="mt-9 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#004aad] text-sm font-bold text-white">
                {index + 1}
              </span>
              <h2 className="mt-5 text-xl font-bold text-slate-950">
                {step.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {step.copy}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="What you can track" tone="muted">
        <CardGrid items={trackItems} />
      </Section>

      <Section
        title="Insights, not advice"
        copy="MoniAtlas helps you organise, track, and understand your financial information. It does not provide regulated financial advice, product recommendations, or instructions to buy, sell, switch, or invest."
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
