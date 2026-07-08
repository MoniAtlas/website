import Link from "next/link";

const loginUrl = "https://app.moniatlas.com/login";
const registerUrl = "https://app.moniatlas.com/register";

const navItems = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Open Banking", href: "/open-banking" },
  { label: "Security", href: "/security" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/95 px-5 py-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-[#004aad]">
          MoniAtlas
        </Link>

        <nav className="order-3 flex w-full items-center gap-5 overflow-x-auto text-sm font-medium text-slate-600 md:order-2 md:w-auto md:justify-center md:overflow-visible">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#004aad]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="order-2 flex items-center gap-2 md:order-3">
          <Link
            href={loginUrl}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-[#004aad] hover:text-[#004aad]"
          >
            Log In
          </Link>
          <Link
            href={registerUrl}
            className="rounded-full bg-[#004aad] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#003f94]"
          >
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
}
