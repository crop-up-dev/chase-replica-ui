import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp, CreditCard, Home, Briefcase, PiggyBank } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/hero-couple.jpg";
import bizImg from "@/assets/business-owner.jpg";
import homeImg from "@/assets/home-loans.jpg";
import investImg from "@/assets/investing.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <QuickActions />
      <ProductGrid />
      <Promise />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center text-primary-foreground">
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
            <Sparkles className="h-3.5 w-3.5" /> New customer offer
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            Earn up to <span className="text-gold">$900</span> when you open a new checking & savings account.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/80">
            Modern banking with a craft you can feel. No monthly fees on qualifying accounts, 24/7 support, and tools that actually help.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition hover:brightness-110">
              Open an account <ArrowRight className="h-4 w-4" />
            </button>
            <Link to="/personal" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-semibold transition hover:bg-primary-foreground/10">
              See offer details
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-primary-foreground/60">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> FDIC-insured*</span>
            <span>4.8 ★ App Store</span>
            <span>Trusted by 12M customers</span>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl" style={{ boxShadow: "var(--shadow-elevated)" }}>
            <img src={heroImg} alt="Couple managing finances" width={1280} height={896} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-card p-5 sm:block" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Savings APY</div>
            <div className="font-display text-3xl font-semibold text-primary">4.50%</div>
            <div className="text-xs text-muted-foreground">on balances over $5,000</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickActions() {
  const actions = [
    { icon: CreditCard, label: "Open a card" },
    { icon: PiggyBank, label: "Start saving" },
    { icon: Home, label: "Apply for a mortgage" },
    { icon: Briefcase, label: "For business" },
  ];
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border px-0 lg:grid-cols-4">
        {actions.map((a) => (
          <button key={a.label} className="flex items-center justify-center gap-3 bg-card px-6 py-6 text-sm font-medium text-primary transition hover:bg-secondary">
            <a.icon className="h-5 w-5 text-gold" />
            {a.label}
          </button>
        ))}
      </div>
    </section>
  );
}

function ProductGrid() {
  const cards = [
    { img: bizImg, eyebrow: "For business", title: "Tools that scale with your business", body: "Open a Northwind business checking account in minutes — no monthly fee for the first 12 months.", cta: "Explore business" },
    { img: homeImg, eyebrow: "Mortgages", title: "Buy or refinance with confidence", body: "Get a personalized rate in minutes. Our home advisors guide you from pre-approval to keys.", cta: "Get a rate" },
    { img: investImg, eyebrow: "Investing", title: "Invest with clarity, not jargon", body: "Self-directed trades with $0 commission, or work with a dedicated advisor.", cta: "Start investing" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-12 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-semibold text-primary sm:text-4xl">Built for every chapter</h2>
          <p className="mt-2 text-muted-foreground">From your first card to your forever home.</p>
        </div>
        <Link to="/personal" className="hidden items-center gap-2 text-sm font-medium text-primary hover:text-gold sm:inline-flex">
          See all products <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <article key={c.title} className="group overflow-hidden rounded-2xl bg-card transition hover:-translate-y-1" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="aspect-[4/3] overflow-hidden">
              <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-gold">{c.eyebrow}</div>
              <h3 className="mt-2 font-display text-xl font-semibold text-primary">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold">
                {c.cta} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Promise() {
  const items = [
    { icon: ShieldCheck, title: "Security you can count on", body: "Bank-grade encryption, fraud monitoring, and our $0 liability promise." },
    { icon: TrendingUp, title: "Tools that grow with you", body: "Smart insights and automated savings — built into every account." },
    { icon: Sparkles, title: "Service that feels human", body: "24/7 live support and 4,700+ branches across the country." },
  ];
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="flex flex-col">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg" style={{ background: "var(--gradient-gold)" }}>
                <i.icon className="h-6 w-6 text-gold-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
