import Link from "next/link";
import { BrandLogo } from "./brand-logo";

const loginUrl = "https://app.moniatlas.com/login";
const registerUrl = "https://app.moniatlas.com/register";

const navItems = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Security & Data Protection", href: "/security" },
  { label: "About", href: "/about" },
];

type SiteHeaderProps = {
  variant?: "default" | "hero";
};

export function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  const isHero = variant === "hero";

  return (
    <header
      className={`sticky top-0 z-50 px-5 py-4 backdrop-blur sm:px-6 lg:px-8 ${
        isHero
          ? "bg-[#004aad] text-white"
          : "border-b border-slate-200 bg-white/95"
      }`}
    >
      <div
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 md:flex-nowrap"
      >
        <BrandLogo light={isHero} />

        <nav
          aria-label="Main navigation"
          className={`order-3 flex w-full items-center gap-5 overflow-x-auto text-sm font-medium md:order-2 md:w-auto md:justify-center md:overflow-visible ${
            isHero ? "text-blue-50/90" : "text-slate-600"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isHero ? "transition hover:text-white" : "hover:text-[#004aad]"}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="order-2 flex items-center gap-2 md:order-3">
          <Link
            href={loginUrl}
            data-analytics-event="login_clicked"
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              isHero
                ? "border-white/35 text-white hover:bg-white/10"
                : "border-slate-300 text-slate-800 hover:border-[#004aad] hover:text-[#004aad]"
            }`}
          >
            Log In
          </Link>
          <Link
            href={registerUrl}
            data-analytics-event="create_account_clicked"
            className={`rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition ${
              isHero
                ? "bg-white text-[#004aad] hover:bg-blue-50"
                : "bg-[#004aad] text-white hover:bg-[#003f94]"
            }`}
          >
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
}
