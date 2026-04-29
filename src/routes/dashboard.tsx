import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuth } from "@/lib/auth";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CreditCard, PiggyBank, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  head: () => ({ meta: [{ title: "Your dashboard — Northwind Bank" }] }),
});

function Dashboard() {
  const { user, signOut } = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    if (user === null) {
      // give AuthProvider a tick to hydrate from localStorage
      const t = setTimeout(() => {
        const raw = typeof window !== "undefined" && localStorage.getItem("nw_user");
        if (!raw) nav({ to: "/signin" });
      }, 50);
      return () => clearTimeout(t);
    }
  }, [user, nav]);

  const accounts = [
    { icon: CreditCard, name: "Everyday Checking", num: "••• 4821", bal: "$3,482.19" },
    { icon: PiggyBank, name: "High-Yield Savings", num: "••• 9930", bal: "$12,750.00" },
    { icon: TrendingUp, name: "Investing", num: "••• 1102", bal: "$48,210.55" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-semibold text-foreground">Welcome, {user?.username || "guest"}</h1>
            <p className="mt-1 text-sm text-muted-foreground">Here's a snapshot of your accounts.</p>
          </div>
          <button onClick={() => { signOut(); nav({ to: "/" }); }} className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary">Sign out</button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {accounts.map((a) => (
            <div key={a.name} className="rounded-xl bg-card p-6" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                  <a.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{a.name}</div>
                  <div className="text-xs text-muted-foreground">{a.num}</div>
                </div>
              </div>
              <div className="mt-6 text-2xl font-display font-semibold text-foreground">{a.bal}</div>
              <div className="mt-1 text-xs text-muted-foreground">Available balance</div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
