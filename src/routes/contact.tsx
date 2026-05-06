import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Bank" },
    { name: "description", content: "Get in touch with Bank — call, email, or visit a branch." },
    { property: "og:title", content: "Contact — Bank" },
    { property: "og:description", content: "Call, email, or visit a branch." },
  ] }),
  component: Page,
});

function Page() {
  return (
    <PageShell eyebrow="Contact" title="We're here to help, day or night" lead="24/7 support by phone, message, or in person at any branch.">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          {[
            { icon: Phone, label: "Phone", value: "1-800-" },
            { icon: Mail, label: "Email", value: "support@northwind.example" },
            { icon: MapPin, label: "HQ", value: "270 Harbor St, Seattle, WA" },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="font-display text-xl text-primary">{c.value}</div>
              </div>
            </div>
          ))}
        </div>
        <form className="space-y-4 rounded-2xl border border-border bg-card p-8" style={{ boxShadow: "var(--shadow-card)" }} onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-ring focus:outline-none" placeholder="First name" />
            <input className="rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-ring focus:outline-none" placeholder="Last name" />
          </div>
          <input className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-ring focus:outline-none" placeholder="Email" />
          <textarea rows={5} className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-ring focus:outline-none" placeholder="How can we help?" />
          <button className="w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">Send message</button>
        </form>
      </div>
    </PageShell>
  );
}
