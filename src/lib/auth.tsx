import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type User = { username: string };
type AuthCtx = {
  user: User | null;
  signIn: (username: string) => void;
  signOut: () => void;
};

const Ctx = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem("nw_user");
    if (raw) {
      try { setUser(JSON.parse(raw)); } catch { /* noop */ }
    }
  }, []);

  const signIn = (username: string) => {
    const u = { username };
    setUser(u);
    if (typeof window !== "undefined") localStorage.setItem("nw_user", JSON.stringify(u));
  };
  const signOut = () => {
    setUser(null);
    if (typeof window !== "undefined") localStorage.removeItem("nw_user");
  };

  return <Ctx.Provider value={{ user, signIn, signOut }}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAuth must be used within AuthProvider");
  return c;
}
