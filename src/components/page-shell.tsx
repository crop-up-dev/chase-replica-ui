import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function PageShell({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section style={{ background: "var(--gradient-hero)" }} className="text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</div>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">{lead}</p>
        </div>
      </section>
      <main className="mx-auto max-w-7xl px-4 py-16 lg:px-8">{children}</main>
      <SiteFooter />
    </div>
  );
}
