import Link from "next/link";

const registerUrl = "https://app.moniatlas.com/register";

const pricingPlans = [
  {
    name: "Free",
    price: "£0",
    cadence: "/month",
    purpose:
      "For people who want to start building their Money Map and understand their financial position in one place.",
    features: [
      "Manual accounts",
      "Money Map overview",
      "Basic net worth view",
      "Basic cash flow planner",
      "Basic debt overview",
      "Basic property and mortgage tracking",
    ],
    cta: "Create Account",
    href: registerUrl,
  },
  {
    name: "Founder",
    price: "£4.99",
    cadence: "/month",
    badge: "Planned / early adopter",
    purpose:
      "For early adopters who want enhanced planning tools as MoniAtlas develops.",
    features: [
      "Everything in Free",
      "Recurring bills and payment tracking",
      "Enhanced cash flow planner",
      "Retirement snapshot",
      "Early access to new features",
    ],
    cta: "Register interest",
    href: "/waitlist?plan=founder",
    note: "Founder plan is not charged yet.",
    recommended: true,
  },
  {
    name: "Plus",
    price: "£8.99",
    cadence: "/month",
    badge: "Coming soon",
    purpose:
      "For users who want connected accounts, automation, and AI-powered financial insights once those features are ready.",
    features: [
      "Everything in Founder",
      "Open Banking account connections",
      "Automated balance updates",
      "AI money assistant",
      "Forecasts and scenario planning",
      "Smart reminders",
      "Monthly money check-in",
    ],
    cta: "Coming soon",
    href: "/waitlist?plan=plus",
  },
];

