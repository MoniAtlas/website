import Link from "next/link";
import { PricingSection } from "../components/PricingSection";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-10">
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

        <section className="max-w-3xl py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#004aad]">
            Early access
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Simple pricing for a clearer money picture
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Start free while MoniAtlas is in early access. As the app develops,
            paid plans will unlock richer cash flow tools, connected accounts,
            and AI-powered money insights.
          </p>
        </section>
      </div>
      <PricingSection showIntro={false} />
    </main>
  );
}
