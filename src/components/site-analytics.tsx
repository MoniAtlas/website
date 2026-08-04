"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const COOKIE_NAME = "moniatlas_cookie_preferences";
const POLICY_VERSION = "2026-07-25";
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

type CookiePreferences = { analytics: boolean; policyVersion: string; updatedAt: string };

declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; } }

function preferences() {
  const value = document.cookie.split(";").map((part) => part.trim()).find((part) => part.startsWith(`${COOKIE_NAME}=`))?.slice(COOKIE_NAME.length + 1);
  try { return value ? JSON.parse(decodeURIComponent(value)) as CookiePreferences : null; } catch { return null; }
}

function setPreferences(analytics: boolean) {
  const value = encodeURIComponent(JSON.stringify({ analytics, policyVersion: POLICY_VERSION, updatedAt: new Date().toISOString() } satisfies CookiePreferences));
  const domain = window.location.hostname.endsWith(".moniatlas.com") ? "; Domain=.moniatlas.com" : "";
  document.cookie = `${COOKIE_NAME}=${value}; Max-Age=31536000; Path=/; SameSite=Lax${domain}${window.location.protocol === "https:" ? "; Secure" : ""}`;
  window.dispatchEvent(new CustomEvent("moniatlas_cookie_preferences_updated"));
}

function safePath(path: string) { return path.split("/").map((segment) => (/^[0-9a-f-]{16,}$/i.test(segment) || /^\d+$/.test(segment) ? ":id" : segment)).join("/"); }
function event(name: string, parameters: Record<string, string>) { window.gtag?.("event", name, parameters); }

export function SiteAnalytics() {
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => { const refresh = () => setAllowed(preferences()?.analytics === true); refresh(); window.addEventListener("moniatlas_cookie_preferences_updated", refresh); return () => window.removeEventListener("moniatlas_cookie_preferences_updated", refresh); }, []);
  useEffect(() => { if (allowed && measurementId && window.gtag) event("page_view", { page_path: safePath(pathname) }); }, [allowed, pathname]);
  useEffect(() => {
    if (!allowed || !measurementId) return;
    const track = (click: MouseEvent) => {
      const target = (click.target as Element | null)?.closest("a,button");
      if (!target) return;
      const namedEvent = target.getAttribute("data-analytics-event") ?? "ui_interaction";
      event(namedEvent, { element_type: target.tagName.toLowerCase(), page_path: safePath(pathname) });
    };
    document.addEventListener("click", track); return () => document.removeEventListener("click", track);
  }, [allowed, pathname]);
  if (!allowed || !measurementId) return null;
  return <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`} strategy="afterInteractive" onLoad={() => { window.dataLayer = window.dataLayer ?? []; window.gtag = (...args: unknown[]) => { window.dataLayer?.push(args); }; window.gtag("js", new Date()); window.gtag("config", measurementId, { send_page_view: false, anonymize_ip: true }); event("page_view", { page_path: safePath(pathname) }); }} />;
}

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(
      () => setVisible(preferences()?.policyVersion !== POLICY_VERSION),
      0,
    );
    return () => window.clearTimeout(timer);
  }, []);
  if (!visible) return null;
  return <section className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl" aria-label="Cookie choices"><p className="font-bold text-slate-950">Your cookie choices</p><p className="mt-1 text-sm leading-6 text-slate-600">Essential cookies keep this website secure. Optional analytics cookies help us understand usage and stay off unless you allow them. Read our <a className="underline" href="/cookie">Cookie Policy</a> and <a className="underline" href="/privacy">Privacy Policy</a>.</p><div className="mt-4 flex flex-wrap justify-end gap-2"><button type="button" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800" onClick={() => { setPreferences(false); setVisible(false); }}>Essential only</button><button type="button" className="rounded-full bg-[#004aad] px-4 py-2 text-sm font-semibold text-white" onClick={() => { setPreferences(true); setVisible(false); }}>Allow analytics</button></div></section>;
}
