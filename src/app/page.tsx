import Link from "next/link";
import { PricingSection } from "./components/PricingSection";

const loginUrl = "https://app.moniatlas.com/login";
const registerUrl = "https://app.moniatlas.com/register";

const navItems = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Open Banking", href: "/open-banking" },
  { label: "Security", href: "/security" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const productFeatures = [
  {
    title: "Money Map",
    copy: "See your accounts, assets, debts, property, and net worth in one clear overview.",
  },
  {
    title: "Cash flow planner",
    copy: "Understand what is coming in, what is going out, and what your next 90 days could look like.",
  },
  {
    title: "Manual accounts",
    copy: "Start with simple manual tracking for bank accounts, savings, credit cards, loans, mortgages, property, pensions, investments, and crypto.",
  },
  {
    title: "AI insights",
    copy: "Ask plain-English questions and get explainable insights based on the information available in your account.",
  },
  {
    title: "Property and mortgage view",
    copy: "Track property value, mortgage balance, repayment details, rate end dates, and renewal timelines.",
  },
  {
    title: "Future outlook",
    copy: "Build a clearer view of where your financial life is heading.",
  },
];

const questionBubbles = [
  "What am I actually worth?",
  "What is coming up in the next 90 days?",
  "Are my debts reducing?",
  "Is my mortgage position improving?",
  "Am I building long-term financial momentum?",
];

const steps = [
  "Create your free account",
  "Add your accounts",
  "View your financial picture",
  "Ask Moni",
];

const trustCards = [
  "Start manually, connect later",
  "Read-only insight model",
  "GDPR-first approach",
  "Insights, not advice",
  "User remains in control",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative isolate overflow-hidden bg-[#004aad] text-white">
        <div className="absolute left-1/2 top-0 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute right-0 top-28 -z-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute bottom-10 left-8 -z-10 h-64 w-64 rounded-full bg-blue-200/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
          <header className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/15 bg-white/5 px-4 py-3 backdrop-blur md:flex-nowrap md:px-5">
            <Link href="/" className="text-xl font-bold tracking-tight">
              MoniAtlas
            </Link>

            <nav className="order-3 flex w-full items-center gap-5 overflow-x-auto text-sm font-medium text-blue-50/90 md:order-2 md:w-auto md:justify-center md:overflow-visible">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="order-2 flex items-center gap-2 md:order-3">
              <Link
                href={loginUrl}
                className="rounded-full border border-white/35 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Log In
              </Link>
              <Link
                href={registerUrl}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#004aad] shadow-sm transition hover:bg-blue-50"
              >
                Create Account
              </Link>
            </div>
          </header>

          <div className="grid gap-10 pb-36 pt-16 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-44 lg:pt-24">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50 shadow-sm backdrop-blur">
                AI-first financial clarity for UK professionals
              </p>
              <h1 className="mt-7 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                One map for all your money.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50/90 sm:text-xl sm:leading-9">
                MoniAtlas brings your accounts, assets, debts, cash flow, and
                future outlook into one calm financial dashboard, helping you
                see whether your financial life is actually moving forward.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100/85">
                Start free with manual tracking today. Connected accounts,
                richer planning tools, and AI-powered insights will unlock as
                MoniAtlas develops.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={registerUrl}
                  className="rounded-full bg-white px-7 py-3 text-center font-semibold text-[#004aad] shadow-lg shadow-blue-950/20 transition hover:bg-blue-50"
                >
                  Create Account
                </Link>
                <Link
                  href="/how-it-works"
                  className="rounded-full border border-white/35 px-7 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  See how it works
                </Link>
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-6 text-blue-100/80">
                MoniAtlas provides organisation, tracking, planning, and
                insights. It does not provide regulated financial advice.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="ml-auto max-w-md rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl shadow-blue-950/30 backdrop-blur">
                <div className="rounded-[1.5rem] bg-white p-5 text-slate-950 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        Money Map overview
                      </p>
                      <p className="mt-2 text-4xl font-bold tracking-tight">
                        £284,250
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                      Forward
                    </span>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs font-medium uppercase text-slate-500">
                        Cash flow
                      </p>
                      <p className="mt-2 text-lg font-bold">
                        90-day outlook
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs font-medium uppercase text-slate-500">
                        Accounts
                      </p>
                      <p className="mt-2 text-lg font-bold">12 tracked</p>
                    </div>
                  </div>
                  <div className="mt-4 rounded-2xl bg-[#004aad] p-4 text-white">
                    <p className="text-sm font-semibold">AI insight</p>
                    <p className="mt-2 text-sm leading-6 text-blue-50">
                      Your financial position is moving forward this month.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-slate-50 px-5 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="-mt-24 rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-2xl shadow-blue-950/15 backdrop-blur sm:p-7 lg:-mt-32 lg:p-8">
            <div className="grid gap-7 lg:grid-cols-[1fr_22rem] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#004aad]">
                  Product preview
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  What MoniAtlas gives you
                </h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {productFeatures.map((feature) => (
                    <article
                      key={feature.title}
                      className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-blue-50/50 p-5 shadow-sm"
                    >
                      <h3 className="text-lg font-bold text-slate-950">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {feature.copy}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="rounded-[1.75rem] border border-blue-100 bg-[#f7fbff] p-5 shadow-inner">
                <p className="text-sm font-semibold text-[#004aad]">
                  Money Map overview
                </p>
                <p className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
                  £284,250
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
                    <span className="text-sm font-medium text-slate-600">
                      Cash flow
                    </span>
                    <span className="text-sm font-bold text-slate-950">
                      90-day outlook
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
                    <span className="text-sm font-medium text-slate-600">
                      Accounts
                    </span>
                    <span className="text-sm font-bold text-slate-950">
                      12 accounts tracked
                    </span>
                  </div>
                  <div className="rounded-2xl bg-[#004aad] p-4 text-white shadow-lg shadow-blue-900/20">
                    <p className="text-sm font-semibold">AI insight</p>
                    <p className="mt-2 text-sm leading-6 text-blue-50">
                      &quot;Your financial position is moving forward this
                      month.&quot;
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Your financial life is spread everywhere
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Modern money is no longer simple. Your current accounts, savings,
              pensions, mortgage, credit cards, loans, investments, bills, and
              spreadsheets all sit in different places.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            {questionBubbles.map((question) => (
              <span
                key={question}
                className="rounded-full border border-blue-100 bg-blue-50 px-5 py-3 text-sm font-semibold text-[#004aad]"
              >
                {question}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="bg-slate-50 px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            How MoniAtlas works
          </h2>
          <div className="mt-9 grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#004aad] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {step}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      <section
        id="security"
        className="bg-slate-50 px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Designed around clarity, consent, and control
            </h2>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {trustCards.map((card) => (
              <article
                key={card}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="h-2 w-12 rounded-full bg-[#004aad]" />
                <h3 className="mt-5 text-base font-bold leading-6 text-slate-950">
                  {card}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="open-banking" className="bg-white px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#004aad] px-6 py-12 text-white shadow-2xl shadow-blue-950/15 sm:px-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Start building your Money Map
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-50">
                Create your free MoniAtlas account and start bringing your
                financial life into one clear view.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={registerUrl}
                className="rounded-full bg-white px-6 py-3 text-center font-semibold text-[#004aad] hover:bg-blue-50"
              >
                Create Account
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-white/35 px-6 py-3 text-center font-semibold text-white hover:bg-white/10"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Link href="/" className="text-xl font-bold">
              MoniAtlas
            </Link>
            <p className="mt-3 text-sm text-slate-300">
              One map for all your money
            </p>
            <p className="mt-6 max-w-xl text-sm leading-6 text-slate-400">
              MoniAtlas provides organisation, tracking, planning, and insights.
              It does not provide regulated financial advice.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-3 text-sm text-slate-300 sm:grid-cols-3">
            <Link href="/how-it-works" className="hover:text-white">
              How it works
            </Link>
            <Link href="/pricing" className="hover:text-white">
              Pricing
            </Link>
            <Link href="/open-banking" className="hover:text-white">
              Open Banking
            </Link>
            <Link href="/security" className="hover:text-white">
              Security
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
