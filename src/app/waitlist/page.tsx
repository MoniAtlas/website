import Link from "next/link";
import { PublicPage, Section } from "@/components/public-page";

const registerUrl = "https://app.moniatlas.com/register";

export default function WaitlistPage() {
  return (
    <PublicPage
      eyebrow="Register interest"
      title="Register your interest"
      copy="Tell us which MoniAtlas plan you are interested in and we will let you know as paid features become available."
      ctaHref={registerUrl}
      ctaLabel="Create Account"
      secondaryHref="/pricing"
      secondaryLabel="View pricing"
    >
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
            <div className="grid gap-5">
              <div>
                <label className="text-sm font-semibold text-slate-800" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  disabled
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-500 placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-800" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  disabled
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-500 placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-800" htmlFor="plan">
                  Plan interest
                </label>
                <select
                  id="plan"
                  defaultValue="Founder"
                  disabled
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-500"
                >
                  <option>Free</option>
                  <option>Founder</option>
                  <option>Plus</option>
                  <option>Household</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-800" htmlFor="message">
                  Message optional
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us what you are interested in"
                  disabled
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-500 placeholder:text-slate-400"
                />
              </div>
            </div>
            <button
              type="button"
              className="mt-6 rounded-full bg-[#004aad] px-6 py-3 text-sm font-semibold text-white shadow-sm"
            >
              Register interest
            </button>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              This form is not connected yet. No payment is taken.
            </p>
          </div>

          <aside className="rounded-[1.75rem] bg-[#004aad] p-6 text-white shadow-2xl shadow-blue-950/15">
            <h2 className="text-2xl font-bold">Ready to start?</h2>
            <p className="mt-4 text-blue-50">
              Already ready to start? Create your free account and begin
              building your Money Map.
            </p>
            <Link
              href={registerUrl}
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-[#004aad] hover:bg-blue-50"
            >
              Create Account
            </Link>
          </aside>
        </div>
      </Section>
    </PublicPage>
  );
}
