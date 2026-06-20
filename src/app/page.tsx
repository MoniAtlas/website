import Link from "next/link";
import { PricingSection } from "./components/PricingSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <header className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#004aad]">
            MoniAtlas
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="/how-it-works">How it works</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
          </nav>

          <Link
            href="/waitlist"
            className="rounded-full bg-[#004aad] px-5 py-2 text-sm font-semibold text-white"
          >
            Join waitlist
          </Link>
        </header>

        <div className="grid flex-1 items-center gap-12 py-20 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[#004aad]">
              Early access money organisation for UK professionals
            </p>

            <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
              One map for all your money.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              MoniAtlas helps you organise money tracking, cash flow planning,
              and forward-looking insights in one simple dashboard.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/waitlist"
                className="rounded-full bg-[#004aad] px-7 py-3 text-center font-semibold text-white"
              >
                Join early access
              </Link>

              <Link
                href="/how-it-works"
                className="rounded-full border border-slate-300 px-7 py-3 text-center font-semibold text-slate-800"
              >
                How it works
              </Link>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Insights only. MoniAtlas does not provide regulated financial
              advice.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-2xl">
            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Net worth</p>
              <p className="mt-2 text-4xl font-bold text-slate-950">
                £284,250
              </p>

              <div className="mt-6 rounded-2xl bg-blue-50 p-4">
                <p className="text-sm font-semibold text-[#004aad]">
                  Moni insight
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Your financial position is moving forward this month.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Cash flow</p>
                  <p className="mt-1 text-xl font-bold">90 days</p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Accounts</p>
                  <p className="mt-1 text-xl font-bold">12 linked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PricingSection />
    </main>
  );
}
