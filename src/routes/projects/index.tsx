import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG } from "@/lib/images";
import { PROJECTS } from "@/lib/projects-data";
import { SectionHeader } from "../about";
import { CTABand } from "../services";

export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — New Sun Contracting Portfolio" },
      { name: "description", content: "Selected masonry, stone installation and construction projects across Greater Vancouver." },
      { property: "og:title", content: "Projects — New Sun Contracting" },
      { property: "og:description", content: "Landmark work in place." },
      { property: "og:image", content: IMG.finished1 },
    ],
  }),
});

export default ProjectsPage;
function ProjectsPage() {
  return (
    <>
      <SectionHeader
        eyebrow="Projects"
        title={<>Selected work across <em>Greater Vancouver.</em></>}
      />

      <section className="container-page pb-28 md:pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group relative block overflow-hidden bg-card"
            >
              <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden">
                <img
                  src={p.cover}
                  alt={p.coverAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
              </div>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(180deg, transparent 40%, rgba(15,15,20,0.88) 100%)" }}
              />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9" style={{ color: "var(--warm-white)" }}>
                <p className="text-[10px] uppercase tracking-[0.28em] opacity-70">{p.type} · {p.location}</p>
                <h3 className="mt-2 font-display text-3xl md:text-4xl leading-tight">{p.title}</h3>
                <span
                  className="mt-6 inline-flex items-center gap-3 border px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] transition-all group-hover:bg-[var(--warm-white)] group-hover:text-[var(--ink)]"
                  style={{ borderColor: "rgba(255,255,255,0.55)" }}
                >
                  View Project Details
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
