"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { personalCoverageOptions, businessCoverageOptions } from "@/lib/data";
import Button from "./Button";

type Status = "idle" | "submitting" | "success" | "error";
type Protecting = "personal" | "business";
type Step = 1 | 2 | 3;

const contactMethods = ["Phone", "Email", "Text"];
const contactTimes = ["Morning", "Afternoon", "Evening", "Anytime"];
const employeeRanges = ["1-5", "6-20", "21-50", "51-100", "100+"];
const revenueRanges = ["Under $250K", "$250K - $1M", "$1M - $5M", "$5M - $25M", "$25M+"];

// UTM / referral parameters captured for attribution. None of these are
// sensitive — they're standard marketing attribution fields.
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export default function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [protecting, setProtecting] = useState<Protecting>("personal");
  const [submittedOnce, setSubmittedOnce] = useState(false);
  const [attribution, setAttribution] = useState<Record<string, string>>({});
  const [step, setStep] = useState<Step>(1);
  const [review, setReview] = useState<{ name: string; email: string; phone: string; zip: string } | null>(null);

  const coverageOptions = useMemo(
    () => (protecting === "personal" ? personalCoverageOptions : businessCoverageOptions),
    [protecting]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const captured: Record<string, string> = {
      page: window.location.pathname,
      referrer: document.referrer || "direct",
    };
    UTM_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) captured[key] = value;
    });
    setAttribution(captured);
  }, []);

  function goToReview() {
    const form = formRef.current;
    if (!form) return;
    // Minimal required-field check before advancing to the review step.
    const requiredIds = ["name", "email", "phone", "zip", ...(protecting === "business" ? ["businessName"] : [])];
    for (const id of requiredIds) {
      const el = form.elements.namedItem(id) as HTMLInputElement | null;
      if (el && !el.value.trim()) {
        el.reportValidity?.();
        el.focus();
        return;
      }
    }
    const data = new FormData(form);
    setReview({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      zip: String(data.get("zip") ?? ""),
    });
    setStep(3);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Duplicate-submission guard.
    if (status === "submitting" || submittedOnce) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot spam trap — real users never fill this hidden field.
    if (formData.get("company_website")) {
      setStatus("success");
      setSubmittedOnce(true);
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const coverageNeeded = formData.getAll("coverageNeeded");

    const payload: Record<string, unknown> = {
      protecting,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      zip: formData.get("zip"),
      coverageNeeded,
      currentCarrier: formData.get("currentCarrier"),
      preferredContactMethod: formData.get("preferredContactMethod"),
      notes: formData.get("notes"),
      attribution,
    };

    if (protecting === "personal") {
      payload.renewalDate = formData.get("renewalDate");
      payload.preferredContactTime = formData.get("preferredContactTime");
    } else {
      payload.businessName = formData.get("businessName");
      payload.industry = formData.get("industry");
      payload.yearsInBusiness = formData.get("yearsInBusiness");
      payload.employeeCount = formData.get("employeeCount");
      payload.annualRevenueRange = formData.get("annualRevenueRange");
      payload.numberOfVehicles = formData.get("numberOfVehicles");
      payload.effectiveOrRenewalDate = formData.get("effectiveOrRenewalDate");
      payload.operationsDescription = formData.get("operationsDescription");
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setSubmittedOnce(true);
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-gold/30 bg-white p-9 text-center">
        <h3 className="mb-2 font-serif text-xl font-semibold text-maroon">Thank You!</h3>
        <p className="font-sans text-[15px] text-[#55504a]">
          Your request has been received. A licensed advisor will follow up within one business day.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded border border-maroon/20 bg-stone px-3.5 py-3 text-[14.5px] focus:border-maroon focus:outline-none";
  const labelClass = "mb-1.5 mt-4 block text-xs font-bold uppercase tracking-wide text-maroon";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="relative rounded-lg border border-charcoal/10 bg-white p-9" noValidate>
      <h3 className="mb-1.5 font-serif text-xl font-semibold text-maroon">Request a Quote</h3>
      <p className="mb-1.5 font-sans text-sm text-[#8a8178]">
        Tell us a bit about what you need — a licensed advisor will follow up within one business day.
      </p>

      {/* Step indicator */}
      <div className="mb-2 mt-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-[#8a8178]">
        <span className={step >= 1 ? "text-maroon" : ""}>1. What You Need</span>
        <span aria-hidden="true">&rarr;</span>
        <span className={step >= 2 ? "text-maroon" : ""}>2. Details</span>
        <span aria-hidden="true">&rarr;</span>
        <span className={step >= 3 ? "text-maroon" : ""}>3. Review</span>
      </div>

      {/* Honeypot field — hidden from real users, catches basic spam bots. */}
      <div className="absolute left-[-9999px] opacity-0" aria-hidden="true">
        <label htmlFor="company_website">Leave this field blank</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Step 1: what are they protecting */}
      <div className={step === 1 ? "" : "hidden"}>
        <fieldset className="mt-5">
          <legend className={labelClass.replace("mt-4 ", "")}>What Are You Looking to Protect?</legend>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setProtecting("personal")}
              aria-pressed={protecting === "personal"}
              className={`flex-1 rounded border px-4 py-3 text-[13.5px] font-bold uppercase tracking-wide transition-colors duration-200 ${
                protecting === "personal" ? "border-maroon bg-maroon text-stone" : "border-maroon/20 text-maroon"
              }`}
            >
              Personal
            </button>
            <button
              type="button"
              onClick={() => setProtecting("business")}
              aria-pressed={protecting === "business"}
              className={`flex-1 rounded border px-4 py-3 text-[13.5px] font-bold uppercase tracking-wide transition-colors duration-200 ${
                protecting === "business" ? "border-maroon bg-maroon text-stone" : "border-maroon/20 text-maroon"
              }`}
            >
              Business
            </button>
          </div>
        </fieldset>
        <Button type="button" onClick={() => setStep(2)} variant="maroon" className="mt-6 w-full">
          Continue
        </Button>
      </div>

      {/* Step 2: branching field sets — kept mounted (just hidden) so values persist when navigating back */}
      <div className={step === 2 ? "" : "hidden"}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="name">Full Name</label>
            <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
          </div>
          {protecting === "business" && (
            <div>
              <label className={labelClass} htmlFor="businessName">Business Name</label>
              <input id="businessName" name="businessName" type="text" required placeholder="Business name" className={inputClass} />
            </div>
          )}
          <div>
            <label className={labelClass} htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="you@email.com" className={inputClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" required placeholder="(737) 555-0100" className={inputClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor="zip">ZIP Code</label>
            <input id="zip" name="zip" type="text" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} required placeholder="78701" className={inputClass} />
          </div>

          {protecting === "business" && (
            <>
              <div>
                <label className={labelClass} htmlFor="industry">Industry</label>
                <input id="industry" name="industry" type="text" placeholder="e.g. Construction, Retail" className={inputClass} />
              </div>
              <div>
                <label className={labelClass} htmlFor="yearsInBusiness">Years in Business</label>
                <input id="yearsInBusiness" name="yearsInBusiness" type="number" min={0} placeholder="e.g. 3" className={inputClass} />
              </div>
              <div>
                <label className={labelClass} htmlFor="employeeCount">Employee Count</label>
                <select id="employeeCount" name="employeeCount" className={inputClass} defaultValue="">
                  <option value="" disabled>Select a range</option>
                  {employeeRanges.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="annualRevenueRange">Annual Revenue Range</label>
                <select id="annualRevenueRange" name="annualRevenueRange" className={inputClass} defaultValue="">
                  <option value="" disabled>Select a range</option>
                  {revenueRanges.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="numberOfVehicles">Number of Vehicles</label>
                <input id="numberOfVehicles" name="numberOfVehicles" type="number" min={0} placeholder="e.g. 2" className={inputClass} />
              </div>
            </>
          )}
        </div>

        <fieldset className="mt-4">
          <legend className={labelClass.replace("mt-4 ", "")}>Coverage Needed</legend>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2 rounded border border-maroon/10 bg-stone p-3.5 sm:grid-cols-3">
            {coverageOptions.map((opt) => (
              <label key={opt} className="flex items-center gap-2 text-[13px] text-charcoal">
                <input type="checkbox" name="coverageNeeded" value={opt} className="h-3.5 w-3.5 accent-maroon" />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="currentCarrier">Current Carrier (if any)</label>
            <input id="currentCarrier" name="currentCarrier" type="text" placeholder="e.g. current insurer" className={inputClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor={protecting === "personal" ? "renewalDate" : "effectiveOrRenewalDate"}>
              {protecting === "personal" ? "Renewal Date" : "Effective or Renewal Date"}
            </label>
            <input
              id={protecting === "personal" ? "renewalDate" : "effectiveOrRenewalDate"}
              name={protecting === "personal" ? "renewalDate" : "effectiveOrRenewalDate"}
              type="date"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="preferredContactMethod">Preferred Contact Method</label>
            <select id="preferredContactMethod" name="preferredContactMethod" className={inputClass} defaultValue="">
              <option value="" disabled>Select one</option>
              {contactMethods.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
          {protecting === "personal" && (
            <div>
              <label className={labelClass} htmlFor="preferredContactTime">Preferred Contact Time</label>
              <select id="preferredContactTime" name="preferredContactTime" className={inputClass} defaultValue="">
                <option value="" disabled>Select one</option>
                {contactTimes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          )}
        </div>

        {protecting === "business" ? (
          <>
            <label className={labelClass} htmlFor="operationsDescription">Description of Operations</label>
            <textarea
              id="operationsDescription"
              name="operationsDescription"
              placeholder="Tell us briefly what your business does..."
              className="min-h-[90px] w-full rounded border border-maroon/20 bg-stone px-3.5 py-3 text-[14.5px] focus:border-maroon focus:outline-none"
            />
          </>
        ) : null}

        <label className={labelClass} htmlFor="notes">Anything Else We Should Know?</label>
        <textarea
          id="notes"
          name="notes"
          placeholder="Tell us a bit about your situation..."
          className="min-h-[90px] w-full rounded border border-maroon/20 bg-stone px-3.5 py-3 text-[14.5px] focus:border-maroon focus:outline-none"
        />

        <div className="mt-6 flex gap-3">
          <Button type="button" onClick={() => setStep(1)} variant="outline" className="flex-1">
            Back
          </Button>
          <Button type="button" onClick={goToReview} variant="maroon" className="flex-[2]">
            Review My Request
          </Button>
        </div>
      </div>

      {/* Step 3: review & submit */}
      <div className={step === 3 ? "" : "hidden"}>
        {review && (
          <div className="mt-5 rounded border border-maroon/15 bg-stone p-5">
            <h4 className="mb-3 font-serif text-[15px] font-semibold text-maroon">Review Your Request</h4>
            <dl className="space-y-1.5 font-sans text-[13.5px] text-[#55504a]">
              <div className="flex justify-between gap-4"><dt className="font-semibold">Protecting</dt><dd className="capitalize">{protecting}</dd></div>
              <div className="flex justify-between gap-4"><dt className="font-semibold">Name</dt><dd>{review.name || "—"}</dd></div>
              <div className="flex justify-between gap-4"><dt className="font-semibold">Email</dt><dd>{review.email || "—"}</dd></div>
              <div className="flex justify-between gap-4"><dt className="font-semibold">Phone</dt><dd>{review.phone || "—"}</dd></div>
              <div className="flex justify-between gap-4"><dt className="font-semibold">ZIP</dt><dd>{review.zip || "—"}</dd></div>
            </dl>
          </div>
        )}

        {status === "error" && (
          <p className="mt-3 text-sm font-semibold text-maroon" role="alert">{errorMessage}</p>
        )}

        <div className="mt-6 flex gap-3">
          <Button type="button" onClick={() => setStep(2)} variant="outline" className="flex-1">
            Edit
          </Button>
          <Button
            type="submit"
            disabled={status === "submitting" || submittedOnce}
            className="flex-[2]"
          >
            {status === "submitting" ? "Sending…" : "Submit Request"}
          </Button>
        </div>
        <p className="mt-4 text-center font-sans text-xs text-[#8a8178]">
          No spam, no pressure — just a real conversation with a licensed advisor. We never ask for your Social
          Security number, driver&rsquo;s license, or payment information through this form.
        </p>
      </div>
    </form>
  );
}
