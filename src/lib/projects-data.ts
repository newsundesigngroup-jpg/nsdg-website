import { IMG } from "@/lib/images";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectEntry {
  slug: string;
  title: string;
  location: string;
  type: string;
  cover: string;
  coverAlt: string;
  description: string;
  images: ProjectImage[];
}

export const PROJECTS: ProjectEntry[] = [
  {
    slug: "minoru-central-park",
    title: "Minoru Central Park, Central Richmond",
    location: "Central Richmond",
    type: "Landscape Masonry",
    cover: IMG.finished1,
    coverAlt: "Finished stone promenade at Minoru Lakes",
    description:
      "10,000 sq ft of large block granite cladding surrounded on Minoru Lake Park perimeter.",
    images: [
      { src: IMG.finished1, alt: "Minoru Lakes Promenade — Central Richmond" },
      { src: IMG.finished2, alt: "Cascade Water Feature — Central Richmond" },
      { src: IMG.finished3, alt: "Basalt Waterfall Wall — Central Richmond" },
      { src: IMG.tl3, alt: "Curved Basalt Seat Wall — Minoru Lakes, Richmond" },
      { src: IMG.tl4, alt: "Split-Face Basalt Detail — Minoru Lakes, Richmond" },
      { src: IMG.tl23, alt: "Waterside Block Assembly — Minoru Lakes, Richmond" },
      { src: IMG.tl21, alt: "Shoreline Retaining Wall — Minoru Lakes, Richmond" },
      { src: IMG.tl22, alt: "Cast-In-Place Substructure — Minoru Lakes, Richmond" },
      { src: IMG.tl5, alt: "Formed Concrete Pad — Minoru Lakes, Richmond" },
      { src: IMG.wall, alt: "Basalt Retaining Wall — Greater Vancouver" },
      { src: IMG.build1, alt: "Seat Wall Sequence — Waterfront" },
      { src: IMG.build2, alt: "Coping Detail — Waterfront" },
      { src: IMG.bridge, alt: "Curved Stone Bridge — Civic" },
      { src: IMG.pond, alt: "Pond Perimeter Wall — Landscape" },
      { src: IMG.cut, alt: "On-Site Stone Fabrication — Field Operations" },
      { src: IMG.winter, alt: "Cold-Weather Installation — Year-Round Delivery" },
    ],
  },
  {
    slug: "sewells-landing",
    title: "Sewell's Landing, Horseshoe Bay",
    location: "Horseshoe Bay",
    type: "Paver & Stone Cladding",
    cover: IMG.sl01,
    coverAlt: "Finished paver courtyard at Sewell's Landing, Horseshoe Bay",
    description:
      "33,000 sq ft of heavy transport pavers + feature wall stone cladding.",
    images: [
      { src: IMG.sl01, alt: "Finished paver courtyard — Sewell's Landing" },
      { src: IMG.sl02, alt: "Paver walkway with stainless bollards — Sewell's Landing" },
      { src: IMG.sl03, alt: "Installer setting paver edge course — Sewell's Landing" },
      { src: IMG.sl04, alt: "Paver plaza beside stone retaining wall — Sewell's Landing" },
      { src: IMG.sl05, alt: "Paver installation beneath feature wall — Sewell's Landing" },
      { src: IMG.sl06, alt: "Wide paver field installation in progress — Sewell's Landing" },
      { src: IMG.sl07, alt: "Site crew coordinating paver plaza build-out — Sewell's Landing" },
      { src: IMG.sl08, alt: "Paver run leading toward the feature wall — Sewell's Landing" },
    ],
  },
];

export function getProjectBySlug(slug: string | undefined) {
  return PROJECTS.find((p) => p.slug === slug);
}
