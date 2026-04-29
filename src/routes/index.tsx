import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ShieldCheck, Sparkles, TrendingUp, CreditCard, Home, Briefcase, PiggyBank, Car, GraduationCap, LineChart, Plane, ChevronRight, ChevronLeft, CalendarCheck, Gauge, Building2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useAuth } from "@/lib/auth";
import { useState } from "react";
import heroImg from "@/assets/hero-couple.jpg";
import payImg from "@/assets/accept-payments.jpg";

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
      <PaymentsRow />
      <InvestPromo />
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
  const slides = [
    [
      { icon: Briefcase, label: "Checking" },
      { icon: PiggyBank, label: "Savings & CDs" },
      { icon: CreditCard, label: "Credit cards" },
      { icon: Home, label: "Home loans" },
      { icon: GraduationCap, label: "Education" },
      { icon: Plane, label: "Travel" },
    ],
    [
      { icon: Car, label: "Auto" },
      { icon: LineChart, label: "Investments" },
      { icon: Building2, label: "Commercial" },
      { icon: CalendarCheck, label: "Schedule a meeting" },
      { icon: Gauge, label: "Free credit score" },
      { icon: Briefcase, label: "Business" },
    ],
  ];
  const [idx, setIdx] = useState(0);
  const items = slides[idx];
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Choose what's right for you
        </h2>
        <div className="mt-10 grid grid-cols-3 gap-6 sm:grid-cols-6">
          {items.map((it) => (
            <button key={it.label} className="group flex flex-col items-center text-center">
              <it.icon className="h-10 w-10 text-foreground/80 transition group-hover:text-primary" strokeWidth={1.25} />
              <span className="mt-3 text-sm font-medium text-primary group-hover:underline">
                {it.label}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-4 text-primary">
          <button onClick={() => setIdx((i) => (i - 1 + slides.length) % slides.length)} aria-label="Previous">
            <ChevronLeft className="h-5 w-5" />
          </button>
          {slides.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`} className={`h-3 w-3 rounded-full border border-primary ${i === idx ? "bg-primary" : "bg-transparent"}`} />
          ))}
          <button onClick={() => setIdx((i) => (i + 1) % slides.length)} aria-label="Next">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function CardTiles() {
  const cards = [
    {
      tone: "light" as const,
      brand: "Northwind Credit Cards",
      icon: CreditCard,
      title: "See if you're preapproved",
      body: "Find which Northwind credit cards you may be preapproved for in just a few moments. Plus, there's no impact to your credit score.",
      cta: "Get started",
    },
    {
      tone: "dark" as const,
      brand: "Northwind Horizon Rewards®",
      icon: CreditCard,
      title: "Earn 75,000 bonus points",
      body: "Plus, earn 5x total points on Northwind Travel℠, 3x points on dining, 2x points on all other travel purchases, and more. Terms apply.",
      cta: "See details",
    },
    {
      tone: "light" as const,
      brand: "Northwind Auto",
      icon: Car,
      title: "Get prequalified in seconds",
      body: "Learn how much you can borrow with no impact on your credit score.",
      cta: "Get prequalified",
    },
  ];
  return (
    <section className="bg-background pb-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-3 lg:px-8">
        {cards.map((c) => {
          const isDark = c.tone === "dark";
          return (
            <article key={c.title} className="overflow-hidden rounded-md bg-card" style={{ boxShadow: "var(--shadow-card)" }}>
              <div
                className="flex items-start justify-between gap-4 p-6"
                style={{
                  background: isDark
                    ? "linear-gradient(135deg, oklch(0.28 0.12 258), oklch(0.22 0.1 258))"
                    : "var(--color-primary)",
                  color: "var(--color-primary-foreground)",
                  minHeight: "140px",
                }}
              >
                <h3 className="font-display text-2xl font-semibold leading-tight">{c.brand}</h3>
                <c.icon className="h-10 w-10 shrink-0 opacity-90" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col p-6">
                <h4 className="font-display text-xl font-semibold text-foreground">{c.title}</h4>
                <p className="mt-3 text-sm text-muted-foreground">{c.body}</p>
                <button className="mt-6 self-start rounded-sm bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
                  {c.cta}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Promise() {
  return PromiseSection();
}

function PaymentsRow() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="overflow-hidden rounded-md">
          <img src={payImg} alt="Merchant accepting a contactless card payment" loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">Accept payments anytime, anywhere</h2>
          <p className="mt-4 text-base text-muted-foreground">
            Make sure you're prepared for every sale, wherever your customers want to pay. Process credit cards anywhere in the U.S.
          </p>
          <button className="mt-6 rounded-sm bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}

function InvestPromo() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">Commission-free online trades — plus a bonus</h2>
          <p className="mt-4 text-base text-muted-foreground">
            This is an invitation to get up to $1,000 when you open and fund a Northwind Self-Directed Investing account — an investing experience that puts you in control.
          </p>
          <button className="mt-6 rounded-sm bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
            Continue
          </button>
        </div>
        <div className="flex aspect-[4/3] items-center justify-center rounded-md bg-secondary p-10 text-center">
          <div>
            <p className="font-display text-2xl text-foreground/80 sm:text-3xl">Earn up to</p>
            <p className="mt-2 font-display text-6xl font-semibold tracking-tight text-foreground sm:text-7xl">$1,000</p>
            <p className="mt-2 font-display text-2xl text-foreground/80 sm:text-3xl">cash bonus</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PromiseSection() {
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
