import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { IMG } from "@/lib/images";
import { getProjectBySlug, PROJECTS } from "@/lib/projects-data";
import { CTABand } from "../services";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetailPage,
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Project"} — New Sun Contracting` },
      { name: "description", content: loaderData?.description ?? "" },
      { property: "og:title", content: `${loaderData?.title ?? "Project"} — New Sun Contracting` },
      { property: "og:description", content: loaderData?.description ?? "" },
      { property: "og:image", content: loaderData?.cover ?? IMG.finished1 },
    ],
  }),
  notFoundComponent: () => (
    <section className="container-page pt-40 md:pt-52 pb-28 text-center">
      <p className="eyebrow">Not Found</p>
      <h1 className="mt-6 text-4xl md:text-6xl font-display">This project doesn't exist.</h1>
      <Link
        to="/projects"
        className="mt-10 inline-flex items-center gap-3 border border-foreground px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] hover:opacity-60"
      >
        ← Back to Projects
      </Link>
    </section>
  ),
});

export default ProjectDetailPage;
function ProjectDetailPage() {
  const project = Route.useLoaderData();

  return (
    <>
      {/* HERO */}
      <section className="relative h-[68vh] min-h-[420px] w-full overflow-hidden">
        <img
          src={project.cover}
          alt={project.coverAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(15,15,20,0.45) 0%, rgba(15,15,20,0.25) 35%, rgba(15,15,20,0.85) 100%)" }}
        />
        <div className="relative z-10 h-full container-page flex flex-col justify-end pb-14 md:pb-20">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] opacity-80 hover:opacity-100 w-fit"
            style={{ color: "var(--warm-white)" }}
          >
            ← All Projects
          </Link>
          <p className="mt-6 eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>
            {project.type} · {project.location}
          </p>
          <h1
            className="mt-4 text-4xl md:text-6xl xl:text-7xl font-display leading-[1.02] max-w-4xl text-balance"
            style={{ color: "var(--warm-white)" }}
          >
            {project.title}
          </h1>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="container-page pt-16 md:pt-20 pb-16 md:pb-20">
        <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </section>

      {/* GALLERY */}
      <section className="container-page pb-28 md:pb-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {project.images.map((img, i) => (
            <div key={i} className="group relative overflow-hidden aspect-[4/3]">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="border-t border-border container-page py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {PROJECTS.length} projects in the portfolio
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-3 border border-foreground px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] hover:opacity-60 self-start md:self-auto"
        >
          View All Projects
          <span aria-hidden>→</span>
        </Link>
      </section>

      <CTABand />
    </>
  );
}
