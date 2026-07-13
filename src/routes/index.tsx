import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "New Sun Contracting — Premium Masonry & Construction | Vancouver" },
      {
        name: "description",
        content:
          "Premium masonry and construction for commercial, institutional and luxury residential landmarks across Greater Vancouver — backed by direct natural stone supply from Brazil.",
      },
      { property: "og:image", content: IMG.finished1 },
      { name: "twitter:image", content: IMG.finished1 },
    ],
  }),
});

const SERVICES = [
  { title: "Commercial Masonry", img: IMG.st03, n: "01" },
  { title: "Luxury Residential Masonry", img: IMG.ls10, n: "02" },
  { title: "Architectural Stone Installation", img: IMG.tb09, n: "03" },
  { title: "Retaining Walls", img: IMG.ia03, n: "04" },
  { title: "Natural Stone Supply", img: IMG.ia02, n: "05" },
  { title: "General Construction", img: IMG.keefer04, n: "06" },
];

const PILLARS = [
  {
    title: "Commercial & Civic",
    desc: "Landmark infrastructure, public realms, and office developments.",
    img: IMG.st02,
    alt: "The Sun Tower's landmark dome — Downtown Vancouver",
  },
  {
    title: "Luxury Residential",
    desc: "Architectural-grade stone masonry for premium estates and private developments.",
    img: IMG.ia01,
    alt: "Private waterfront stone seawall — Indian Arm",
  },
  {
    title: "Landscape Architecture",
    desc: "Structural retaining walls, water features, and precision hardscaping.",
    img: IMG.finished3,
    alt: "Basalt waterfall wall — Minoru Central Park, Richmond",
  },
];

const DIFFERENCE = [
  { k: "01", t: "Expert Execution", d: "Meticulous project delivery led by seasoned masons and construction managers." },
  { k: "02", t: "Premium Materials", d: "Direct quarry relationships in Brazil secure exceptional natural stone." },
  { k: "03", t: "Reliable Scheduling", d: "Predictable milestones and disciplined coordination on every phase." },
  { k: "04", t: "Attention to Detail", d: "Craftsmanship visible from the foundation to the final joint." },
];

const PROJECTS = [
  { img: IMG.ls19, title: "Living Spaces, False Creek", meta: "False Creek · Heritage Envelope Restoration", span: "md:col-span-8 md:row-span-2 aspect-[4/5] md:aspect-auto" },
  { img: IMG.tb09, title: "Tap & Barrel, South Surrey", meta: "South Surrey · Feature Masonry & Fireplace", span: "md:col-span-4 aspect-square" },
  { img: IMG.keefer06, title: "The Keefer", meta: "Downtown Eastside · Heritage Envelope Restoration", span: "md:col-span-4 aspect-square" },
  { img: IMG.ia01, title: "Private Sea Wall, Indian Arm", meta: "Indian Arm · Seawall Restoration", span: "md:col-span-7 aspect-[4/3]" },
  { img: IMG.bridge, title: "Curved Stone Bridge", meta: "Central Richmond · Landscape Masonry", span: "md:col-span-5 aspect-[4/3]" },
];

