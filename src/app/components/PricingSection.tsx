import Link from "next/link";

const registerUrl = "https://app.moniatlas.com/register";

const pricingPlans = [
  {
    name: "Free",
    price: "£0",
    cadence: "/month",
    purpose:
      "For building your Money Map, tracking the essentials, and understanding your current financial position.",
    features: [
      "Up to 10 manual accounts",
      "One connected institution",
      "90-day Cash Flow",
      "Basic planning and insights",
      "Limited Ask Moni prompts",
    ],
    cta: "Create Account",
    href: registerUrl,
  },
  {
    name: "Founder",
    price: "£6.99",
    cadence: "/month",
    annualPrice: "or £69/year",
    purpose:
      "For people who want enhanced forecasting, richer history, and early access to selected AI agents.",
    features: [
      "Unlimited manual accounts",
      "Multiple connected institutions",
      "12-month Cash Flow",
      "Enhanced planning and insights",
      "Founder price lock",
    ],
    cta: "Register interest",
    href: "/waitlist?plan=founder",
    recommended: true,
  },
  {
    name: "Premium",
    price: "£14.99",
    cadence: "/month",
    annualPrice: "or £149/year",
    purpose:
      "For the full MoniAtlas experience, including advanced planning, complete history, and the full AI agent library.",
    features: [
      "Full available account history",
      "Advanced Cash Flow forecasting",
      "Full Ask Moni experience",
      "Unlimited AI agents and goals",
      "Priority support",
    ],
    cta: "Register interest",
    href: "/waitlist?plan=premium",
  },
];

type ComparisonFeature = [
  feature: string,
  free: string,
  founder: string,
  premium: string,
];

type ComparisonGroup = {
  category: string;
  features: ComparisonFeature[];
};

