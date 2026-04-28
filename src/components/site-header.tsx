import { Link } from "@tanstack/react-router";
import { Landmark, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/personal", label: "Personal" },
  { to: "/business", label: "Business" },
  { to: "/commercial", label: "Commercial" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full bg-primary-deep text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Landmark className="h-7 w-7 text-gold" />
          <span className="font-display text-2xl font-semibold tracking-tight">Northwind</span>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-gold sm:inline">Bank</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-primary-foreground/80 transition hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-md border border-primary-foreground/30 px-4 py-2 text-sm font-medium transition hover:bg-primary-foreground/10">
            Sign in
          </button>
          <button className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground transition hover:brightness-110">
            Open account
          </button>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-primary-foreground/10 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-primary-foreground/10">
                {n.label}
              </Link>
            ))}
            <button className="mt-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground">Open account</button>
          </div>
        </div>
      )}
    </header>
  );
}
