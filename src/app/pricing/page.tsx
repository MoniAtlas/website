import { PricingSection } from "../components/PricingSection";
import { PublicPage } from "@/components/public-page";

export default function PricingPage() {
  return (
    <PublicPage
      eyebrow="Pricing"
      title="Simple pricing for a clearer money picture"
      copy="Start free with manual tracking. Paid plans will unlock richer cash flow tools, connected accounts, and AI-powered money insights as they become available."
      ctaHref="https://app.moniatlas.com/register"
      ctaLabel="Create Account"
      secondaryHref="/waitlist"
      secondaryLabel="Register interest"
    >
      <PricingSection showIntro={false} />
    </PublicPage>
  );
}
