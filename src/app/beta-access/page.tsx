import { BetaAccessForm } from "@/components/beta-access-form";
import { PublicPage, Section } from "@/components/public-page";

export default function BetaAccessPage() {
  return (
    <PublicPage
      title="Request beta access"
      copy="MoniAtlas is currently opening access through a managed beta. Share a few basic account details and we will review your request before enabling access. Approved beta users currently receive full access."
      ctaHref="https://app.moniatlas.com/login"
      ctaLabel="Existing user? Log In"
    >
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <BetaAccessForm />
          <aside className="rounded-[1.75rem] bg-[#004aad] p-6 text-white shadow-2xl shadow-blue-950/15">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
              How access works
            </p>
            <h2 className="mt-3 text-2xl font-bold">A simple review process</h2>
            <ol className="mt-6 space-y-5 text-blue-50">
              <li>
                <strong className="block text-white">1. Send your request</strong>
                <span className="mt-1 block leading-6">Tell us who you are and what you would like to use MoniAtlas for.</span>
              </li>
              <li>
                <strong className="block text-white">2. We review it</strong>
                <span className="mt-1 block leading-6">Requests are reviewed manually while the product is in beta.</span>
              </li>
              <li>
                <strong className="block text-white">3. Get full beta access</strong>
                <span className="mt-1 block leading-6">If approved, we will contact you with the next step to access the app.</span>
              </li>
            </ol>
            <p className="mt-7 border-t border-white/20 pt-5 text-sm leading-6 text-blue-100">
              Beta questions can also be sent to <a className="font-semibold text-white underline" href="mailto:hello@moniatlas.com">hello@moniatlas.com</a>.
            </p>
          </aside>
        </div>
      </Section>
    </PublicPage>
  );
}
