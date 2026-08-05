"use client";

import { useState, type FormEvent } from "react";

type SubmissionState = "idle" | "submitting" | "success" | "error";
type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
};
type QuestionKey = keyof FormValues;

const betaAccessApiUrl =
  process.env.NEXT_PUBLIC_BETA_ACCESS_API_URL ??
  "https://app.moniatlas.com/api/beta-access-requests";

const questions: Array<{
  key: QuestionKey;
  prompt: string;
  placeholder: string;
  type?: "text" | "email";
  autocomplete: string;
}> = [
  {
    key: "firstName",
    prompt: "What's your first name?",
    placeholder: "First name",
    autocomplete: "given-name",
  },
  {
    key: "lastName",
    prompt: "And your surname?",
    placeholder: "Surname",
    autocomplete: "family-name",
  },
  {
    key: "email",
    prompt: "Which email should we use for your MoniAtlas access?",
    placeholder: "you@example.com",
    type: "email",
    autocomplete: "email",
  },
  {
    key: "country",
    prompt: "Which country are you based in?",
    placeholder: "United Kingdom",
    autocomplete: "country-name",
  },
];

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  country: "United Kingdom",
};

export function BetaAccessForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [step, setStep] = useState(0);
  const [website, setWebsite] = useState("");
  const [state, setState] = useState<SubmissionState>("idle");
  const [error, setError] = useState("");

  const isReviewStep = step === questions.length;
  const currentQuestion = questions[step];
  const currentValue = currentQuestion ? values[currentQuestion.key] : "";

  function updateValue(key: QuestionKey, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
    setError("");
  }

  function continueConversation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!currentQuestion) return;
    if (!currentValue.trim()) {
      setError("Please enter an answer to continue.");
      return;
    }
    if (
      currentQuestion.key === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(currentValue.trim())
    ) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setStep((current) => current + 1);
  }

  function goBack() {
    setError("");
    setStep((current) => Math.max(0, current - 1));
  }

  async function submitRequest() {
    setState("submitting");
    setError("");

    try {
      const response = await fetch(betaAccessApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website }),
      });
      const payload = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !payload.success) {
        throw new Error(payload.error ?? "We could not submit your request.");
      }

      setState("success");
    } catch (submissionError) {
      setState("error");
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not submit your request. Please try again.",
      );
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-[1.75rem] border border-emerald-200 bg-emerald-50 p-6 text-emerald-950 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Request received
        </p>
        <h2 className="mt-3 text-2xl font-bold">
          Thanks, {values.firstName}.
        </h2>
        <p className="mt-3 leading-7 text-emerald-900/80">
          We will review your request and contact you if you are approved for
          the beta. Approved beta users currently receive full MoniAtlas access.
        </p>
        <p className="mt-4 text-sm text-emerald-900/70">
          Questions? Email{" "}
          <a className="font-semibold underline" href="mailto:hello@moniatlas.com">
            hello@moniatlas.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={
        isReviewStep
          ? (event) => {
              event.preventDefault();
              void submitRequest();
            }
          : continueConversation
      }
      className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-sm"
    >
      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 sm:px-6">
        <div>
          <p className="text-sm font-bold text-slate-950">
            MoniAtlas beta access
          </p>
          <p className="mt-1 text-xs text-slate-500">
            A few quick details to get you set up
          </p>
        </div>
        <span className="text-xs font-semibold text-slate-500">
          {step + 1} of {questions.length + 1}
        </span>
      </div>

      <div className="space-y-5 p-5 sm:p-6">
        <div className="flex gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#004aad] text-sm font-bold text-white">
            M
          </span>
          <div className="max-w-xl rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm leading-6 text-slate-700 shadow-sm">
            {isReviewStep ? (
              <>
                Thanks, {values.firstName}. Please check your details before
                sending the request.
              </>
            ) : (
              currentQuestion.prompt
            )}
          </div>
        </div>

        {!isReviewStep ? (
          <div className="pl-12">
            <label className="sr-only" htmlFor={"beta-" + currentQuestion.key}>
              {currentQuestion.prompt}
            </label>
            <input
              id={"beta-" + currentQuestion.key}
              type={currentQuestion.type ?? "text"}
              required
              maxLength={currentQuestion.key === "email" ? 254 : 120}
              value={currentValue}
              onChange={(event) =>
                updateValue(currentQuestion.key, event.target.value)
              }
              autoComplete={currentQuestion.autocomplete}
              placeholder={currentQuestion.placeholder}
              autoFocus
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#004aad] focus:ring-2 focus:ring-blue-100"
            />
          </div>
        ) : (
          <div className="space-y-2 pl-12">
            {questions.map((question) => (
              <button
                key={question.key}
                type="button"
                onClick={() =>
                  setStep(
                    questions.findIndex((item) => item.key === question.key),
                  )
                }
                className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm transition hover:border-blue-200 hover:bg-blue-50/40"
              >
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {question.key === "firstName"
                      ? "First name"
                      : question.key === "lastName"
                        ? "Surname"
                        : question.key === "email"
                          ? "Email"
                          : "Country"}
                  </span>
                  <span className="mt-1 block font-semibold text-slate-900">
                    {values[question.key]}
                  </span>
                </span>
                <span className="text-xs font-semibold text-[#004aad]">
                  Edit
                </span>
              </button>
            ))}
          </div>
        )}

        <input
          aria-hidden="true"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
          name="website"
          className="absolute -left-[9999px] h-px w-px overflow-hidden"
        />

        {error ? (
          <p role="alert" className="pl-12 text-sm font-medium text-red-700">
            {error}
          </p>
        ) : null}

        <div className="flex flex-wrap items-center justify-between gap-3 pl-12">
          {step > 0 ? (
            <button
              type="button"
              onClick={goBack}
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#004aad] hover:text-[#004aad]"
            >
              Back
            </button>
          ) : (
            <span />
          )}
          <button
            type="submit"
            disabled={state === "submitting"}
            className="rounded-full bg-[#004aad] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#003f94] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state === "submitting"
              ? "Sending request…"
              : isReviewStep
                ? "Send beta request"
                : "Continue"}
          </button>
        </div>
        <p className="pl-12 text-xs leading-5 text-slate-500">
          No password is collected here. If approved, you will set your own
          password when you complete MoniAtlas setup.
        </p>
      </div>
    </form>
  );
}
