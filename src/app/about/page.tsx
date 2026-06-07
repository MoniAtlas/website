import Link from "next/link";

export default function AboutPage() {
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
            Mission
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            About MoniAtlas
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            MoniAtlas is being built to help financially busy people get
            clarity, control, and forward visibility across their financial
            lives.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            It is an AI-first financial clarity platform for UK professionals,
            focused on insights that help people understand their position
            without providing financial advice.
          </p>
        </section>
      </div>
    </main>
  );
}
