import Link from "next/link";

export default function PricingPage() {
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
            Early access
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Pricing
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            MoniAtlas will launch with simple monthly pricing for early access
            users. The goal is a clear plan that gives financially busy people
            one place to understand their money without unnecessary complexity.
          </p>
          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-950">
              Early access plan
            </h2>
            <p className="mt-3 text-slate-600">
              Pricing details will be shared with waitlist members before beta
              access opens.
            </p>
            <Link
              href="/waitlist"
              className="mt-6 inline-flex rounded-full bg-[#004aad] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#003f94] focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:ring-offset-4"
            >
              Join the waitlist
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
