import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG } from "@/lib/images";
import { SectionHeader } from "./about";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Masonry, Construction & Stone Supply" },
      { name: "description", content: "Commercial masonry, luxury residential masonry, architectural stone installation, retaining walls, natural stone supply and general construction." },
      { property: "og:title", content: "Services — New Sun Contracting" },
      { property: "og:description", content: "Six disciplines, one standard of excellence." },
      { property: "og:image", content: IMG.tb09 },
    ],
  }),
});

const SERVICES = [
  {
    n: "01",
    t: "Commercial Masonry",
    d: "Structural and architectural masonry for office towers, mixed-use developments and institutional buildings.",
    apps: ["Office Towers", "Mixed-Use", "Civic Buildings"],
    img: IMG.st03,
  },
  {
    n: "02",
    t: "Luxury Residential Masonry",
    d: "Custom stonework, chimneys, feature walls, and exterior envelopes for high-end residential builders.",
    apps: ["Estate Homes", "Feature Walls", "Envelopes"],
    img: IMG.ls10,
  },
  {
    n: "03",
    t: "Architectural Stone Installation",
    d: "Precision installation of natural stone cladding, veneers, benches and paving on landmark projects.",
    apps: ["Cladding", "Paving", "Benches"],
    img: IMG.tb09,
  },
  {
    n: "04",
    t: "Retaining Walls",
    d: "Engineered retaining structures in natural stone and full-block masonry for landscape and civil work.",
    apps: ["Landscape", "Civil", "Waterfront"],
    img: IMG.ia03,
  },
  {
    n: "05",
    t: "Natural Stone Supply",
    d: "Direct quarry sourcing from Brazil for architects, developers and specifiers seeking exceptional stone.",
    apps: ["Basalt", "Granite", "Custom Cuts"],
    img: IMG.ia02,
  },
  {
    n: "06",
    t: "General Construction",
    d: "Full construction management and delivery for commercial and luxury residential developments.",
    apps: ["Site Works", "Concrete", "Coordination"],
    img: IMG.keefer04,
  },
];

export default ServicesPage;
function ServicesPage() {
  return (
    <>
      <SectionHeader
        eyebrow="Services"
        title={<>Six disciplines. <em>One standard</em> of excellence.</>}
      />

      <div className="container-page pb-24 md:pb-40 space-y-32 md:space-y-48">
        {SERVICES.map((s, i) => (
          <article
            key={s.t}
            className="grid gap-10 md:gap-16 md:grid-cols-12 items-center"
          >
            <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={s.img} alt={s.t} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <p className="eyebrow">{s.n} — Service</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance">{s.t}</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">{s.d}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {s.apps.map((a) => (
                  <li key={a} className="text-[11px] uppercase tracking-[0.22em] border border-border px-3 py-2">
                    {a}
                  </li>
                ))}
              </ul>
              <Link
                to="/estimate"
                className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] border-b border-foreground pb-2 hover:opacity-60"
              >
                Discuss a project →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <CTABand />
    </>
  );
}

export function CTABand() {
  return (
    <section className="relative overflow-hidden">
      <img src={IMG.ls17} alt="Crew clearing ice at the building entrance in winter — Living Spaces" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,15,20,0.55), rgba(15,15,20,0.8))" }} />
      <div className="relative container-page py-32 md:py-40" style={{ color: "var(--warm-white)" }}>
        <p className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>Next Steps</p>
        <h2 className="mt-6 max-w-3xl text-4xl md:text-6xl font-display text-balance">
          Bring us into your next landmark project.
        </h2>
        <Link
          to="/estimate"
          className="mt-10 inline-flex items-center gap-3 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em]"
          style={{ background: "var(--warm-white)", color: "var(--ink)" }}
        >
          Get a Free Estimate →
        </Link>
      </div>
    </section>
  );
}
