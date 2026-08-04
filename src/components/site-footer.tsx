import Link from "next/link";
import { BrandLogo } from "./brand-logo";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Request Beta Access", href: "/beta-access" },
      { label: "Security & Data Protection", href: "/security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Terms & Policies",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookie" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <BrandLogo light />
          <p className="mt-3 text-sm text-slate-300">One map for all your money</p>
          <p className="mt-6 max-w-xl text-sm leading-6 text-slate-400">
            MoniAtlas provides organisation, tracking, planning, and insights.
            It does not provide regulated financial advice.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold text-white">{group.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {group.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
