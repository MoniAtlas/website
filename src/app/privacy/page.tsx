import { PublicPage, Section } from "@/components/public-page";

export default function PrivacyPage() {
  return (
    <PublicPage
      title="Privacy Policy"
      copy="Our full Privacy Policy is still being finalised and isn't published yet."
    >
      <Section
        title="This page is being finalised"
        copy="MoniAtlas's Privacy Policy is still being drafted and reviewed, and isn't ready to publish yet. In the meantime, for any privacy questions or requests, contact privacy@moniatlas.com."
      >
        <p className="mt-5 text-sm leading-6 text-slate-600">
          Privacy questions or requests can be sent to{" "}
          <a className="font-semibold text-[#004aad] underline" href="mailto:privacy@moniatlas.com">
            privacy@moniatlas.com
          </a>
          .
        </p>
      </Section>
    </PublicPage>
  );
}
