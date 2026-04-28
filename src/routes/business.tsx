import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Briefcase, Receipt, Users, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/business")({
  head: () => ({ meta: [
    { title: "Business Banking — Northwind Bank" },
    { name: "description", content: "Business checking, payroll, lending and merchant services for growing companies." },
    { property: "og:title", content: "Business Banking — Northwind Bank" },
    { property: "og:description", content: "Banking and payments built for growing companies." },
  ] }),
  component: Page,
});

const items = [
  { icon: Briefcase, name: "Business checking", desc: "Open in 10 minutes. No monthly fee for 12 months." },
  { icon: Receipt, name: "Merchant services", desc: "Accept cards in person, online and on the go." },
  { icon: Users, name: "Payroll", desc: "Pay your team accurately, on time, every time." },
  { icon: TrendingUp, name: "Lending", desc: "Lines of credit, term loans and SBA solutions." },
];

function Page() {
  return (
    <PageShell eyebrow="Business" title="Run your business with momentum" lead="Banking, payments and lending designed for the realities of running a small or mid-size business.">
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((p) => (
          <div key={p.name} className="rounded-2xl border border-border bg-card p-8" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg" style={{ background: "var(--gradient-gold)" }}>
              <p.icon className="h-5 w-5 text-gold-foreground" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-primary">{p.name}</h3>
            <p className="mt-2 text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
