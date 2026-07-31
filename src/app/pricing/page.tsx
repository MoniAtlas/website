import { PricingSection } from "../components/PricingSection";
import { PublicPage } from "@/components/public-page";

export default function PricingPage() {
  return (
    <PublicPage
      title="Simple pricing for a clearer money picture"
      copy="Start free, choose Founder for enhanced planning, or unlock the full MoniAtlas experience with Premium."
      ctaHref="https://app.moniatlas.com/register"
      ctaLabel="Create Account"
      secondaryHref="/waitlist"
      secondaryLabel="Register interest"
    >
      <PricingSection showIntro={false} />
    </PublicPage>
  );
}
