import Link from "next/link";
import { CardGrid, PublicPage, Section } from "@/components/public-page";

const betaAccessUrl = "/beta-access";

const pillars = [
  {
    title: "Money Map",
    copy: "Bank accounts, savings, credit cards, loans, mortgages, property, pensions, investments and crypto, brought into one connected net worth view instead of sitting in separate provider apps.",
  },
  {
    title: "Cash flow planner",
    copy: "See what is coming in, what is going out, and what is left before payday, including a rolling 90-day outlook rather than a single month-end snapshot.",
  },
  {
    title: "Savings goals",
    copy: "Set a target and a deadline, link it to the account funding it, and track progress alongside everything else, instead of in a separate spreadsheet or app.",
  },
  {
    title: "Document intelligence",
    copy: "Upload statements, mortgage offers, payslips or P60s. MoniAtlas reads and extracts the figures, then asks you to confirm them before anything is applied to your accounts.",
  },
  {
    title: "Debt and property tracking",
    copy: "Mortgage balances, rates, renewal timelines and property equity are tracked alongside your other accounts, not left as a one-off calculation.",
  },
  {
    title: "Connected accounts",
    copy: "Open Banking connections are being rolled out through a UK-regulated provider, so accounts you hold elsewhere can stay up to date without manual entry.",
  },
];

const principles = [
  "Built around the person, not the account",
  "Start manually, connect when you are ready",
  "AI-first insights, explained in plain English",
  "Read-only: MoniAtlas never moves your money",
  "GDPR-first, UK-hosted by default",
];

function PillarGrid() {
  return (
    <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pillars.map((pillar) => (
        <article
          key={pillar.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="h-2 w-12 rounded-full bg-[#004aad]" />
          <h3 className="mt-5 text-lg font-bold text-slate-950">{pillar.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{pillar.copy}</p>
        </article>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <PublicPage
      title="About MoniAtlas"
      copy="MoniAtlas is an AI-first financial clarity platform built around the person, not the account — bringing everyday money, debt, property, pensions, investments, cash flow and goals into one connected, understandable view."
      ctaHref={betaAccessUrl}
      ctaLabel="Request Beta Access"
      secondaryHref="/#how-it-works"
      secondaryLabel="See how it works"
    >
      <Section title="Why MoniAtlas exists">
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          The UK personal finance market is fragmented and largely organised around individual products.
          Someone might hold a current account, savings, credit cards, loans, a mortgage, a pension and
          investments across several different providers, and each institution generally only shows the
          product it manages — never the full picture.
        </p>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Budgeting apps only partly solve this. Most focus on categorising transactions, controlling costs
          or short-term spending, and rarely connect everyday cash flow with debt, property equity,
          pensions, goals and where your finances are actually heading. MoniAtlas exists to turn that
          scattered picture into one coherent, understandable financial life.
        </p>
      </Section>

      <Section
        title="Our mission"
        copy="To help people understand where they stand today, what is changing, what is coming next, and whether their overall financial position is moving forward — with more clarity and confidence than scattered spreadsheets and disconnected apps allow."
        tone="muted"
      />

      <Section
        title="One connected view of your financial life"
        copy="Rather than another transaction tracker, MoniAtlas is built as a single, connected picture of everything that makes up your finances."
      >
        <PillarGrid />
      </Section>

      <Section title="Ask Moni: insights, not advice" tone="muted">
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          MoniAtlas includes Moni, an embedded AI assistant that reads the information already in your
          account — your accounts, balances and cash flow — and turns it into clear, explainable answers to
          questions like &ldquo;what changed this month?&rdquo; or &ldquo;is my mortgage position improving?&rdquo;
        </p>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Moni operates under an &ldquo;Insights, Not Advice&rdquo; framework: it explains the data you have
          given it, and any figures it drafts from an uploaded document are shown to you for review and
          confirmation before they are applied anywhere. MoniAtlas does not provide regulated financial
          advice.
        </p>
      </Section>

      <Section title="Built for UK individuals and households">
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          MoniAtlas is designed for people and households managing increasingly complex financial lives —
          organising everyday money, paying down debt, building savings, keeping an eye on a mortgage,
          planning for retirement, or simply replacing a personal spreadsheet with a calmer digital control
          centre.
        </p>
      </Section>

      <Section title="How we're building MoniAtlas" tone="muted">
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          MoniAtlas starts free with manual account tracking, so anyone can build their Money Map in
          minutes without connecting a bank. From there, we are building out richer cash flow planning, Ask
          Moni&rsquo;s AI-powered insights, Open Banking connections, household and joint-finance
          functionality, and broader Open Finance capabilities as the product matures.
        </p>
      </Section>

      <Section title="What makes MoniAtlas different">
        <CardGrid items={principles} />
      </Section>

      <Section
        title="Insights, not advice"
        copy="MoniAtlas does not provide regulated financial advice. The product is designed to help you understand your own information through organisation, tracking, planning, and explainable insights."
        tone="muted"
      >
        <Link
          href={betaAccessUrl}
          data-analytics-event="beta_access_requested"
          className="mt-8 inline-flex rounded-full bg-[#004aad] px-6 py-3 font-semibold text-white hover:bg-[#003f94]"
        >
          Request Beta Access
        </Link>
      </Section>
    </PublicPage>
  );
}
