import Link from "next/link";
import { PublicPage } from "@/components/public-page";
import {
  Bullets,
  Callout,
  PolicyLayout,
  PolicyMetaBar,
  PolicySection,
  PolicySubheading,
  PolicyTable,
  type PolicyTocItem,
} from "@/components/policy-kit";

const EFFECTIVE_DATE = "26 July 2026";
const POLICY_VERSION = "2026-07-25";

const toc: PolicyTocItem[] = [
  { id: "who-we-are", label: "Who we are" },
  { id: "scope", label: "Scope of this policy" },
  { id: "information-we-collect", label: "Information we collect" },
  { id: "open-banking", label: "Open Banking connections" },
  { id: "documents", label: "Documents & AI extraction" },
  { id: "ai-assistant", label: "The MoniAtlas AI assistant" },
  { id: "cookies", label: "Cookies and analytics" },
  { id: "how-we-use", label: "How we use your information" },
  { id: "sharing", label: "Who we share information with" },
  { id: "transfers", label: "International transfers" },
  { id: "retention", label: "How long we keep information" },
  { id: "security", label: "Security" },
  { id: "your-rights", label: "Your rights" },
  { id: "automated-processing", label: "Automated processing" },
  { id: "children", label: "Children" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact us" },
];

export default function PrivacyPage() {
  return (
    <PublicPage
      eyebrow="Privacy"
      title="Privacy Policy"
      copy="This Privacy Policy explains, in detail, what personal information MoniAtlas collects, why, how long we keep it, who we share it with, and the choices and rights you have over it."
      ctaHref="mailto:privacy@moniatlas.com"
      ctaLabel="Contact privacy"
      secondaryHref="/terms"
      secondaryLabel="Terms of Use"
    >
      <PolicyMetaBar effectiveDate={EFFECTIVE_DATE} version={POLICY_VERSION} toc={toc} />

      <PolicyLayout toc={toc}>
        <PolicySection id="who-we-are" title="1. Who we are">
          <p>
            MoniAtlas (&ldquo;MoniAtlas&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides a personal finance
            web application that lets you bring together manually added accounts and, where you choose to
            connect them, Open Banking accounts, so you can see your net worth, plan cash flow, track savings
            goals, store financial documents and get AI-generated insights. This policy describes the personal
            data our web application (&ldquo;the Service&rdquo;) collects, why, how it is used, who it is shared
            with, and the choices and rights available to you.
          </p>
          <p>
            MoniAtlas acts as the data controller for the personal data described in this policy. You can
            contact us about privacy matters at{" "}
            <a href="mailto:privacy@moniatlas.com" className="font-semibold text-[#004aad] underline">
              privacy@moniatlas.com
            </a>
            , or for general support at{" "}
            <a href="mailto:support@moniatlas.com" className="font-semibold text-[#004aad] underline">
              support@moniatlas.com
            </a>
            .
          </p>
        </PolicySection>

        <PolicySection id="scope" title="2. Scope of this policy">
          <p>
            This policy covers the MoniAtlas web application at app.moniatlas.com, its supporting API, and this
            marketing website at moniatlas.com. It applies to prospective users, registered users, and anyone
            who submits an enquiry through our contact channels. It does not cover third-party websites or
            services you may reach through links from MoniAtlas, including your bank&rsquo;s own website or app.
          </p>
          <p>
            MoniAtlas is developing over time. Where a capability described below is still being finalised
            ahead of full commercial launch, we say so, rather than describing a control we don&rsquo;t yet
            fully operate.
          </p>
        </PolicySection>

        <PolicySection id="information-we-collect" title="3. Information we collect">
          <PolicySubheading>3.1 Account registration and profile</PolicySubheading>
          <Bullets
            items={[
              { lead: "Identity and contact details: ", text: "your first name, last name and email address, collected when you register." },
              { lead: "Personal details you choose to add: ", text: "date of birth and home address (address lines, city, postcode, country)." },
              { lead: "Sensitive financial identifiers you choose to add: ", text: "National Insurance number and tax identification number. These are only requested where you choose to provide them, for features such as pension or tax-related planning." },
              { lead: "Income details you choose to add: ", text: "annual salary and annual bonus, used to power planning and insight features." },
              { lead: "Account status and history: ", text: "creation date, last update, last sign-in time, and whether your account is active, inactive, disabled, or scheduled for deletion." },
            ]}
          />

          <PolicySubheading>3.2 Sign-in, two-factor authentication and sessions</PolicySubheading>
          <p>
            We use Amazon Cognito, a specialist identity service, to manage sign-in. Your password is set and
            verified by Cognito directly &mdash; MoniAtlas&rsquo;s own systems never see or store it.
          </p>
          <Bullets
            items={[
              { lead: "Session tokens: ", text: "short-lived sign-in tokens are stored in secure, browser-only cookies that keep you signed in and are not readable by page scripts. They are cleared when you sign out or delete your account." },
              { lead: "Two-factor authentication: ", text: "if you turn on authenticator-app (TOTP) two-factor authentication, Cognito records that it is enabled on your account. MoniAtlas does not see or store the authenticator secret itself." },
              { lead: "Trusted devices and active sessions: ", text: "if you use “remember this device” or review your active sessions, we record a device identifier, device name and the dates it was first used, last used and last changed, so you can review and revoke sessions from Settings." },
            ]}
          />

          <PolicySubheading>3.3 Financial accounts you add manually</PolicySubheading>
          <p>
            You can add accounts to MoniAtlas by hand instead of, or alongside, connecting them via Open
            Banking. Depending on the account type, this can include:
          </p>
          <Bullets
            items={[
              { lead: "Core details: ", text: "account type (current account, savings, credit card, loan, mortgage, pension, investment, property, crypto, or other), name, provider, currency, and balance." },
              { lead: "Household and cash-flow fields: ", text: "monthly income, personal spending, joint transfers and household bills, where you use joint or household budgeting." },
              { lead: "Savings, credit and loan fields: ", text: "interest rate, whether a savings account is easy access or fixed term, credit limits and APR, minimum/monthly payments, and loan terms." },
              { lead: "Mortgage and property fields: ", text: "mortgage type, rate and term details, current equity and loan-to-value, and a property&rsquo;s type, value and address." },
              { lead: "Pension and investment fields: ", text: "scheme type, contributions, projected retirement age, wrapper type, portfolio style, risk level and platform fees." },
              { lead: "Savings goals: ", text: "goal name, target amount, deadline, and the accounts a goal is linked to." },
            ]}
          />
        </PolicySection>

        <PolicySection id="open-banking" title="4. Open Banking connections">
          <p>
            If you choose to connect a bank instead of, or alongside, adding it manually, MoniAtlas uses
            TrueLayer, a UK-regulated Open Banking provider, to retrieve your data with your explicit consent
            through your bank&rsquo;s own secure sign-in.
          </p>
          <Bullets
            items={[
              { lead: "Connection details: ", text: "the institution you connect, the data you approved us to access (accounts, balances, transactions, and continued access), connection status, and consent/expiry dates." },
              { lead: "Access credentials: ", text: "the access and refresh tokens TrueLayer issues to us are encrypted before storage. They are used only to fetch your data and let you disconnect, and are never included in your data export, in application logs, or shown to the AI assistant." },
              { lead: "Account and transaction data: ", text: "account name, type, currency and balance; and transaction amount, direction, description, merchant, category and date." },
            ]}
          />
          <p>
            You can view and remove Open Banking connections at any time from the Connections screen in
            Settings, which stops MoniAtlas fetching further data for that connection.
          </p>
          <Callout>
            As MoniAtlas moves through pre-launch testing, Open Banking connections currently run against
            TrueLayer&rsquo;s test (sandbox) environment rather than live bank data. This will be confirmed and
            updated here before Open Banking connections handle real accounts.
          </Callout>
        </PolicySection>

        <PolicySection id="documents" title="5. Documents and AI-assisted extraction">
          <p>
            You can upload financial documents &mdash; for example bank, savings, mortgage, pension,
            investment or credit card statements, mortgage offers, loan agreements, insurance documents,
            payslips, P60s or tax documents &mdash; through the AI chat, the account, mortgage and property
            pages, or the document store.
          </p>
          <Bullets
            items={[
              { lead: "File and processing details: ", text: "file name, type and size, processing and review status, and which account, property, mortgage, pension or investment record a document is linked to." },
              { lead: "Text extraction (OCR): ", text: "documents are processed using Amazon Textract to read text, lines and tables, with confidence scoring." },
              { lead: "AI-assisted extraction: ", text: "structured data (for example statement transactions or balances) is drafted using an AI model. You review and confirm extracted data before it is applied to your accounts &mdash; nothing is applied automatically without your confirmation." },
              { lead: "Activity trail: ", text: "we keep a record of key events for each document (upload, processing, review, viewing, download, linking and deletion) so you and we can audit what happened. This trail deliberately excludes the document&rsquo;s contents, extracted values, and AI prompts or responses." },
            ]}
          />
          <p>
            Original files are stored in encrypted cloud storage, with access restricted to your own account.
            Every document action is checked against your signed-in identity first, and file downloads use
            short-lived, single-use links that are never logged or stored.
          </p>
          <p>
            You can delete an uploaded document at any time. Deletion immediately blocks further access and
            removes the stored file, its extracted data, links and related processing records, subject to the
            retention periods in Section 11 and any legal retention requirement.
          </p>
        </PolicySection>

        <PolicySection id="ai-assistant" title="6. The MoniAtlas AI assistant">
          <p>
            MoniAtlas includes an AI chat assistant that answers questions about your finances and can read
            documents you share with it in a conversation.
          </p>
          <Bullets
            items={[
              { lead: "What is sent to the AI model: ", text: "your message; a compact summary of your accounts (type, provider, balance, currency and totals); and, where relevant, text and data extracted from documents you have uploaded to that conversation." },
              { lead: "What is never sent: ", text: "your Open Banking access tokens, your sign-in credentials, or internal file-storage keys are never included in anything sent to the AI model." },
              { lead: "Where conversations are stored: ", text: "your chat history is kept in your own browser so it persists between visits on that device. Selected assistant interactions may also be recorded on our servers to support and improve the assistant." },
            ]}
          />
          <p>
            The assistant&rsquo;s responses are insights generated from the information available to it, not
            financial, tax or legal advice, and may be based on data that is out of date or unconfirmed.
          </p>
        </PolicySection>

        <PolicySection id="cookies" title="7. Cookies and analytics">
          <PolicySubheading>7.1 Essential cookies</PolicySubheading>
          <p>
            We use strictly necessary cookies to keep you signed in and to remember your cookie and privacy
            choices. These cannot be switched off, as the Service cannot work securely without them.
          </p>
          <PolicySubheading>7.2 Optional analytics cookies</PolicySubheading>
          <p>
            We use Google Analytics to understand how the Service is used, but only after you actively opt in
            through the cookie banner or Settings. If you do not opt in, no analytics events are sent.
          </p>
          <Bullets
            items={[
              "Analytics events we send are limited to an anonymised page path (with anything that looks like a personal identifier removed) and a generic “link” or “button” interaction type.",
              "We deliberately do not send form values, account names, financial amounts, document names, full page URLs with query data, or the text of buttons or links you click.",
            ]}
          />
          <p>
            Your cookie choice is stored for up to one year and, once you are signed in, in an auditable record
            on your account. We will ask again if this notice changes, and you can change your choice at any
            time in Settings.
          </p>
        </PolicySection>

        <PolicySection id="how-we-use" title="8. How we use your information">
          <p>We only use your personal data for the purposes below, on the legal bases shown.</p>
          <PolicyTable
            columns={["Purpose", "Examples", "Legal basis"]}
            rows={[
              ["Provide the Service", "Sign-in, session security, showing your accounts, documents, cash flow and goals", "Performance of our contract with you"],
              ["Connect and refresh Open Banking data", "Retrieving balances and transactions you consented to via TrueLayer", "Your explicit consent for the connection"],
              ["Process uploaded documents", "Text extraction, AI-assisted data extraction, linking documents to accounts", "Performance of our contract with you"],
              ["Provide AI assistant insights", "Answering questions, summarising your finances", "Performance of our contract with you"],
              ["Account security", "Two-factor authentication, device and session management", "Our legitimate interest in keeping your account secure"],
              ["Optional analytics", "Understanding feature usage to improve the Service", "Your consent"],
              ["Security and fraud prevention", "Detecting suspicious sign-ins or misuse", "Legitimate interest and legal obligation"],
              ["Support and rights requests", "Responding to support@ and privacy@ emails", "Legitimate interest; legal obligation for rights requests"],
            ]}
          />
        </PolicySection>

        <PolicySection id="sharing" title="9. Who we share information with">
          <p>
            MoniAtlas does not sell your personal data. We share personal data only with service providers who
            process it on our behalf to run the Service, and, where required, with regulators or law
            enforcement.
          </p>
          <PolicyTable
            columns={["Provider", "Role", "Location"]}
            rows={[
              ["Amazon Web Services", "Hosting, authentication, database, document storage, text extraction and background processing", "United Kingdom (London)"],
              ["TrueLayer", "Open Banking data connections", "United Kingdom"],
              ["OpenAI", "AI assistant responses and document data extraction", "United States"],
              ["Google (Google Analytics)", "Optional, consent-gated product analytics", "United States / global"],
            ]}
          />
        </PolicySection>

        <PolicySection id="transfers" title="10. International transfers">
          <p>
            Your account, financial, document and authentication data is hosted in the United Kingdom. Some
            processing &mdash; specifically the AI assistant and document extraction (OpenAI) and, if you opt
            in, Google Analytics &mdash; involves transferring limited data to the United States. Where
            personal data leaves the UK, we rely on the relevant provider&rsquo;s standard contractual clauses,
            the UK International Data Transfer Addendum, or an equivalent recognised safeguard, and only
            transfer the minimum data needed for that processing.
          </p>
        </PolicySection>

        <PolicySection id="retention" title="11. How long we keep information">
          <p>Retention periods are configurable; the defaults we currently apply are:</p>
          <PolicyTable
            columns={["Data", "Default retention"]}
            rows={[
              ["Abandoned document uploads (never completed)", "24 hours"],
              ["Temporary or failed document processing files", "7 days"],
              ["Original uploaded documents", "Until you delete them or your account is deleted"],
              ["Document activity/audit records", "365 days"],
              ["Account deletion grace period", "7 days from your confirmed request"],
              ["Consent history", "Evidence of your recent consent choices, kept as proof of what you agreed to and when"],
              ["AI chat history (in your browser)", "Your most recent messages, until you clear them"],
            ]}
          />
          <p>
            We may retain limited data for longer where required by law, to resolve disputes, to enforce
            agreements, or where subject to a legal hold.
          </p>
        </PolicySection>

        <PolicySection id="security" title="12. Security">
          <Bullets
            items={[
              "Sign-in is handled by Amazon Cognito; we never store your password, and optional authenticator-app two-factor authentication is available.",
              "Session tokens are stored in secure, browser-only cookies that page scripts cannot read, and are cleared on sign-out or account deletion.",
              "Open Banking access tokens are encrypted before storage and excluded from data exports, logs and the AI assistant.",
              "Every document and account action is checked against your signed-in identity before it can proceed; file access uses short-lived, single-purpose links that are never logged or shared with the AI assistant.",
              "Our operational logs are designed to exclude document contents, extracted financial values, AI prompts and responses, and secrets.",
            ]}
          />
        </PolicySection>

        <PolicySection id="your-rights" title="13. Your rights">
          <p>
            Subject to applicable law, you have the right to access, correct, delete, restrict or object to the
            processing of your personal data, to withdraw consent at any time, and to receive your data in a
            portable format.
          </p>

          <PolicySubheading>13.1 Access and portability &mdash; export your data</PolicySubheading>
          <p>
            From Settings, you can download a copy of the application data held for your account: your
            profile, manually added accounts, Open Banking connection details (excluding access tokens), Open
            Banking transactions, cash-flow records, savings goals and document details (excluding the
            underlying file contents).
          </p>

          <PolicySubheading>13.2 Rectification</PolicySubheading>
          <p>
            You can correct your profile, manually added accounts and savings goals directly in the Service at
            any time. If a connected bank holds inaccurate data, please correct it with your bank; MoniAtlas
            reflects updated data on the next successful sync.
          </p>

          <PolicySubheading>13.3 Erasure &mdash; deleting your account</PolicySubheading>
          <p>
            Settings lets you request account deletion by typing an explicit confirmation phrase. Doing so
            signs you out everywhere and locks your account immediately &mdash; you will not be able to sign
            back in while deletion is pending. After a seven-day grace period, an automated process permanently
            deletes your accounts, cash-flow data, savings goals, Open Banking connections and transactions,
            uploaded documents, and your sign-in identity.
          </p>
          <Callout>
            This automated deletion process is being finalised as MoniAtlas moves toward full launch. If you
            want to confirm or expedite full erasure of your data at any time, email{" "}
            <a href="mailto:privacy@moniatlas.com" className="font-semibold underline">
              privacy@moniatlas.com
            </a>
            . You can also delete individual documents from the document store, or individual Open Banking
            connections from the Connections screen, independently of a full account deletion.
          </Callout>

          <PolicySubheading>13.4 Restriction and objection</PolicySubheading>
          <p>
            You can object to, or ask us to restrict, optional processing at any time by turning off analytics
            in Settings, disconnecting Open Banking connections, or deleting documents and accounts you no
            longer want processed. For anything not covered by an in-app control, contact
            privacy@moniatlas.com.
          </p>

          <PolicySubheading>13.5 Withdrawing consent</PolicySubheading>
          <p>
            Analytics processing is off by default and only ever turned on by your explicit choice. You can
            withdraw consent at any time in Settings; we keep an internal record of each choice as evidence
            that consent was properly given and withdrawn.
          </p>

          <PolicySubheading>13.6 How to exercise your rights</PolicySubheading>
          <p>
            Use the in-app controls described above where available, or email privacy@moniatlas.com. We aim to
            respond to rights requests within one month, as required by UK GDPR, and may need to verify your
            identity first.
          </p>
          <p>
            If you are not satisfied with our response, you have the right to complain to the UK Information
            Commissioner&rsquo;s Office (ICO) at{" "}
            <a
              href="https://ico.org.uk"
              className="font-semibold text-[#004aad] underline"
              target="_blank"
              rel="noreferrer"
            >
              ico.org.uk
            </a>
            , or your local data protection authority.
          </p>
        </PolicySection>

        <PolicySection id="automated-processing" title="14. Automated processing and profiling">
          <p>
            MoniAtlas automatically calculates figures such as net worth, cash-flow projections and
            savings-goal progress from the data in your account, and its AI assistant generates text insights
            and drafts extracted values from documents you upload. These outputs are provided for your
            information and are clearly presented as insights, not financial advice; extracted document data
            must be reviewed and confirmed by you before it is applied to your accounts. We do not use this
            processing to make automated decisions with legal or similarly significant effects on you.
          </p>
        </PolicySection>

        <PolicySection id="children" title="15. Children">
          <p>
            MoniAtlas is intended for adults managing their own personal finances and is not directed at
            children. We do not knowingly collect personal data from children.
          </p>
        </PolicySection>

        <PolicySection id="changes" title="16. Changes to this policy">
          <p>
            We may update this policy as MoniAtlas&rsquo;s features, data uses, providers or legal obligations
            change. Each version is dated and versioned at the top of this page. Where a change is material, we
            will ask you to review your cookie and privacy choices again.
          </p>
        </PolicySection>

        <PolicySection id="contact" title="17. Contact us">
          <Bullets
            items={[
              { lead: "Privacy questions and rights requests: ", text: "privacy@moniatlas.com" },
              { lead: "General support: ", text: "support@moniatlas.com" },
            ]}
          />
          <Link
            href="mailto:privacy@moniatlas.com"
            className="mt-2 inline-flex rounded-full bg-[#004aad] px-6 py-3 font-semibold text-white hover:bg-[#003f94]"
          >
            privacy@moniatlas.com
          </Link>
        </PolicySection>

        <div className="rounded-2xl bg-slate-50 px-5 py-4 text-sm leading-6 text-slate-500">
          This policy is a working public version, reflecting how MoniAtlas is built today, and will continue
          to be reviewed as we move toward full commercial launch.
        </div>
      </PolicyLayout>
    </PublicPage>
  );
}
