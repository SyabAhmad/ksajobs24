import { createContext, useContext, useState, type ReactNode } from "react";

type AuthUser = { name: string; email: string; role: string } | null;

type AuthCtx = {
  user: AuthUser;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
};

const DEMO_EMAIL = "admin@ksajobs24.com";
const DEMO_PASSWORD = "ksajobs24.com";

const AuthContext = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser>(() => {
    const stored = localStorage.getItem("admin_user");
    return stored ? JSON.parse(stored) : null;
  });

  const signIn = (email: string, password: string) => {
    if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
      throw new Error("Invalid email or password");
    }
    const u = { name: "Admin", email, role: "admin" };
    localStorage.setItem("admin_user", JSON.stringify(u));
    setUser(u);
  };

  const signOut = () => {
    localStorage.removeItem("admin_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
