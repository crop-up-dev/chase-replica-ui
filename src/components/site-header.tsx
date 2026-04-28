import { Link } from "@tanstack/react-router";
import { Landmark, Menu, X, Search, ChevronDown } from "lucide-react";
import { useState } from "react";

const audienceTabs = [
  { to: "/personal", label: "Personal" },
  { to: "/business", label: "Business" },
  { to: "/commercial", label: "Commercial" },
];

const productNav = [
  { to: "/personal", label: "Checking" },
  { to: "/personal", label: "Savings & CDs" },
  { to: "/personal", label: "Credit cards" },
  { to: "/personal", label: "Home loans" },
  { to: "/personal", label: "Auto" },
  { to: "/personal", label: "Investing" },
  { to: "/personal", label: "Education & goals" },
  { to: "/personal", label: "Travel" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full bg-card text-foreground border-b border-border">
      {/* Top utility row: audience tabs + utility links */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-4 lg:px-8">
        <nav className="flex items-center gap-6">
          {audienceTabs.map((t) => (
            <Link
              key={t.label}
              to={t.to}
              className="relative pb-2 text-sm font-medium text-foreground/80 hover:text-primary"
              activeProps={{ className: "text-primary border-b-2 border-primary" }}
            >
              {t.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-6 text-sm text-foreground/80 lg:flex">
          <button className="hover:text-primary">Schedule a meeting</button>
          <button className="inline-flex items-center gap-1 hover:text-primary">
            Customer service <ChevronDown className="h-4 w-4" />
          </button>
          <button className="hover:text-primary">Español</button>
          <button aria-label="Search" className="hover:text-primary">
            <Search className="h-4 w-4" />
          </button>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Logo row */}
      <div className="mx-auto max-w-7xl px-4 pt-3 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2">
          <Landmark className="h-7 w-7 text-primary" />
          <span className="font-display text-2xl font-bold tracking-tight text-primary-deep">
            NORTHWIND
          </span>
        </Link>
      </div>

      {/* Product nav row */}
      <div className="mx-auto max-w-7xl px-4 pt-4 lg:px-8">
        <nav className="hidden flex-wrap items-center gap-x-8 gap-y-2 pb-3 lg:flex">
          {productNav.map((p) => (
            <Link
              key={p.label}
              to={p.to}
              className="text-sm font-medium text-foreground/85 hover:text-primary"
            >
              {p.label}
            </Link>
          ))}
        </nav>
      </div>

      {open && (
        <div className="border-t border-border lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {[...audienceTabs, ...productNav].map((n, i) => (
              <Link
                key={`${n.label}-${i}`}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