const comparisonGroups: ComparisonGroup[] = [
  {
    category: "Core Dashboard",
    features: [
      ["Personal Money Map", "✓", "✓", "✓"],
      ["Net worth and assets vs liabilities", "✓", "✓", "✓"],
      ["Financial coverage score", "✓", "✓", "✓"],
      ["Cause-and-effect financial insights", "Limited", "Enhanced", "Full"],
      ["Net worth history", "3 months", "12 months", "Full history"],
    ],
  },
  {
    category: "Accounts & Documents",
    features: [
      ["Manual accounts", "Up to 10", "Unlimited", "Unlimited"],
      ["Bank accounts, cards, loans and mortgages", "✓", "✓", "✓"],
      ["Pensions, investments and crypto", "✓", "✓", "✓"],
      ["Document storage", "Limited", "Expanded", "Full"],
    ],
  },
  {
    category: "Open Banking",
    features: [
      ["Connected institutions", "1", "Multiple", "Multiple"],
      [
        "Transaction history",
        "90 days",
        "Full available history",
        "Full available history",
      ],
      ["Automatic balance refresh", "Limited", "Enhanced", "Enhanced"],
      ["Data freshness monitoring", "Basic", "Enhanced", "Advanced"],
    ],
  },
  {
    category: "Cash Flow",
    features: [
      ["90-day Cash Flow", "✓", "✓", "✓"],
      ["12-month Cash Flow", "—", "✓", "✓"],
      ["Custom forecasting range", "—", "Limited", "✓"],
      ["Money until payday", "Basic", "Enhanced", "Advanced"],
      ["Recurring payment tracking", "Limited", "✓", "Full"],
      ["Shortfall warnings", "Basic", "Enhanced", "Advanced"],
      ["Cause-and-effect explanations", "Limited", "Enhanced", "Full"],
    ],
  },
  {
    category: "Ask Moni",
    features: [
      [
        "Personal AI assistant",
        "Limited prompts",
        "Full access",
        "Expanded / fair use",
      ],
      ["Net worth and Cash Flow questions", "✓", "✓", "✓"],
      ["“What changed?” explanations", "Limited", "✓", "✓"],
      ["Affordability and planning scenarios", "—", "Limited", "✓"],
      ["Source-backed explanations", "Basic", "Enhanced", "Full"],
    ],
  },
  {
    category: "AI Agent Library",
    features: [
      ["Agent access", "Preview", "Early access", "Full library"],
      ["Active agents", "1 trial agent", "Selected agents", "Unlimited agents"],
      ["Agent controls and pause/disable", "✓", "✓", "✓"],
      ["Agent findings and source references", "✓", "✓", "✓"],
      ["Agent history and audit trail", "Limited", "Enhanced", "Full"],
    ],
  },
  {
    category: "AI Agents",
    features: [
      ["Cash Flow Guardian", "Preview", "Early access", "✓"],
      ["Bills Watch", "Preview", "Early access", "✓"],
      ["Mortgage Watch", "Basic countdown", "Selected features", "Full"],
      ["Debt Progress Agent", "Basic tracking", "Early access", "✓"],
      ["Retirement Tracker", "Basic snapshot", "Early access", "✓"],
      ["Goal Coach", "Up to 3 goals", "Enhanced", "Unlimited"],
      ["Document Agent", "Limited", "Early access", "Full"],
      ["Savings Resilience Agent", "Basic", "Early access", "✓"],
      ["Financial Coverage Agent", "Basic", "Enhanced", "Full"],
      ["Life Event Agent", "—", "—", "Future release"],
    ],
  },
  {
    category: "Planning",
    features: [
      ["Goal planning", "Basic", "Enhanced", "Full"],
      ["Retirement planning", "Basic", "Enhanced", "Full"],
      ["“What if?” scenarios", "—", "Limited", "✓"],
      ["Future financial timeline", "Basic", "Enhanced", "Full"],
    ],
  },
  {
    category: "Property & Mortgage",
    features: [
      ["Property value and equity", "✓", "✓", "✓"],
      ["Mortgage balance, rate and payment", "✓", "✓", "✓"],
      ["Mortgage projections", "—", "Selected features", "✓"],
      ["Mortgage renewal planning", "—", "Early access", "✓"],
    ],
  },
  {
    category: "Insights & Alerts",
    features: [
      ["Dashboard insights", "✓", "✓", "✓"],
      ["Balance movement alerts", "Limited", "✓", "✓"],
      ["Spending anomaly detection", "Limited", "✓", "✓"],
      ["Priority financial actions", "Basic", "Enhanced", "Full"],
      ["Email and future push notifications", "—", "Early access", "✓"],
    ],
  },
  {
    category: "Data & History",
    features: [
      ["Account history", "3 months", "12 months", "Full history"],
      [
        "Transaction history",
        "90 days",
        "Full available history",
        "Full available history",
      ],
      ["Data export", "Basic", "Enhanced", "Full"],
      ["Audit and activity history", "Limited", "Enhanced", "Full"],
    ],
  },
  {
    category: "Security & Control",
    features: [
      ["Secure login and two-factor authentication", "✓", "✓", "✓"],
      ["Consent management", "✓", "✓", "✓"],
      ["Disconnect accounts", "✓", "✓", "✓"],
      ["Delete account and data", "✓", "✓", "✓"],
      ["GDPR and document deletion controls", "✓", "✓", "✓"],
    ],
  },
  {
    category: "Support",
    features: [
      ["Product updates", "✓", "✓", "✓"],
      ["Premium trial", "✓", "✓", "—"],
      ["Founder price lock", "—", "✓", "—"],
      ["Priority feature access", "—", "✓", "✓"],
      ["Priority support", "—", "—", "✓"],
    ],
  },
];

const tierLabels = [
  ["Free", "Free"],
  ["Founder", "Founder £6.99"],
  ["Premium", "Premium £14.99"],
] as const;

function comparisonValueClass(value: string) {
  if (value === "✓") {
    return "font-bold text-emerald-700";
  }

  if (value === "—") {
    return "font-semibold text-slate-400";
  }

  if (value.startsWith("Future")) {
    return "font-semibold text-amber-700";
  }

  return "font-semibold text-slate-700";
}

