import { Link } from "@tanstack/react-router";
import { Landmark, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const groups = [
  { title: "Personal", links: ["Checking", "Savings", "Credit cards", "Auto loans", "Mortgages"] },
  { title: "Business", links: ["Business checking", "Merchant services", "Payroll", "Lending"] },
  { title: "Wealth", links: ["Investing", "Retirement", "Private client", "Advisors"] },
  { title: "About", links: ["Our story", "Newsroom", "Careers", "Investor relations"] },
];

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Landmark className="h-7 w-7 text-gold" />
              <span className="font-display text-2xl font-semibold">Northwind</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70">
              A modern bank built on trust, craft, and clarity. Member FDIC*.
            </p>
            <div className="mt-6 flex gap-4 text-primary-foreground/70">
              <Facebook className="h-5 w-5 hover:text-gold" />
              <Twitter className="h-5 w-5 hover:text-gold" />
              <Instagram className="h-5 w-5 hover:text-gold" />
              <Youtube className="h-5 w-5 hover:text-gold" />
            </div>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="font-display text-base font-semibold text-gold">{g.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
                {g.links.map((l) => <li key={l} className="hover:text-gold cursor-pointer">{l}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/60">
          *Demonstration site. Not a real bank. © {new Date().getFullYear()} Northwind Bank.
        </div>
      </div>
    </footer>
  );
}