const comparisonGroups = [
  {
    category: "Core Dashboard",
    features: [
      ["Money Map / financial overview", "Included", "Included", "Included"],
      ["Net worth dashboard", "Basic", "Included", "Included"],
      ["Assets vs liabilities summary", "Basic", "Included", "Included"],
      ["Account category breakdown", "Limited", "Included", "Included"],
      ["Mobile-first dashboard", "Included", "Included", "Included"],
    ],
  },
  {
    category: "Accounts",
    features: [
      ["Manual accounts", "Limited", "Included", "Included"],
      ["Bank & savings accounts", "Included", "Included", "Included"],
      ["Credit cards", "Included", "Included", "Included"],
      ["Loans", "Included", "Included", "Included"],
      ["Mortgages", "View only / basic manual", "Included", "Included"],
      ["Property value tracking", "Basic", "Included", "Included"],
      ["Pensions", "Manual only", "Included", "Included"],
      ["Investments", "Manual only", "Included", "Included"],
      ["Crypto", "Manual only", "Included", "Included"],
      ["Edit/delete manual accounts", "Included", "Included", "Included"],
      ["Document Storage", "Not included", "Limited", "Included"],
    ],
  },
  {
    category: "Open Banking",
    features: [
      ["Link bank accounts", "1 connection / limited", "Included", "Included"],
      ["Linked current accounts", "Limited", "Included", "Included"],
      ["Linked savings accounts", "Limited", "Included", "Included"],
      ["Auto balance refresh", "Limited", "Included", "Included"],
      ["Transaction sync", "Limited history", "Included", "Included"],
      ["Reconnect expired consent", "Included", "Included", "Included"],
    ],
  },
  {
    category: "Cash Flow",
    features: [
      ["90-day cash flow", "Included", "Included", "Included"],
      ["Income vs spending view", "Basic", "Included", "Included"],
      ["Upcoming balance risk", "Not included", "Basic", "Advanced"],
      ["Recurring bills/payment tracking", "Not included", "Included", "Included"],
      ["Manual expected income/outgoings", "Not included", "Included", "Included"],
      ["Category-level cash flow", "Not included", "Basic", "Advanced"],
      ["Cash flow explanation", "Not included", "Included", "Included"],
    ],
  },
  {
    category: "AI Layer",
    features: [
      ["AI assistant access", "Limited prompts", "Included", "Included"],
      ['Ask "What\'s my net worth?"', "Included", "Included", "Included"],
      ['Ask "What changed this week?"', "Limited", "Included", "Included"],
      ['Ask "Can I afford this month?"', "Not included", "Included", "Included"],
      ["AI insight feed", "Basic", "Included", "Included"],
      ["AI explains account changes", "Not included", "Included", "Included"],
      ["AI cash flow summaries", "Not included", "Included", "Included"],
      ["AI net worth summaries", "Not included", "Included", "Included"],
      ['AI source references / "why" explanation', "Not included", "Included", "Included"],
      ["AI scenario prompts", "Not included", "Limited", "Included"],
      ["AI planning conversations", "Not included", "Limited", "Included"],
      ["AI action orchestration", "Not included", "Not included", "Future only"],
    ],
  },
  {
    category: "Future / Planning",
    features: [
      ["Future dashboard", "Basic", "Included", "Included"],
      ["Retirement snapshot", "Not included", "Included", "Included"],
      ["Retirement assumptions", "Not included", "Included", "Included"],
      ["Short-term goals list", "Limited", "Included", "Included"],
      ["Goal progress tracking", "Not included", "Included", "Included"],
      ["Scenario modelling", "Not included", "Not included", "Included"],
      ['"What if?" planning', "Not included", "Not included", "Included"],
      ["Mortgage renewal planning", "Not included", "Basic", "Included"],
      ["Interest rate risk view", "Not included", "Not included", "Included"],
    ],
  },
  {
    category: "Property & Mortgage",
    features: [
      ["Primary property tile", "Basic", "Included", "Included"],
      ["Property value", "Manual", "Included", "Included"],
      ["Mortgage balance", "Manual", "Included", "Included"],
      ["Mortgage term/rate/monthly payment", "Not included", "Included", "Included"],
      ["Auto mortgage balance projection", "Not included", "Included", "Included"],
      ["Mortgage renewal reminder", "Not included", "Not included", "Included"],
      ["Mortgage document upload", "Not included", "Not included", "Future Plus"],
      ["Mortgage document AI extraction", "Not included", "Not included", "Future Plus"],
    ],
  },
  {
    category: "Insights & Alerts",
    features: [
      ["Basic dashboard insights", "Included", "Included", "Included"],
      ["Balance movement alerts", "Not included", "Included", "Included"],
      ["Spending anomaly detection", "Not included", "Limited", "Included"],
      ["Cash shortfall warning", "Not included", "Included", "Included"],
      ["Mortgage renewal alerts", "Not included", "Not included", "Included"],
      ["Pension/investment visibility prompts", "Not included", "Included", "Included"],
      ["Push/email/SMS notifications", "Not included", "Not included", "Future Plus"],
    ],
  },
  {
    category: "Data & History",
    features: [
      ["Account history", "Limited", "Included", "Included"],
      ["Transaction history", "Limited", "Included", "Included"],
      ["Trend history", "Not included", "Basic", "Advanced"],
      ["Export data", "Not included", "Included", "Included"],
      ["Audit/history view", "Not included", "Basic", "Included"],
    ],
  },
  {
    category: "Security & Control",
    features: [
      ["Secure login", "Included", "Included", "Included"],
      ["Consent management", "Included", "Included", "Included"],
      ["Disconnect linked accounts", "Included", "Included", "Included"],
      ["Delete account/data", "Included", "Included", "Included"],
      ["GDPR privacy controls", "Included", "Included", "Included"],
      ["Two-factor authentication", "Not included", "Included", "Included"],
    ],
  },
  {
    category: "Support / Commercial",
    features: [
      ["Early access updates", "Included", "Included", "Included"],
      ["Founder pricing lock-in", "Not included", "Included", "Not included"],
      ["Priority access to new features", "Not included", "Included", "Included"],
      ["Beta feature access", "Not included", "Limited", "Included"],
      ["Priority support", "Not included", "Not included", "Included"],
    ],
  },
];

function valueClass(value: string) {
  if (value === "Included") {
    return "bg-emerald-50 text-emerald-700";
  }

  if (value === "Not included") {
    return "bg-slate-100 text-slate-500";
  }

  if (value.startsWith("Future")) {
    return "bg-amber-50 text-amber-700";
  }

  return "bg-blue-50 text-[#004aad]";
}