export function PricingSection({
  showIntro = true,
}: {
  showIntro?: boolean;
}) {
  return (
    <section
      id="pricing"
      className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {showIntro ? (
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#004aad]">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Start free, then choose the depth you need
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Compare Free, Founder, and Premium across connected accounts,
              Cash Flow, planning, history, and AI-powered insights.
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
              <h3 className="text-2xl font-bold text-slate-950">{plan.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {plan.purpose}
              </p>
              <div className="mt-6">
                <span className="text-4xl font-bold tracking-tight text-slate-950">
                  {plan.price}
                </span>
                <span className="ml-1 text-sm font-medium text-slate-500">
                  {plan.cadence}
                </span>
                {plan.annualPrice ? (
                  <p className="mt-2 text-sm font-semibold text-[#004aad]">
                    {plan.annualPrice}
                  </p>
                ) : null}
              </div>

              <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#004aad]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

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
          Monthly and annual prices are shown in GBP. MoniAtlas provides
          organisation, tracking, planning, and insights. It does not provide
          regulated financial advice.
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
              Compare the level of access, history, automation, and support
              available with Free, Founder, and Premium.
            </p>
          </div>

          <div className="mt-6 hidden overflow-x-auto rounded-2xl border border-slate-200 bg-white lg:block">
            <table className="w-full min-w-[72rem] border-collapse text-left text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th scope="col" className="w-[15%] px-4 py-4 font-semibold">
                    Category
                  </th>
                  <th scope="col" className="w-[31%] px-4 py-4 font-semibold">
                    Feature
                  </th>
                  <th scope="col" className="w-[16%] px-4 py-4 font-semibold">
                    Free
                  </th>
                  <th scope="col" className="w-[19%] px-4 py-4 font-semibold">
                    Founder £6.99
                  </th>
                  <th scope="col" className="w-[19%] px-4 py-4 font-semibold">
                    Premium £14.99
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonGroups.map((group) =>
                  group.features.map(
                    ([feature, free, founder, premium], featureIndex) => (
                      <tr
                        key={`${group.category}-${feature}`}
                        className="border-t border-slate-200 align-top"
                      >
                        {featureIndex === 0 ? (
                          <th
                            scope="rowgroup"
                            rowSpan={group.features.length}
                            className="bg-blue-50 px-4 py-4 font-bold text-[#004aad]"
                          >
                            {group.category}
                          </th>
                        ) : null}
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-slate-900"
                        >
                          {feature}
                        </th>
                        {[free, founder, premium].map((value, index) => (
                          <td
                            key={`${feature}-${index}`}
                            className={`px-4 py-3 ${comparisonValueClass(value)}`}
                          >
                            {value}
                          </td>
                        ))}
                      </tr>
                    ),
                  ),
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-4 lg:hidden">
            {comparisonGroups.map((group) => (
              <section
                key={group.category}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                <h4 className="text-base font-bold text-[#004aad]">
                  {group.category}
                </h4>
                <div className="mt-4 space-y-4">
                  {group.features.map(([feature, free, founder, premium]) => (
                    <div
                      key={`${group.category}-${feature}`}
                      className="border-t border-slate-100 pt-4 first:border-t-0 first:pt-0"
                    >
                      <p className="font-medium text-slate-900">{feature}</p>
                      <div className="mt-3 grid gap-2 text-sm sm:grid-cols-3">
                        {tierLabels.map(([tier, label], index) => {
                          const value = [free, founder, premium][index];

                          return (
                            <div
                              key={`${feature}-${tier}`}
                              className="flex min-w-0 items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2 sm:block"
                            >
                              <span className="shrink-0 text-xs font-medium text-slate-500">
                                {label}
                              </span>
                              <span
                                className={`min-w-0 text-right text-xs sm:mt-1 sm:block sm:text-left ${comparisonValueClass(value)}`}
                              >
                                {value}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
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
