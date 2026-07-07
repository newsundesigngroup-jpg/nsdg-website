import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "./about";

export const Route = createFileRoute("/estimate")({
  component: EstimatePage,
  head: () => ({
    meta: [
      { title: "Request a Free Estimate — New Sun Contracting" },
      { name: "description", content: "Share your project details for a complimentary estimate from New Sun Contracting's masonry and construction team." },
      { property: "og:title", content: "Get a Free Estimate — New Sun Contracting" },
      { property: "og:description", content: "Tell us about your project. We'll respond within one business day." },
    ],
  }),
});

const SERVICES = [
  "Commercial Masonry",
  "Luxury Residential Masonry",
  "Architectural Stone Installation",
  "Retaining Walls",
  "Natural Stone Supply",
  "General Construction",
];

const BUDGETS = ["Under $50K", "$50K – $250K", "$250K – $1M", "$1M – $5M", "$5M+"];
const TIMELINES = ["Planning", "Within 3 months", "3 – 6 months", "6 – 12 months", "12+ months"];

export default EstimatePage;
function EstimatePage() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<Record<string, string>>({});

  function update(key: string, value: string) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload: Record<string, string> = {};
    fd.forEach((v, k) => (payload[k] = String(v)));
    // Compose mailto for now — no backend configured.
    const body = Object.entries(payload)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    const url = `mailto:info@newsuncontracting.com?subject=${encodeURIComponent(
      `New Estimate Request — ${payload.name || "Client"}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSubmitted(true);
  }

  return (
    <>
      <SectionHeader
        eyebrow="Free Estimate"
        title={<>Tell us about <em>your project.</em></>}
      />

      <section className="container-page pb-32">
        <div className="grid gap-16 md:grid-cols-12">
          <aside className="md:col-span-4 md:sticky md:top-28 self-start">
            <p className="text-muted-foreground leading-relaxed">
              Share a few details about your project and our team will respond within
              one business day. All inquiries are handled confidentially. The detailed
              information you submit here will aid us in providing you with a free
              estimate, however, it may be necessary to schedule a visit to your site
              if we require more information to complete your estimate.
            </p>
            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="eyebrow">Response</dt>
                <dd className="mt-2">Within 1 business day</dd>
              </div>
              <div>
                <dt className="eyebrow">Direct Line</dt>
                <dd className="mt-2"><a href="tel:+12369868270" className="hover:opacity-60">(236) 986-8270</a></dd>
              </div>
              <div>
                <dt className="eyebrow">Email</dt>
                <dd className="mt-2 break-all"><a href="mailto:info@newsuncontracting.com" className="hover:opacity-60">info@newsuncontracting.com</a></dd>
              </div>
            </dl>
          </aside>

          <div className="md:col-span-8">
            {submitted ? (
              <div className="border border-border p-12 text-center">
                <p className="eyebrow">Thank you</p>
                <h2 className="mt-4 text-4xl font-display">Your request is on its way.</h2>
                <p className="mt-6 text-muted-foreground">
                  Your email client should have opened with the details prepared. We'll
                  be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label="Full Name" name="name" required />
                  <Field label="Company / Firm" name="company" />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>

                <Field label="Project Location" name="location" placeholder="City / neighbourhood" />

                <div>
                  <label className="eyebrow">Service Interest</label>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {SERVICES.map((s) => {
                      const selected = data.service === s;
                      return (
                        <label key={s} className={`cursor-pointer text-[11px] uppercase tracking-[0.22em] border px-4 py-3 transition-colors ${selected ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"}`}>
                          <input
                            type="radio"
                            name="service"
                            value={s}
                            className="sr-only"
                            onChange={() => update("service", s)}
                            checked={selected}
                          />
                          {s}
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <SelectField label="Estimated Budget" name="budget" options={BUDGETS} />
                  <SelectField label="Timeline" name="timeline" options={TIMELINES} />
                </div>

                <div>
                  <label className="eyebrow" htmlFor="details">Project Details</label>
                  <textarea
                    id="details"
                    name="details"
                    rows={6}
                    required
                    placeholder="Scope, materials, drawings available, and any context that would help us respond well."
                    className="mt-4 w-full border-b border-border bg-transparent py-3 text-base focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground max-w-md">
                    By submitting you agree that New Sun Contracting may contact you
                    regarding your inquiry.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-[11px] uppercase tracking-[0.22em] hover:opacity-90 transition-opacity"
                  >
                    Submit Request →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow">
        {label} {required && <span className="text-accent" style={{ color: "var(--gold)" }}>*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-4 w-full border-b border-border bg-transparent py-3 text-base focus:outline-none focus:border-foreground transition-colors"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow">{label}</label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-4 w-full border-b border-border bg-transparent py-3 text-base focus:outline-none focus:border-foreground transition-colors"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
