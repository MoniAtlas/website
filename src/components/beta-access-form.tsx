"use client";

import { useState } from "react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

const betaAccessApiUrl =
  process.env.NEXT_PUBLIC_BETA_ACCESS_API_URL ??
  "https://app.moniatlas.com/api/beta-access-requests";

export function BetaAccessForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [state, setState] = useState<SubmissionState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setError("");

    try {
      const response = await fetch(betaAccessApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });
      const payload = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !payload.success) {
        throw new Error(payload.error ?? "We could not submit your request.");
      }

      setState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (submissionError) {
      setState("error");
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not submit your request. Please try again."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-[1.75rem] border border-emerald-200 bg-emerald-50 p-6 text-emerald-950 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Request received
        </p>
        <h2 className="mt-3 text-2xl font-bold">Thanks for your interest.</h2>
        <p className="mt-3 leading-7 text-emerald-900/80">
          We will review your request and contact you if you are approved for
          the beta. Approved beta users currently receive full MoniAtlas access.
        </p>
        <p className="mt-4 text-sm text-emerald-900/70">
          Questions? Email <a className="font-semibold underline" href="mailto:hello@moniatlas.com">hello@moniatlas.com</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6"
    >
      <div className="grid gap-5">
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="beta-name">
            Name
          </label>
          <input
            id="beta-name"
            name="name"
            type="text"
            required
            maxLength={120}
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="beta-email">
            Email
          </label>
          <input
            id="beta-email"
            name="email"
            type="email"
            required
            maxLength={254}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="beta-message">
            What would you like to use MoniAtlas for? <span className="font-normal text-slate-500">Optional</span>
          </label>
          <textarea
            id="beta-message"
            name="message"
            rows={5}
            maxLength={2000}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Tell us a little about what you would like to explore."
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400"
          />
        </div>
        <input
          aria-hidden="true"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
          name="website"
          className="absolute -left-[9999px] h-px w-px overflow-hidden"
        />
      </div>
      {error ? (
        <p role="alert" className="mt-4 text-sm font-medium text-red-700">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-6 rounded-full bg-[#004aad] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#003f94] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "submitting" ? "Sending request…" : "Request Beta Access"}
      </button>
      <p className="mt-4 text-sm leading-6 text-slate-500">
        We will only use these details to review and respond to your beta access
        request.
      </p>
    </form>
  );
}
