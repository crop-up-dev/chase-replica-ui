import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp, CreditCard, Home, Briefcase, PiggyBank, Car, GraduationCap, LineChart, Plane, ChevronRight, ChevronLeft, CalendarCheck, Gauge, Building2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useAuth } from "@/lib/auth";
import { useState } from "react";
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
      <ChooseRight />
      <CardTiles />
      <Promise />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  const { signIn } = useAuth();
  const nav = useNavigate();
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [err, setErr] = useState("");

  const onSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!u.trim() || !p.trim()) {
      setErr("Enter a username and password.");
      return;
    }
    signIn(u.trim());
    nav({ to: "/dashboard" });
  };
  return (
    <section className="relative" style={{ background: "var(--gradient-hero)" }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[1.4fr_0.9fr] lg:gap-12 lg:px-8 lg:py-16">
        {/* Promo card */}
        <div className="flex flex-col justify-center text-primary-foreground lg:flex-row lg:items-center lg:gap-10">
          <div className="hidden shrink-0 overflow-hidden rounded-md bg-card p-5 lg:block" style={{ boxShadow: "var(--shadow-card)" }}>
            <img src={heroImg} alt="Northwind community partner" className="h-56 w-56 rounded object-cover" />
          </div>
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-card/15 px-3 py-1 text-xs font-medium text-primary-foreground">
              <Sparkles className="h-3.5 w-3.5" /> Featured initiative
            </span>
            <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Proud partner of community arts &amp; education.
            </h1>
            <p className="mt-4 max-w-xl text-base text-primary-foreground/85">
              Northwind invests in the people and programs that make our neighborhoods stronger.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-card px-5 py-2.5 text-sm font-semibold text-primary transition hover:brightness-95">
              Learn more
            </button>
          </div>
        </div>

        {/* Sign-in card */}
        <div className="rounded-md bg-card p-6 text-card-foreground sm:p-8" style={{ boxShadow: "var(--shadow-elevated)" }}>
          <h2 className="font-display text-2xl font-semibold text-foreground">Welcome</h2>
          <form className="mt-6 space-y-5" onSubmit={onSignIn}>
            <div>
              <label htmlFor="username" className="block text-xs text-muted-foreground">Username</label>
              <input id="username" type="text" value={u} onChange={(e) => setU(e.target.value)} className="mt-1 w-full border-0 border-b border-border bg-transparent py-2 text-sm outline-none focus:border-primary" />
            </div>
            <div>
              <div className="flex items-end justify-between">
                <label htmlFor="password" className="block text-xs text-muted-foreground">Password</label>
                <button type="button" onClick={() => setShowPwd((v) => !v)} className="text-xs font-semibold text-primary hover:underline">{showPwd ? "Hide" : "Show"}</button>
              </div>
              <input id="password" type={showPwd ? "text" : "password"} value={p} onChange={(e) => setP(e.target.value)} className="mt-1 w-full border-0 border-b border-border bg-transparent py-2 text-sm outline-none focus:border-primary" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 text-foreground/80">
                <input type="checkbox" className="h-4 w-4 rounded border-border" />
                Remember username
              </label>
              <button type="button" className="inline-flex items-center text-primary hover:underline">
                Use token <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            {err && <p className="text-sm text-destructive">{err}</p>}
            <button type="submit" className="w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
              Sign in
            </button>
            <div className="space-y-2 pt-1 text-sm">
              <button type="button" className="inline-flex items-center text-foreground hover:text-primary">
                Forgot username/password? <ChevronRight className="h-4 w-4" />
              </button>
              <br />
              <Link to="/signup" className="inline-flex items-center font-semibold text-foreground hover:text-primary">
                Not enrolled? Sign up now. <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ChooseRight() {
  const items = [
    { icon: Briefcase, label: "Checking accounts" },
    { icon: PiggyBank, label: "Savings & CDs" },
    { icon: CreditCard, label: "Credit cards" },
    { icon: Home, label: "Home loans" },
    { icon: Car, label: "Auto" },
    { icon: LineChart, label: "Investing" },
    { icon: GraduationCap, label: "Education & goals" },
    { icon: Plane, label: "Travel" },
  ];
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Choose what's right for you
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {items.map((it) => (
            <button
              key={it.label}
              className="group flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full text-primary transition group-hover:bg-secondary">
                <it.icon className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <span className="mt-3 text-sm font-medium text-foreground group-hover:text-primary group-hover:underline">
                {it.label}
              </span>
            </button>
          ))}
        </div>
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
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8 border-t border-border">
      <div className="mb-12 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">Built for every chapter</h2>
          <p className="mt-2 text-muted-foreground">From your first card to your forever home.</p>
        </div>
        <Link to="/personal" className="hidden items-center gap-2 text-sm font-medium text-primary hover:underline sm:inline-flex">
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
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">{c.eyebrow}</div>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
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
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <i.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
