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
  {
    slug: "the-keefer",
    title: "The Keefer, Downtown Eastside",
    location: "Downtown Eastside, Vancouver",
    type: "Heritage Envelope Restoration",
    cover: IMG.keefer03,
    coverAlt: "Scaffolded exterior of The Keefer building during restoration — Downtown Eastside",
    description:
      "Chinatown Heritage Envelope Restoration of the famous Keefer building in Downtown East side Vancouver.",
    images: [
      { src: IMG.keefer03, alt: "Scaffolded exterior of The Keefer building — Downtown Eastside" },
      { src: IMG.keefer04, alt: "Full-height scaffold and debris netting — The Keefer, Downtown Eastside" },
      { src: IMG.keefer05, alt: "Street view of The Keefer heritage building — Downtown Eastside" },
      { src: IMG.keefer10, alt: "Restored facade with scaffold still in place — The Keefer" },
      { src: IMG.keefer02, alt: "Re-pointed heritage brick interior wall — The Keefer" },
      { src: IMG.keefer06, alt: "Restored brick veneer close-up — The Keefer" },
      { src: IMG.keefer11, alt: "Heritage brick detail after restoration — The Keefer" },
      { src: IMG.keefer07, alt: "Restored brick corner detail with scaffold — The Keefer" },
      { src: IMG.keefer08, alt: "Window opening wrapped for weather protection — The Keefer" },
      { src: IMG.keefer09, alt: "Interior brick veneer installation beneath window line — The Keefer" },
      { src: IMG.keefer01, alt: "Balcony detail — The Keefer restoration project" },
    ],
  },
  {
    slug: "living-spaces-false-creek",
    title: "Living Spaces, False Creek",
    location: "False Creek, Vancouver",
    type: "Heritage Envelope Restoration",
    cover: IMG.ls19,
    coverAlt: "Restored heritage facade at Living Spaces — False Creek, Vancouver",
    description:
      "Heritage Envelope Restoration of the Old Vancouver Sun Building at Living Spaces, False Creek, Vancouver BC.",
    images: [
      { src: IMG.ls19, alt: "Finished heritage facade — Living Spaces, False Creek" },
      { src: IMG.ls01, alt: "Restored brick corner alongside original masonry — Living Spaces" },
      { src: IMG.ls02, alt: "Full scaffold and debris netting during restoration — Living Spaces" },
      { src: IMG.ls03, alt: "Street view of scaffolded heritage building — Living Spaces" },
      { src: IMG.ls04, alt: "Wide exterior view during envelope restoration — Living Spaces" },
      { src: IMG.ls05, alt: "Facade sections marked for restoration sequencing — Living Spaces" },
      { src: IMG.ls06, alt: "Mason working from scaffold on upper facade — Living Spaces" },
      { src: IMG.ls07, alt: "Crew delivering materials by flatbed at street level — Living Spaces" },
      { src: IMG.ls08, alt: "Painted heritage brick facade prior to restoration — Living Spaces" },
      { src: IMG.ls09, alt: "Rooftop addition with restored red brick — Living Spaces" },
      { src: IMG.ls10, alt: "Rooftop brick corner and deck detail — Living Spaces" },
      { src: IMG.ls11, alt: "Rooftop brick corner with window detail — Living Spaces" },
      { src: IMG.ls12, alt: "Rooftop brick facade beside French doors — Living Spaces" },
      { src: IMG.ls13, alt: "Checkerboard brick corner detail on rooftop addition — Living Spaces" },
      { src: IMG.ls14, alt: "Site equipment staged for envelope restoration — Living Spaces" },
      { src: IMG.ls15, alt: "Mason removing deteriorated brick from the facade — Living Spaces" },
      { src: IMG.ls16, alt: "Close-up of re-pointed heritage brick and mortar — Living Spaces" },
      { src: IMG.ls17, alt: "Crew clearing ice at the building entrance in winter — Living Spaces" },
      { src: IMG.ls18, alt: "Mason working on rooftop scaffold against clear sky — Living Spaces" },
    ],
  },
  {
    slug: "tap-and-barrel-south-surrey",
    title: "Tap & Barrel, South Surrey",
    location: "South Surrey",
    type: "Feature Masonry & Fireplace",
    cover: IMG.tb09,
    coverAlt: "Finished red brick floating fireplace with big-screen feature — Tap & Barrel, South Surrey",
    description:
      "Classic red brick floating fireplace and big-screen feature at Tap & Barrel, South Surrey.",
    images: [
      { src: IMG.tb09, alt: "Finished floating fireplace with big-screen feature — Tap & Barrel" },
      { src: IMG.tb06, alt: "Finished dining room with fireplace feature wall — Tap & Barrel" },
      { src: IMG.tb05, alt: "Finished lounge seating beneath feature lighting — Tap & Barrel" },
      { src: IMG.tb07, alt: "Illuminated Tap & Barrel storefront sign at night — South Surrey" },
      { src: IMG.tb01, alt: "Brick pillar under construction — Tap & Barrel, South Surrey" },
      { src: IMG.tb02, alt: "Masons building the brick fireplace surround — Tap & Barrel" },
      { src: IMG.tb08, alt: "Brick chimney feature mid-construction with TV opening — Tap & Barrel" },
      { src: IMG.tb03, alt: "Framed pillar with rough openings before brick veneer — Tap & Barrel" },
      { src: IMG.tb04, alt: "Pillar framing with electrical rough-in — Tap & Barrel" },
    ],
  },
  {
    slug: "indian-arm-seawall",
    title: "Private Sea Wall, Indian Arm",
    location: "Indian Arm",
    type: "Seawall Restoration & Landscape Masonry",
    cover: IMG.ia01,
    coverAlt: "Private stone seawall and beach access stairway — Indian Arm",
    description:
      "Large private stone seawall restoration on Indian Arm, including a stone and concrete stairway to the beach, plus pathway design and installation.",
    images: [
      { src: IMG.ia01, alt: "Beach access stairway under construction — Indian Arm" },
      { src: IMG.ia02, alt: "Cutting granite steps on site — Indian Arm seawall" },
      { src: IMG.ia03, alt: "Crew building the private stone seawall along the beach — Indian Arm" },
    ],
  },
  {
    slug: "the-sun-tower",
    title: "The Sun Tower",
    location: "Downtown Vancouver",
    type: "Heritage Restoration & Asbestos Abatement",
    cover: IMG.st02,
    coverAlt: "The Sun Tower's iconic dome against a clear sky — Downtown Vancouver",
    description:
      "Exterior commercial asbestos abatement following the post-fire asbestos product frenzy in Vancouver, including sculpture and original ceramic tile restoration.",
    images: [
      { src: IMG.st02, alt: "The Sun Tower's landmark dome — Downtown Vancouver" },
      { src: IMG.st03, alt: "Scaffold access along the restored stone facade — The Sun Tower" },
      { src: IMG.st01, alt: "Crew working from an upper balcony during restoration — The Sun Tower" },
    ],
  },
];

export function getProjectBySlug(slug: string | undefined) {
  return PROJECTS.find((p) => p.slug === slug);
}
