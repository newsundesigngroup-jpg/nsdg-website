import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { IMG } from "@/lib/images";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color,backdrop-filter] duration-500",
        transparent
          ? "bg-transparent text-warm-white border-b border-transparent"
          : "bg-background/85 backdrop-blur-md text-foreground border-b border-border",
      ].join(" ")}
      style={transparent ? { color: "var(--warm-white)" } : undefined}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={IMG.logo}
            alt="The New Sun Design Group"
            className="h-11 w-11 md:h-12 md:w-12 object-contain shrink-0"
            style={{
              filter: transparent
                ? "drop-shadow(0 1px 6px rgba(0,0,0,0.45))"
                : "none",
            }}
          />
          <span className="text-[11px] font-medium uppercase tracking-[0.28em]">
            New Sun <span className="opacity-60">Contracting</span>
          </span>
        </Link>


        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[11px] font-medium uppercase tracking-[0.22em] transition-opacity hover:opacity-60"
              activeProps={{ className: "opacity-100 [&]:font-semibold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative block h-3 w-6">
            <span
              className="absolute left-0 top-0 h-px w-full bg-current transition-transform"
              style={{ transform: open ? "translateY(6px) rotate(45deg)" : "none" }}
            />
            <span
              className="absolute left-0 bottom-0 h-px w-full bg-current transition-transform"
              style={{ transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background text-foreground">
          <div className="container-page py-6 flex flex-col gap-5">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm uppercase tracking-[0.22em]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/estimate"
              className="mt-2 inline-flex items-center justify-center border border-foreground px-4 py-3 text-[11px] uppercase tracking-[0.22em]"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
