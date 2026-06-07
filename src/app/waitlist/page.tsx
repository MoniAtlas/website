import Link from "next/link";

export default function WaitlistPage() {
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
            Early beta
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Join the waitlist
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Be one of the first to access MoniAtlas when early beta access
            opens.
          </p>

          <form className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:flex sm:gap-3 sm:p-5">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-slate-950 placeholder:text-slate-400 focus:border-[#004aad] focus:outline-none focus:ring-2 focus:ring-[#004aad]"
            />
            <button
              type="button"
              className="mt-3 w-full rounded-full bg-[#004aad] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#003f94] focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:ring-offset-4 sm:mt-0 sm:w-auto"
            >
              Join waitlist
            </button>
          </form>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            This form is visual only for now. We will connect it to a waitlist
            database later.
          </p>
        </section>
      </div>
    </main>
  );
}
