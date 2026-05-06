import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X, Search, ChevronDown, ChevronUp, User } from "lucide-react";
import logo from "@/assets/logo.png";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/lib/auth";

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

const customerServiceItems = [
  "See help options",
  "Make a payment",
  "Find ATM or branch",
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [csOpen, setCsOpen] = useState(false);
  const csRef = useRef<HTMLDivElement>(null);
  const { user, signOut } = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (csRef.current && !csRef.current.contains(e.target as Node)) setCsOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-card text-foreground border-b border-border">
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

          <div ref={csRef} className="relative">
            <button
              onClick={() => setCsOpen((v) => !v)}
              className={`inline-flex items-center gap-1 ${csOpen ? "text-primary" : "hover:text-primary"}`}
              aria-expanded={csOpen}
              aria-haspopup="menu"
            >
              Customer service {csOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {csOpen && (
              <div role="menu" className="absolute right-0 top-full mt-2 w-56 rounded-md border border-border bg-card py-2 shadow-lg z-50">
                {customerServiceItems.map((item) => (
                  <button
                    key={item}
                    role="menuitem"
                    onClick={() => setCsOpen(false)}
                    className="block w-full px-4 py-2 text-left text-sm text-foreground hover:bg-secondary hover:text-primary"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="hover:text-primary">Español</button>

          {user ? (
            <div className="flex items-center gap-3">
              <Link to="/dashboard" className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
                <User className="h-4 w-4" /> {user.username}
              </Link>
              <button
                onClick={() => { signOut(); nav({ to: "/" }); }}
                className="text-foreground/80 hover:text-primary"
              >
                Sign out
              </button>
            </div>
          ) : (
            <Link to="/signin" className="font-medium text-primary hover:underline">Sign in</Link>
          )}

          <button aria-label="Search" className="hover:text-primary">
            <Search className="h-4 w-4" />
          </button>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-3 lg:px-8">
        <Link to="/" className="inline-flex items-center" aria-label="Home">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>
      </div>

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
            <div className="mt-2 border-t border-border pt-2">
              <div className="px-3 py-1 text-xs uppercase text-muted-foreground">Customer service</div>
              {customerServiceItems.map((item) => (
                <button key={item} className="block w-full rounded-md px-3 py-2 text-left text-sm hover:bg-secondary">
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-2 border-t border-border pt-2">
              {user ? (
                <Link to="/dashboard" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-semibold text-primary">
                  My dashboard ({user.username})
                </Link>
              ) : (
                <>
                  <Link to="/signin" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-semibold text-primary">Sign in</Link>
                  <Link to="/signup" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary">Sign up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
