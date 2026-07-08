import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type PublicPageProps = {
  eyebrow?: string;
  title: string;
  copy: string;
  children: ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PublicPage({
  eyebrow,
  title,
  copy,
  children,
  ctaHref,
  ctaLabel,
  secondaryHref,
  secondaryLabel,
}: PublicPageProps) {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />
      <section className="relative isolate overflow-hidden bg-[#004aad] px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50 backdrop-blur">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-50 sm:text-xl sm:leading-9">
              {copy}
            </p>
            {ctaHref || secondaryHref ? (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {ctaHref && ctaLabel ? (
                  <Link
                    href={ctaHref}
                    className="rounded-full bg-white px-6 py-3 text-center font-semibold text-[#004aad] hover:bg-blue-50"
                  >
                    {ctaLabel}
                  </Link>
                ) : null}
                {secondaryHref && secondaryLabel ? (
                  <Link
                    href={secondaryHref}
                    className="rounded-full border border-white/35 px-6 py-3 text-center font-semibold text-white hover:bg-white/10"
                  >
                    {secondaryLabel}
                  </Link>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </section>
      {children}
      <SiteFooter />
    </main>
  );
}

export function Section({
  title,
  copy,
  children,
  tone = "white",
}: {
  title?: string;
  copy?: string;
  children?: ReactNode;
  tone?: "white" | "muted";
}) {
  return (
    <section
      className={`px-5 py-16 sm:px-6 sm:py-20 lg:px-8 ${
        tone === "muted" ? "bg-slate-50" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {title || copy ? (
          <div className="max-w-3xl">
            {title ? (
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {copy ? (
              <p className="mt-5 text-lg leading-8 text-slate-600">{copy}</p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function CardGrid({ items }: { items: string[] }) {
  return (
    <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="h-2 w-12 rounded-full bg-[#004aad]" />
          <h3 className="mt-5 text-lg font-bold text-slate-950">{item}</h3>
        </article>
      ))}
    </div>
  );
}
