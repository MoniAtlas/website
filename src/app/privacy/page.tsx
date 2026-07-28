import { PublicPage, Section } from "@/components/public-page";

export default function PrivacyPage() {
  return (
    <PublicPage
      eyebrow="Privacy"
      title="Privacy Policy"
      copy="Our full Privacy Policy is still being finalised and isn't published yet."
      ctaHref="mailto:privacy@moniatlas.com"
      ctaLabel="Contact privacy"
      secondaryHref="/terms"
      secondaryLabel="Terms of Use"
    >
      <Section
        title="This page is being finalised"
        copy="MoniAtlas's Privacy Policy is still being drafted and reviewed, and isn't ready to publish yet. In the meantime, for any privacy questions or requests, contact privacy@moniatlas.com."
      />
    </PublicPage>
  );
}
