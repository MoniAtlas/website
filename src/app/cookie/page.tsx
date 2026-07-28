import { PublicPage, Section } from "@/components/public-page";

export default function CookiePage() {
  return (
    <PublicPage
      eyebrow="Cookies"
      title="Cookie Policy"
      copy="Our full Cookie Policy is still being finalised and isn't published yet."
      ctaHref="mailto:privacy@moniatlas.com"
      ctaLabel="Contact privacy"
      secondaryHref="/privacy"
      secondaryLabel="Privacy Policy"
    >
      <Section
        title="This page is being finalised"
        copy="MoniAtlas's Cookie Policy is still being drafted and reviewed, and isn't ready to publish yet. In the meantime, for any questions about cookies, contact privacy@moniatlas.com."
      />
    </PublicPage>
  );
}
