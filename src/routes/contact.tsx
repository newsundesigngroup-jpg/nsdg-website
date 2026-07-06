import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "./about";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — New Sun Contracting" },
      { name: "description", content: "Speak with New Sun Contracting about your next commercial, institutional or luxury residential project in Greater Vancouver." },
      { property: "og:title", content: "Contact — New Sun Contracting" },
      { property: "og:description", content: "Begin a conversation about your next project." },
    ],
  }),
});

export default ContactPage;
function ContactPage() {
  return (
    <>
      <SectionHeader
        eyebrow="Contact"
        title={<>Let's discuss <em>your next project.</em></>}
      />

      <section className="container-page pb-24 md:pb-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4 space-y-10">
            <div>
              <p className="eyebrow">Direct</p>
              <ul className="mt-4 space-y-2 text-lg">
                <li><a href="tel:+12369868270" className="hover:opacity-60">(236) 986-8270</a></li>
                <li><a href="mailto:info@newsuncontracting.com" className="hover:opacity-60 break-all">info@newsuncontracting.com</a></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow">Studio</p>
              <p className="mt-4 text-lg">Greater Vancouver<br />British Columbia, Canada</p>
            </div>
            <div>
              <p className="eyebrow">Serving</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                North Vancouver · West Vancouver · Vancouver · Burnaby · Richmond · Coquitlam · Surrey
              </p>
            </div>
            <div>
              <Link
                to="/estimate"
                className="inline-flex items-center gap-3 border border-foreground px-6 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background transition-colors"
              >
                Request a Free Estimate →
              </Link>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="aspect-[4/3] w-full overflow-hidden border border-border">
              <iframe
                title="New Sun Contracting service area"
                src="https://www.google.com/maps?q=Greater+Vancouver+BC&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
