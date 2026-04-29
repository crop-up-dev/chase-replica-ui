import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Landmark } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/signup")({
  component: SignUp,
  head: () => ({ meta: [{ title: "Sign up — Northwind Bank" }] }),
});

function SignUp() {
  const { signIn } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", username: "", password: "" });
  const [err, setErr] = useState("");

  const upd = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.username || !form.password) {
      setErr("Please fill out all fields.");
      return;
    }
    signIn(form.username);
    nav({ to: "/dashboard" });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto w-full max-w-md px-4 py-16">
        <div className="flex items-center gap-2 mb-8">
          <Landmark className="h-7 w-7 text-primary" />
          <span className="font-display text-2xl font-bold text-primary-deep">NORTHWIND</span>
        </div>
        <h1 className="font-display text-3xl font-semibold text-foreground">Create your account</h1>
        <p className="mt-2 text-sm text-muted-foreground">Demo only — any details are accepted.</p>
        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          {[
            { k: "name", label: "Full name", type: "text" },
            { k: "email", label: "Email", type: "email" },
            { k: "username", label: "Username", type: "text" },
            { k: "password", label: "Password", type: "password" },
          ].map((f) => (
            <div key={f.k}>
              <label className="block text-xs text-muted-foreground">{f.label}</label>
              <input
                value={form[f.k as keyof typeof form]}
                onChange={upd(f.k as keyof typeof form)}
                type={f.type}
                className="mt-1 w-full border-0 border-b border-border bg-transparent py-2 text-sm outline-none focus:border-primary"
              />
            </div>
          ))}
          {err && <p className="text-sm text-destructive">{err}</p>}
          <button type="submit" className="w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110">Create account</button>
          <p className="text-sm text-foreground/80">
            Already enrolled?{" "}
            <Link to="/signin" className="font-semibold text-primary hover:underline">Sign in</Link>
          </p>
        </form>
      </main>
      <SiteFooter />
    </div>
  );
}
