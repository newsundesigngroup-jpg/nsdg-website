import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — New Sun Contracting" },
      { name: "description", content: "Craftsmanship, international stone sourcing, and disciplined project management define New Sun Contracting's approach to landmark construction." },
      { property: "og:title", content: "About — New Sun Contracting" },
      { property: "og:description", content: "Craftsmanship, sourcing, and discipline for landmark projects across Greater Vancouver." },
      { property: "og:image", content: IMG.wall },
    ],
  }),
});

const VALUES = [
  { t: "Craftsmanship", d: "Every joint, every stone, placed with intention. Our masons are the studio behind the work." },
  { t: "Quality", d: "We hold ourselves to a standard higher than the specification. It's what makes work endure." },
  { t: "Relationships", d: "Long partnerships with architects, developers, and quarry operators — measured in decades." },
  { t: "Reliability", d: "Predictable schedules, transparent communication, and disciplined phase coordination." },
];

export default AboutPage;
function AboutPage() {
  return (
    <>
      <SectionHeader eyebrow="About" title={<>An architectural approach to <em>masonry and construction.</em></>} />

      <section className="container-page pb-24 md:pb-32">
        <div className="grid gap-12 md:grid-cols-12 items-start">
          <div className="md:col-span-6">
            <img src={IMG.wall} alt="Basalt masonry wall detail" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="md:col-span-5 md:col-start-8 md:sticky md:top-28">
            <p className="text-lg leading-relaxed text-muted-foreground">
              New Sun Contracting was built on a simple belief: that great buildings begin
              with great craft. From premium masonry to full construction management, we
              partner with the teams shaping Greater Vancouver's most ambitious projects.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Our direct quarry relationships in Brazil give us access to natural stone
              of exceptional quality — sourced, selected and installed with the same
              precision that defines every phase of our work.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-28 md:py-40 bg-secondary">
        <div className="container-page grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">What We Value</p>
            <h2 className="mt-6 text-4xl md:text-5xl text-balance">Principles that shape every project.</h2>
          </div>
          <div className="md:col-span-8">
            <ul className="grid gap-px bg-border border border-border md:grid-cols-2">
              {VALUES.map((v) => (
                <li key={v.t} className="bg-background p-10">
                  <h3 className="font-display text-3xl">{v.t}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{v.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-40 container-page">
        <div className="grid gap-16 md:grid-cols-12 items-end">
          <div className="md:col-span-6">
            <img src={IMG.cut} alt="Stone cutting on site" className="w-full aspect-[4/3] object-cover" />
          </div>
          <div className="md:col-span-6">
            <p className="eyebrow">International Sourcing</p>
            <h2 className="mt-6 text-4xl md:text-5xl text-balance">
              Direct from quarry, <em>to your site.</em>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our partnerships with select quarry operators in Brazil ensure the natural
              stone we install is unmatched in colour, character, and consistency. We
              oversee the material from selection through installation — a rare
              advantage among contractors in the region.
            </p>
            <Link to="/estimate" className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] border-b border-foreground pb-2 hover:opacity-60">
              Begin a project →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function SectionHeader({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <section className="pt-40 md:pt-52 pb-16 md:pb-24">
      <div className="container-page">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 text-5xl md:text-7xl xl:text-8xl text-balance max-w-5xl font-display leading-[1.02]">
          {title}
        </h1>
      </div>
    </section>
  );
}
