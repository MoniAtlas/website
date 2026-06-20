import Link from "next/link";

const pricingPlans = [
  {
    name: "Early access",
    price: "Free",
    purpose:
      "For people who want to join the waitlist and get invited when MoniAtlas is ready.",
    features: [
      "Join the early access waitlist",
      "Product updates",
      "Private beta invite",
      "Priority access when beta opens",
    ],
    cta: "Join early access",
    href: "/waitlist",
  },
  {
    name: "Founder",
    price: "£4.99",
    cadence: "/month",
    purpose:
      "For early adopters who want simple manual money tracking before full automation is live.",
    features: [
      "Manual accounts",
      "Money Map overview",
      "Cash flow planner",
      "Recurring bills and payment tracking",
      "Debt overview",
      "Retirement snapshot",
      "Early access to new features",
    ],
    cta: "Reserve founder plan",
    href: "/waitlist?plan=founder",
    recommended: true,
  },
  {
    name: "Plus",
    price: "£8.99",
    cadence: "/month",
    purpose:
      "For users who want connected accounts and AI-powered insights once those features are ready.",
    features: [
      "Everything in Founder",
      "Open Banking account connections",
      "Automated balance updates",
      "AI money assistant",
      "Forecasts and scenario planning",
      "Smart reminders",
      "Monthly money check-in",
    ],
    cta: "Join waitlist",
    href: "/waitlist?plan=plus",
  },
];

export function PricingSection({
  showIntro = true,
}: {
  showIntro?: boolean;
}) {
  return (
    <section id="pricing" className="bg-slate-50 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        {showIntro ? (
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#004aad]">
              Pricing
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Simple pricing for a clearer money picture
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Start free while MoniAtlas is in early access. As the app
              develops, paid plans will unlock richer cash flow tools,
              connected accounts, and AI-powered money insights.
            </p>
          </div>
        ) : null}

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm ${
                plan.recommended
                  ? "border-[#004aad] ring-2 ring-[#004aad]/10"
                  : "border-slate-200"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-950">
                    {plan.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {plan.purpose}
                  </p>
                </div>
                {plan.recommended ? (
                  <span className="shrink-0 rounded-full bg-[#004aad]/10 px-3 py-1 text-xs font-semibold text-[#004aad]">
                    Recommended
                  </span>
                ) : null}
              </div>

              <div className="mt-6">
                <span className="text-4xl font-bold tracking-tight text-slate-950">
                  {plan.price}
                </span>
                {plan.cadence ? (
                  <span className="ml-1 text-sm font-medium text-slate-500">
                    {plan.cadence}
                  </span>
                ) : null}
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#004aad]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:ring-offset-4 ${
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

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#004aad]">
                Coming later
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-950">
                Household plan
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                £14.99/month planned for household views, shared goals,
                multiple profiles, family cash flow planning, and joint
                property or mortgage organisation.
              </p>
            </div>
            <Link
              href="/waitlist?plan=household"
              className="inline-flex shrink-0 justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:border-[#004aad] hover:text-[#004aad] focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:ring-offset-4"
            >
              Register interest
            </Link>
          </div>
        </div>

        <p className="mt-6 text-sm leading-6 text-slate-500">
          MoniAtlas provides organisation, tracking, and insights. It does not
          provide regulated financial advice.
        </p>
      </div>
    </section>
  );
}
