import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/commercial")({
  head: () => ({ meta: [
    { title: "Commercial Banking — Bank" },
    { name: "description", content: "Treasury, capital markets and industry expertise for mid-market and enterprise clients." },
    { property: "og:title", content: "Commercial Banking — Bank" },
    { property: "og:description", content: "Treasury, capital markets and industry expertise." },
  ] }),
  component: Page,
});

const sectors = ["Real Estate", "Healthcare", "Technology", "Manufacturing", "Energy", "Nonprofit"];

function Page() {
  return (
    <PageShell eyebrow="Commercial" title="Industry expertise, delivered locally" lead="Dedicated bankers who know your sector — backed by the resources of a national institution.">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map((s) => (
          <div key={s} className="rounded-xl border border-border bg-card px-6 py-8 text-center transition hover:border-gold">
            <div className="font-display text-xl font-semibold text-primary">{s}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Sector practice</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