export function PricingSection({
  showIntro = true,
}: {
  showIntro?: boolean;
}) {
  return (
    <section id="pricing" className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {showIntro ? (
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#004aad]">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Start free, upgrade as MoniAtlas grows
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Compare what is included in Free, Founder, and Plus. Connected
              accounts, richer planning tools, and AI-powered insights will
              expand as MoniAtlas develops.
            </p>
          </div>
        ) : null}

        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col rounded-3xl border p-6 shadow-sm ${
                plan.recommended
                  ? "border-[#004aad] bg-blue-50/70 ring-4 ring-blue-100"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.badge || plan.recommended ? (
                <span className="mb-4 w-fit rounded-full bg-[#004aad] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {plan.badge || "Recommended"}
                </span>
              ) : null}
              <h3 className="text-2xl font-bold text-slate-950">{plan.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {plan.purpose}
              </p>
              <div className="mt-6">
                <span className="text-4xl font-bold tracking-tight">
                  {plan.price}
                </span>
                <span className="ml-1 text-sm font-medium text-slate-500">
                  {plan.cadence}
                </span>
              </div>

              <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#004aad]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.note ? (
                <p className="mt-5 rounded-2xl bg-white/70 p-3 text-sm leading-6 text-slate-600">
                  {plan.note}
                </p>
              ) : null}

              <Link
                href={plan.href}
                className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold ${
                  plan.recommended
                    ? "bg-[#004aad] text-white hover:bg-[#003f94]"
                    : "border border-slate-300 text-slate-900 hover:border-[#004aad] hover:text-[#004aad]"
                }`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-6 rounded-2xl bg-slate-50 p-5 text-sm leading-6 text-slate-600">
          Household plan planned later at £14.99/month.
          <span className="mt-2 block">
            No payment is needed to start. MoniAtlas provides organisation,
            tracking, planning, and insights. It does not provide regulated
            financial advice.
          </span>
        </p>

        <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#004aad]">
                Feature comparison
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                What is included in each tier
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-500">
              Feature availability may change during early access. Future-only
              items are planned, not live product capabilities.
            </p>
          </div>

          <div className="mt-6 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white lg:block">
            <div className="grid grid-cols-[1.25fr_0.75fr_0.75fr_0.75fr] bg-slate-950 text-sm font-semibold text-white">
              <div className="px-4 py-4">Feature</div>
              <div className="px-4 py-4">Free</div>
              <div className="px-4 py-4">Founder £4.99</div>
              <div className="px-4 py-4">Plus £8.99</div>
            </div>

            {comparisonGroups.map((group) => (
              <div key={group.category}>
                <div className="border-t border-slate-200 bg-blue-50 px-4 py-3 text-sm font-bold text-[#004aad]">
                  {group.category}
                </div>
                {group.features.map(([feature, free, founder, plus]) => (
                  <div
                    key={`${group.category}-${feature}`}
                    className="grid grid-cols-[1.25fr_0.75fr_0.75fr_0.75fr] border-t border-slate-100 text-sm"
                  >
                    <div className="px-4 py-3 font-medium text-slate-800">
                      {feature}
                    </div>
                    {[free, founder, plus].map((value, index) => (
                      <div key={`${feature}-${index}`} className="px-4 py-3">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${valueClass(
                            value,
                          )}`}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-4 lg:hidden">
            {comparisonGroups.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                <h4 className="text-base font-bold text-[#004aad]">
                  {group.category}
                </h4>
                <div className="mt-4 space-y-4">
                  {group.features.map(([feature, free, founder, plus]) => (
                    <div
                      key={`${group.category}-${feature}`}
                      className="border-t border-slate-100 pt-4 first:border-t-0 first:pt-0"
                    >
                      <p className="font-medium text-slate-900">{feature}</p>
                      <div className="mt-3 grid gap-2 text-sm sm:grid-cols-3">
                        {[
                          ["Free", free],
                          ["Founder", founder],
                          ["Plus", plus],
                        ].map(([tier, value]) => (
                          <div
                            key={`${feature}-${tier}`}
                            className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2"
                          >
                            <span className="font-medium text-slate-500">
                              {tier}
                            </span>
                            <span
                              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${valueClass(
                                value,
                              )}`}
                            >
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm leading-6 text-slate-500">
          MoniAtlas provides organisation, tracking, planning, and insights. It
          does not provide regulated financial advice.
        </p>
      </div>
    </section>
  );
}
