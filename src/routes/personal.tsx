import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { CreditCard, PiggyBank, Home, Car, GraduationCap, Wallet } from "lucide-react";

export const Route = createFileRoute("/personal")({
  head: () => ({ meta: [
    { title: "Personal Banking — Bank" },
    { name: "description", content: "Checking, savings, credit cards, mortgages and auto loans for everyday life." },
    { property: "og:title", content: "Personal Banking — Bank" },
    { property: "og:description", content: "Checking, savings, credit cards, mortgages and auto loans." },
  ] }),
  component: Page,
});

const products = [
  { icon: Wallet, name: "Checking", desc: "No monthly fees with qualifying activity." },
  { icon: PiggyBank, name: "Savings", desc: "Earn up to 4.50% APY on balances over $5,000." },
  { icon: CreditCard, name: "Credit cards", desc: "Cash back, travel and balance transfer cards." },
  { icon: Home, name: "Mortgages", desc: "Personalized rates and dedicated home advisors." },
  { icon: Car, name: "Auto loans", desc: "Pre-qualify in minutes with no impact to credit." },
  { icon: GraduationCap, name: "Student banking", desc: "Accounts and tools built for college life." },
];

function Page() {
  return (
    <PageShell eyebrow="Personal" title="Banking that fits your life" lead="From your first paycheck to your forever home — our has an account, card, or loan for every step.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div key={p.name} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary">
              <p.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-primary">{p.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            <button className="mt-4 text-sm font-semibold text-gold hover:underline">Learn more →</button>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