export default HomePage;

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden text-warm-white" style={{ color: "var(--warm-white)" }}>
        <img
          src={IMG.finished2Hero}
          alt="Cascade water feature in polished basalt and granite — Minoru Lakes, Central Richmond"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "contrast(1.1) saturate(0.92) brightness(0.92)", transform: "scale(1.02)" }}
        />
        {/* Cinematic dark tint — unifies tone, keeps stone texture crisp, lifts white text */}
        <div
          className="absolute inset-0"
          style={{
              background:
                "linear-gradient(180deg, rgba(8,9,12,0.55) 0%, rgba(8,9,12,0.28) 38%, rgba(8,9,12,0.85) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
              background:
                "radial-gradient(120% 90% at 50% 100%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 55%), radial-gradient(140% 100% at 50% 0%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 45%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex-1 min-h-16 md:min-h-20" />
          <div className="container-page pb-16 md:pb-24">
            <div className="max-w-4xl animate-rise">
              <p className="eyebrow" style={{ color: "rgba(255,255,255,0.72)", letterSpacing: "0.3em" }}>
                Greater Vancouver · Est.2009
              </p>
              <h1 className="mt-6 text-[11vw] leading-[0.98] md:text-[5rem] xl:text-[6.5rem] font-display" style={{ textShadow: "0 2px 40px rgba(0,0,0,0.35)" }}>
                Premium Masonry<br />
                <span className="italic opacity-90">& Construction</span><br />
                for Landmark Projects.
              </h1>
              <p
                className="mt-8 max-w-xl text-base md:text-lg font-light leading-[1.9]"
                style={{ color: "rgba(255,255,255,0.85)", letterSpacing: "0.045em" }}
              >
                Delivering exceptional masonry, construction, and premium natural stone
                solutions across Greater Vancouver — for commercial, institutional, and
                luxury residential developments.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/estimate"
                  className="group inline-flex items-center gap-3 border border-[var(--warm-white)] bg-[var(--warm-white)] px-7 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--ink)] transition-all duration-500 ease-out hover:bg-transparent hover:text-[var(--warm-white)] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(0,0,0,0.35)]"
                >
                  Get a Free Estimate
                  <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-3 border px-7 py-4 text-[11px] font-medium uppercase tracking-[0.24em] transition-all duration-500 ease-out hover:bg-white/10 hover:border-white"
                  style={{ borderColor: "rgba(255,255,255,0.5)", color: "var(--warm-white)" }}
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
          <div className="container-page pb-8 hidden md:flex items-end justify-between text-[10px] uppercase tracking-[0.28em]" style={{ color: "rgba(255,255,255,0.55)" }}>
            <span>Scroll</span>
            <span>Masonry · Construction · Natural Stone</span>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-28 md:py-40">
        <div className="container-page grid gap-16 md:grid-cols-12 md:gap-24 items-center">
          <div className="md:col-span-6 relative">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img src={IMG.finished1} alt="Finished stone promenade at Minoru Lakes" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-background p-6 border border-border w-56">
              <p className="eyebrow">Est. Portfolio</p>
              <p className="mt-2 font-display text-4xl">100+</p>
              <p className="text-xs text-muted-foreground mt-1">Landmark installations delivered</p>
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="eyebrow">Who We Are</p>
            <h2 className="mt-6 text-4xl md:text-6xl text-balance">
              A contracting company defined by <em className="text-accent not-italic" style={{ color: "var(--gold)" }}>craft</em> and precision.
            </h2>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-muted-foreground">
              New Sun Contracting combines expert craftsmanship with premium natural
              stone sourcing to deliver exceptional projects from concept through
              completion. We partner with architects, developers, and institutions to
              realize work that endures.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] border-b border-foreground pb-2 hover:opacity-60"
            >
              Our approach
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border py-28 md:py-40 bg-secondary">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="eyebrow">Services</p>
              <h2 className="mt-6 text-4xl md:text-6xl text-balance">
                Six disciplines. One standard of excellence.
              </h2>
            </div>
            <Link to="/services" className="text-[11px] uppercase tracking-[0.22em] border-b border-foreground pb-2 hover:opacity-60 self-start md:self-end">
              All services →
            </Link>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.title}
                to="/services"
                className="group relative block overflow-hidden bg-card"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(180deg, transparent 55%, rgba(15,15,20,0.85) 100%)" }}
                />
                <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between text-warm-white" style={{ color: "var(--warm-white)" }}>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.28em] opacity-70">{s.n}</span>
                    <h3 className="mt-2 text-2xl font-display">{s.title}</h3>
                  </div>
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center border transition-transform group-hover:translate-x-1"
                    style={{ borderColor: "rgba(255,255,255,0.55)" }}
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="py-28 md:py-40">
        <div className="container-page grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Our Difference</p>
            <h2 className="mt-6 text-4xl md:text-6xl text-balance">
              Built on craftsmanship. <br />
              <em className="not-italic" style={{ color: "var(--gold)" }}>Backed by premium materials.</em>
            </h2>
            <p className="mt-8 text-muted-foreground max-w-md">
              Direct quarry relationships in Brazil, disciplined project management,
              and a portfolio of landmark work — our advantage is measurable at every
              phase.
            </p>
          </div>
          <div className="md:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {DIFFERENCE.map((d) => (
                <li key={d.k} className="grid grid-cols-12 gap-6 py-8 items-start">
                  <span className="col-span-2 md:col-span-1 eyebrow pt-1">{d.k}</span>
                  <div className="col-span-10 md:col-span-11 grid md:grid-cols-3 gap-4">
                    <h3 className="text-xl md:text-2xl font-display md:col-span-1">{d.t}</h3>
                    <p className="md:col-span-2 text-muted-foreground leading-relaxed">{d.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-t border-border py-32 md:py-52 relative overflow-hidden">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">Industries We Serve</p>
            <h2 className="mt-6 text-4xl md:text-6xl text-balance">
              Trusted by developers, architects and institutions.
            </h2>
          </div>
          <div className="mt-20 md:mt-24 grid gap-8 md:grid-cols-3 md:gap-10">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="group border border-border bg-card overflow-hidden transition-colors hover:border-foreground/30"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(180deg, transparent 60%, rgba(15,15,20,0.28) 100%)" }}
                  />
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="font-display text-2xl md:text-3xl leading-tight">{p.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-28 md:py-40 bg-secondary border-t border-border">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">Featured Projects</p>
              <h2 className="mt-6 text-4xl md:text-6xl text-balance">Landmark work, in place.</h2>
            </div>
            <Link to="/projects" className="text-[11px] uppercase tracking-[0.22em] border-b border-foreground pb-2 hover:opacity-60 self-start md:self-end">
              Full portfolio →
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
            {PROJECTS.map((p) => (
              <figure key={p.title} className={`group relative overflow-hidden ${p.span}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption
                  className="absolute inset-x-0 bottom-0 p-6 text-warm-white opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                  style={{
                    color: "var(--warm-white)",
                    background: "linear-gradient(180deg, transparent, rgba(15,15,20,0.85))",
                  }}
                >
                  <p className="text-[10px] uppercase tracking-[0.28em] opacity-70">{p.meta}</p>
                  <p className="mt-1 font-display text-2xl">{p.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={IMG.sl04}
          alt="Paver plaza beside stone retaining wall at Sewell's Landing"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,15,20,0.5) 0%, rgba(15,15,20,0.75) 100%)",
          }}
        />
        <div className="relative z-10 h-full container-page flex items-center">
          <div className="max-w-3xl" style={{ color: "var(--warm-white)" }}>
            <p className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>
              Let's Begin
            </p>
            <h2 className="mt-6 text-5xl md:text-7xl xl:text-8xl font-display text-balance">
              Let's build something <em>exceptional.</em>
            </h2>
            <p className="mt-8 max-w-xl text-lg" style={{ color: "rgba(255,255,255,0.82)" }}>
              Partner with New Sun Contracting for premium masonry, construction, and
              natural stone solutions.
            </p>
            <Link
              to="/estimate"
              className="mt-10 inline-flex items-center gap-3 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em]"
              style={{ background: "var(--warm-white)", color: "var(--ink)" }}
            >
              Get a Free Estimate
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
