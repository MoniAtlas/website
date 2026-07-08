import Link from "next/link";

const footerLinks = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Open Banking", href: "/open-banking" },
  { label: "Security", href: "/security" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Link href="/" className="text-xl font-bold">
            MoniAtlas
          </Link>
          <p className="mt-3 text-sm text-slate-300">One map for all your money</p>
          <p className="mt-6 max-w-xl text-sm leading-6 text-slate-400">
            MoniAtlas provides organisation, tracking, planning, and insights.
            It does not provide regulated financial advice.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-3 text-sm text-slate-300 sm:grid-cols-3">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
