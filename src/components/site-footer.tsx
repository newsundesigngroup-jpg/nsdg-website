import { Link } from "@tanstack/react-router";
import { IMG } from "@/lib/images";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="container-page py-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src={IMG.logo} alt="The New Sun Design Group" className="w-40 md:w-48 object-contain" />
          <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05] text-balance">
            Building landmark projects across Greater Vancouver.
          </h2>
          <Link
            to="/estimate"
            className="mt-10 inline-flex items-center gap-3 border border-foreground px-6 py-4 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors hover:bg-foreground hover:text-background"
          >
            Get a Free Estimate
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">Contact</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a href="tel:+12369868270" className="hover:opacity-60">
                (236) 986-8270
              </a>
            </li>
            <li>
              <a href="mailto:info@newsuncontracting.com" className="hover:opacity-60">
                info@newsuncontracting.com
              </a>
            </li>
            <li className="text-muted-foreground">Greater Vancouver, BC</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li><Link to="/about" className="hover:opacity-60">About</Link></li>
            <li><Link to="/services" className="hover:opacity-60">Services</Link></li>
            <li><Link to="/projects" className="hover:opacity-60">Projects</Link></li>
            <li><Link to="/contact" className="hover:opacity-60">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow">Serving</p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li>North Vancouver</li>
            <li>West Vancouver</li>
            <li>Vancouver</li>
            <li>Burnaby · Richmond</li>
            <li>Coquitlam · Surrey</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <p>© {new Date().getFullYear()} New Sun Contracting. All rights reserved.</p>
          <p>Masonry · Construction · Natural Stone</p>
        </div>
      </div>
    </footer>
  );
}
