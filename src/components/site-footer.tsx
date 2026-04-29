import { Link } from "@tanstack/react-router";
import { Landmark, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const columns = [
  {
    title: "Checking Accounts",
    body: (
      <>
        Choose the <FLink>checking account</FLink> that works best for you. See our <FLink>Northwind Everyday Checking®</FLink> offer for new customers. Make purchases with your debit card, and bank from almost anywhere by phone, tablet or computer and more than 14,000 ATMs and 5,000 branches.
      </>
    ),
  },
  {
    title: "Savings Accounts & CDs",
    body: (
      <>
        It's never too early to begin saving. <FLink>Open a savings account</FLink> or open a Certificate of Deposit (<FLink>see interest rates</FLink>) and start saving your money.
      </>
    ),
  },
  {
    title: "Credit Cards",
    body: (
      <>
        Northwind <FLink>credit cards</FLink> can help you buy the things you need. Many of our cards <FLink>offer rewards</FLink> that can be redeemed for <FLink>cash back</FLink> or <FLink>travel-related</FLink> perks. With so many options, it can be easy to find a card that matches your lifestyle. Plus, with Credit Journey you can get a <FLink>free credit score</FLink>!
      </>
    ),
  },
  {
    title: "Mortgages",
    body: (
      <>
        Apply for a <FLink>mortgage</FLink> or <FLink>refinance your mortgage</FLink> with Northwind. View today's <FLink>mortgage rates</FLink> or calculate what you can afford with our <FLink>mortgage calculator</FLink>. Visit our <FLink>Education Center</FLink> for homebuying tips and more.
      </>
    ),
  },
];

function FLink({ children }: { children: React.ReactNode }) {
  return <a href="#" className="text-primary underline hover:no-underline">{children}</a>;
}

const bottomGroups = [
  { title: "Investing by J.M. Northwind", links: ["Online Investing", "Retirement", "Wealth Management", "Investment Advisors"] },
  { title: "Business Banking", links: ["Business Checking", "Merchant Services", "Business Credit Cards", "Loans & Lines of Credit"] },
  { title: "Commercial Banking", links: ["Industries", "Insights", "Solutions", "About Us"] },
  { title: "About Northwind", links: ["Media Center", "Careers", "Investor Relations", "Sustainability"] },
];

export function SiteFooter() {
  return (
    <footer className="bg-background text-foreground">
      {/* Top intro columns */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <Landmark className="h-7 w-7 text-primary" />
            <span className="font-display text-2xl font-bold tracking-tight text-foreground">NORTHWIND</span>
          </Link>

          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {columns.map((c) => (
              <div key={c.title}>
                <h4 className="font-semibold text-foreground">{c.title}</h4>
                <div className="mt-3 h-px w-10 bg-border" />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Secondary link grid */}
      <div className="border-t border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {bottomGroups.map((g) => (
            <div key={g.title}>
              <h4 className="font-semibold text-foreground">{g.title}</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {g.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-primary hover:underline">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Social + legal */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex gap-5 text-muted-foreground">
              <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5 hover:text-primary" /></a>
              <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5 hover:text-primary" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-primary" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 hover:text-primary" /></a>
              <a href="#" aria-label="YouTube"><Youtube className="h-5 w-5 hover:text-primary" /></a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {["Accessibility", "Privacy", "Security", "Terms of use", "About our ads", "AdChoices", "Site map"].map((l) => (
                <a key={l} href="#" className="text-primary hover:underline">{l}</a>
              ))}
            </div>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            "Northwind," "J.M. Northwind," and the Northwind columned logo are fictitious marks used for this demonstration site only. This is not a real bank and no real banking services are offered. Deposits are not insured. © {new Date().getFullYear()} Northwind Bank, Demo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
