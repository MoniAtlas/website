import { PublicPage, Section } from "@/components/public-page";

export default function CookiePage() {
  return (
    <PublicPage
      title="Cookie Policy"
      copy="Our full Cookie Policy is still being finalised and isn't published yet."
    >
      <Section
        title="This page is being finalised"
        copy="MoniAtlas's Cookie Policy is still being drafted and reviewed, and isn't ready to publish yet. In the meantime, for any questions about cookies, contact privacy@moniatlas.com."
      >
        <p className="mt-5 text-sm leading-6 text-slate-600">
          Privacy questions can be sent to{" "}
          <a className="font-semibold text-[#004aad] underline" href="mailto:privacy@moniatlas.com">
            privacy@moniatlas.com
          </a>
          .
        </p>
      </Section>
    </PublicPage>
  );
}
