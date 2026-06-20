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
            Join MoniAtlas early access
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Register interest for early access, Founder, Plus, or the future
            Household plan. There is no payment checkout yet.
          </p>

          <form className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <div className="grid gap-5">
              <div>
                <label
                  className="text-sm font-semibold text-slate-800"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:border-[#004aad] focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                />
              </div>

              <div>
                <label
                  className="text-sm font-semibold text-slate-800"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:border-[#004aad] focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                />
              </div>

              <div>
                <label
                  className="text-sm font-semibold text-slate-800"
                  htmlFor="plan"
                >
                  Plan interest
                </label>
                <select
                  id="plan"
                  name="plan"
                  defaultValue="Early access"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 focus:border-[#004aad] focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                >
                  <option>Early access</option>
                  <option>Founder</option>
                  <option>Plus</option>
                  <option>Household</option>
                </select>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-full bg-[#004aad] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#003f94] focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:ring-offset-4 sm:w-auto"
            >
              Submit interest
            </button>
          </form>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            We&apos;ll let you know when MoniAtlas early access is ready. This
            placeholder form does not process payments or collect personal
            financial details.
          </p>
        </section>
      </div>
    </main>
  );
}
