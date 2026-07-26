import type { ReactNode } from "react";

export type PolicyTocItem = {
  id: string;
  label: string;
};

export function PolicyMetaBar({
  effectiveDate,
  version,
  toc,
}: {
  effectiveDate: string;
  version: string;
  toc: PolicyTocItem[];
}) {
  return (
    <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
          <span className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1 font-semibold text-slate-700">
            Effective {effectiveDate}
          </span>
          <span className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1 font-semibold text-slate-700">
            Version {version}
          </span>
        </div>
        <details className="lg:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-semibold text-slate-700 hover:border-[#004aad] hover:text-[#004aad]">
            Jump to a section
          </summary>
          <nav aria-label="Section navigation" className="mt-3 grid gap-1 rounded-2xl border border-slate-200 bg-white p-3">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-lg px-2 py-1.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#004aad]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </div>
  );
}

export function PolicyLayout({ toc, children }: { toc: PolicyTocItem[]; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          <nav aria-label="Section navigation" className="sticky top-24 self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              On this page
            </p>
            <ul className="mt-4 space-y-1 border-l border-slate-200 text-sm">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-slate-500 transition hover:border-[#004aad] hover:text-[#004aad]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className="min-w-0 space-y-16">{children}</div>
      </div>
    </div>
  );
}

export function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-[1.75rem]">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
        {children}
      </div>
    </section>
  );
}

export function PolicySubheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="!mt-8 text-lg font-bold text-slate-950">{children}</h3>
  );
}

type BulletItem = string | { lead: string; text: string };

export function Bullets({ items }: { items: BulletItem[] }) {
  return (
    <ul className="grid gap-2.5">
      {items.map((item, index) => {
        const lead = typeof item === "string" ? null : item.lead;
        const text = typeof item === "string" ? item : item.text;
        return (
          <li key={index} className="flex gap-3">
            <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#004aad]" />
            <span>
              {lead ? (
                <>
                  <strong className="font-semibold text-slate-800">{lead}</strong>
                  {text}
                </>
              ) : (
                text
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "amber";
  title?: string;
  children: ReactNode;
}) {
  const toneClasses =
    tone === "amber"
      ? "border-amber-300 bg-amber-50 text-amber-900"
      : "border-blue-200 bg-blue-50 text-blue-900";
  return (
    <div className={`rounded-2xl border px-5 py-4 text-sm leading-6 ${toneClasses}`}>
      {title ? <p className="font-semibold">{title}</p> : null}
      <div className={title ? "mt-1" : undefined}>{children}</div>
    </div>
  );
}

export function PolicyTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-[#004aad] text-white">
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col" className="px-4 py-3 font-semibold">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 1 ? "bg-slate-50" : undefined}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 align-top text-slate-600">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
