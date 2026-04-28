import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — Northwind Bank" },
    { name: "description", content: "Our story, values, and the people behind Northwind Bank." },
    { property: "og:title", content: "About — Northwind Bank" },
    { property: "og:description", content: "Our story, values, and the people behind Northwind." },
  ] }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="About" title="A bank built on trust and craft" lead="Founded on the belief that financial services should feel as good as they work.">
      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6 text-lg text-foreground/80">
          <p>Northwind Bank was founded with a simple idea: banking should be clear, helpful, and quietly excellent. We serve more than 12 million customers across all 50 states, with 4,700 branches and a digital experience designed by the people who use it.</p>
          <p>We invest in the communities we serve, in the technology that powers your day, and in the people behind every conversation.</p>
        </div>
        <div className="space-y-6">
          {[["12M+", "Customers"], ["4,700", "Branches"], ["$2.4T", "Assets under care"]].map(([n, l]) => (
            <div key={l} className="rounded-2xl bg-secondary p-6">
              <div className="font-display text-4xl font-semibold text-primary">{n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
