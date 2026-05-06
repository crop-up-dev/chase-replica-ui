import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Landmark } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/signin")({
  component: SignIn,
  head: () => ({ meta: [{ title: "Sign in — Bank" }] }),
});

function SignIn() {
  const { signIn } = useAuth();
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setErr("Please enter a username and password.");
      return;
    }
    signIn(username.trim());
    nav({ to: "/dashboard" });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto w-full max-w-md px-4 py-16">
        <div className="flex items-center gap-2 mb-8">
          <Landmark className="h-7 w-7 text-primary" />
          <span className="font-display text-2xl font-bold text-primary-deep"></span>
        </div>
        <h1 className="font-display text-3xl font-semibold text-foreground">Welcome back</h1>
        <p className="mt-2 text-sm text-muted-foreground">Sign in with any credentials — this is a demo.</p>
        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block text-xs text-muted-foreground">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 w-full border-0 border-b border-border bg-transparent py-2 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <div className="flex items-end justify-between">
              <label className="block text-xs text-muted-foreground">Password</label>
              <button type="button" onClick={() => setShow(!show)} className="text-xs font-semibold text-primary hover:underline">{show ? "Hide" : "Show"}</button>
            </div>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type={show ? "text" : "password"} className="mt-1 w-full border-0 border-b border-border bg-transparent py-2 text-sm outline-none focus:border-primary" />
          </div>
          {err && <p className="text-sm text-destructive">{err}</p>}
          <button type="submit" className="w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110">Sign in</button>
          <p className="text-sm text-foreground/80">
            Not enrolled?{" "}
            <Link to="/signup" className="font-semibold text-primary hover:underline">Sign up now</Link>
          </p>
        </form>
      </main>
      <SiteFooter />
    </div>
  );
}
