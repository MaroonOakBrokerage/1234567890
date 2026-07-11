import { NextRequest, NextResponse } from "next/server";

export type QuoteRequestPayload = {
  protecting: "personal" | "business";
  name: string;
  email: string;
  phone: string;
  zip: string;
  coverageNeeded?: string[];
  currentCarrier?: string;
  preferredContactMethod?: string;
  notes?: string;
  attribution?: Record<string, string>;
  // Personal-only
  renewalDate?: string;
  preferredContactTime?: string;
  // Business-only
  businessName?: string;
  industry?: string;
  yearsInBusiness?: string;
  employeeCount?: string;
  annualRevenueRange?: string;
  numberOfVehicles?: string;
  effectiveOrRenewalDate?: string;
  operationsDescription?: string;
  // Honeypot (should always arrive empty/undefined from real users)
  company_website?: string;
};

/**
 * Quote-request endpoint for the /contact page's expanded quote form.
 *
 * This validates and accepts the submission so the form is fully functional
 * out of the box (no dead button). It currently logs the lead server-side.
 *
 * TO CONNECT A REAL CRM / EMAIL PIPELINE, replace the TODO block below.
 * Recommended environment variables (set in Vercel project settings or a
 * local .env.local — never commit real keys):
 *
 *   RESEND_API_KEY            - to email the lead to info@maroonoakbrokerage.com
 *   CRM_WEBHOOK_URL            - a generic webhook endpoint (Zapier, Make, custom)
 *   AGENCYZOOM_API_KEY         - if/when connecting directly to AgencyZoom's API
 *   AGENCYZOOM_PIPELINE_ID     - target pipeline/stage for new leads
 *   NOTIFY_PRODUCER_EMAIL      - internal address to notify a producer of new leads
 *
 * None of these are required for the site to build or run — the form
 * degrades gracefully to "log only" until they're configured.
 */
export async function POST(request: NextRequest) {
  let data: Partial<QuoteRequestPayload>;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Silently accept (but don't process) obvious spam-bot submissions that
  // filled the hidden honeypot field.
  if (data.company_website) {
    return NextResponse.json({ success: true });
  }

  if (!data.name || !data.email || !data.phone || !data.zip) {
    return NextResponse.json(
      { error: "Name, email, phone, and ZIP code are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(data.email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  if (data.protecting === "business" && !data.businessName) {
    return NextResponse.json({ error: "Business name is required." }, { status: 400 });
  }

  // Defensive: this form must never collect highly sensitive data. If any of
  // these fields ever show up, reject the submission rather than store it.
  const forbiddenKeys = ["ssn", "socialSecurity", "driversLicense", "cardNumber", "cvv", "bankAccount", "routingNumber"];
  const hasForbiddenField = forbiddenKeys.some((key) => key in (data as Record<string, unknown>));
  if (hasForbiddenField) {
    return NextResponse.json(
      { error: "This form does not accept sensitive personal or financial information." },
      { status: 400 }
    );
  }

  // TODO: replace with a real email/CRM integration before production launch.
  // Example shape for a future webhook call:
  //   await fetch(process.env.CRM_WEBHOOK_URL!, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ ...data, receivedAt: new Date().toISOString() }),
  //   });
  console.log("New Maroon Oak Brokerage quote request:", {
    ...data,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
