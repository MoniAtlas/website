import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-slate-950">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm font-semibold text-[#004aad] underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:ring-offset-4"
        >
          Back to home
        </Link>

        <section className="py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#004aad]">
            Product
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            How MoniAtlas works
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            MoniAtlas brings your financial accounts, assets, liabilities, cash
            flow, and future outlook into one simple dashboard, so you can see
            where you stand and what is changing over time.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["Connect", "Understand", "Look ahead"].map((step) => (
              <div
                key={step}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h2 className="text-base font-semibold text-slate-950">
                  {step}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A simple starter view for building a complete financial map.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
