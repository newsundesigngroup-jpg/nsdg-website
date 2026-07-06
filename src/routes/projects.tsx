import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { IMG } from "@/lib/images";
import { SectionHeader } from "./about";
import { CTABand } from "./services";

export const Route = createFileRoute("/projects")({
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

const PROJECTS = [
  { img: IMG.finished1, title: "Twin Lakes Promenade", meta: "Central Richmond", type: "Landscape Masonry" },
  { img: IMG.finished2, title: "Cascade Water Feature", meta: "Central Richmond", type: "Architectural Stone" },
  { img: IMG.finished3, title: "Basalt Waterfall Wall", meta: "Central Richmond", type: "Feature Installation" },
  { img: IMG.tl3, title: "Curved Basalt Seat Wall", meta: "Twin Lakes, Richmond", type: "Retaining Structures" },
  { img: IMG.tl4, title: "Split-Face Basalt Detail", meta: "Twin Lakes, Richmond", type: "Stone Detail" },
  { img: IMG.tl23, title: "Waterside Block Assembly", meta: "Twin Lakes, Richmond", type: "Field Operations" },
  { img: IMG.tl21, title: "Shoreline Retaining Wall", meta: "Twin Lakes, Richmond", type: "Public Realm" },
  { img: IMG.tl22, title: "Cast-In-Place Substructure", meta: "Twin Lakes, Richmond", type: "Concrete Works" },
  { img: IMG.tl5, title: "Formed Concrete Pad", meta: "Twin Lakes, Richmond", type: "Site Preparation" },
  { img: IMG.wall, title: "Basalt Retaining Wall", meta: "Greater Vancouver", type: "Retaining Structures" },
  { img: IMG.build1, title: "Seat Wall Sequence", meta: "Waterfront", type: "Public Realm" },
  { img: IMG.build2, title: "Coping Detail", meta: "Waterfront", type: "Stone Detail" },
  { img: IMG.bridge, title: "Curved Stone Bridge", meta: "Civic", type: "Infrastructure" },
  { img: IMG.pond, title: "Pond Perimeter Wall", meta: "Landscape", type: "Masonry" },
  { img: IMG.cut, title: "On-Site Stone Fabrication", meta: "Field Operations", type: "Craft" },
  { img: IMG.winter, title: "Cold-Weather Installation", meta: "Year-Round Delivery", type: "Construction" },
];

const SPANS = [
  "md:col-span-8 aspect-[16/10]",
  "md:col-span-4 aspect-[4/5]",
  "md:col-span-4 aspect-square",
  "md:col-span-4 aspect-square",
  "md:col-span-4 aspect-square",
  "md:col-span-6 aspect-[4/3]",
  "md:col-span-6 aspect-[4/3]",
  "md:col-span-5 aspect-[4/5]",
  "md:col-span-7 aspect-[4/3]",
  "md:col-span-4 aspect-square",
  "md:col-span-4 aspect-square",
  "md:col-span-4 aspect-square",
  "md:col-span-6 aspect-[4/3]",
  "md:col-span-6 aspect-[4/3]",
  "md:col-span-5 aspect-[4/5]",
  "md:col-span-7 aspect-[4/3]",
];

export default ProjectsPage;
function ProjectsPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <SectionHeader
        eyebrow="Projects"
        title={<>Selected work across <em>Greater Vancouver.</em></>}
      />

      <section className="container-page pb-28 md:pb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {PROJECTS.map((p, i) => (
            <button
              key={p.title}
              type="button"
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden text-left ${SPANS[i] ?? "md:col-span-4 aspect-square"}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(180deg, transparent 55%, rgba(15,15,20,0.85))" }}
              />
              <div
                className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500"
                style={{ color: "var(--warm-white)" }}
              >
                <p className="text-[10px] uppercase tracking-[0.28em] opacity-70">{p.type} · {p.meta}</p>
                <p className="mt-1 font-display text-2xl">{p.title}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          style={{ background: "rgba(15,15,20,0.92)" }}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 h-10 w-10 border border-white/40 text-white flex items-center justify-center"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            ✕
          </button>
          <figure className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={PROJECTS[active].img} alt={PROJECTS[active].title} className="w-full max-h-[80vh] object-contain" />
            <figcaption className="mt-6 flex items-baseline justify-between" style={{ color: "var(--warm-white)" }}>
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] opacity-70">{PROJECTS[active].type} · {PROJECTS[active].meta}</p>
                <p className="mt-1 font-display text-3xl">{PROJECTS[active].title}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="h-10 w-10 border border-white/40"
                  onClick={() => setActive((a) => (a === null ? 0 : (a - 1 + PROJECTS.length) % PROJECTS.length))}
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="h-10 w-10 border border-white/40"
                  onClick={() => setActive((a) => (a === null ? 0 : (a + 1) % PROJECTS.length))}
                  aria-label="Next"
                >
                  →
                </button>
              </div>
            </figcaption>
          </figure>
        </div>
      )}

      <CTABand />
    </>
  );
}
