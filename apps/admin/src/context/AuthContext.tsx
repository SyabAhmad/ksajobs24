import { createContext, useContext, useState, type ReactNode } from "react";

type AuthUser = { name: string; email: string; role: string } | null;

type AuthCtx = {
  user: AuthUser;
  signIn: (email: string, password: string) => void;
  signUp: (name: string, email: string, password: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser>(() => {
    const stored = localStorage.getItem("admin_user");
    return stored ? JSON.parse(stored) : null;
  });

  const signIn = (email: string, _password: string) => {
    const u = { name: "Admin", email, role: "admin" };
    localStorage.setItem("admin_user", JSON.stringify(u));
    setUser(u);
  };

  const signUp = (name: string, email: string, _password: string) => {
    const u = { name, email, role: "admin" };
    localStorage.setItem("admin_user", JSON.stringify(u));
    setUser(u);
  };

  const signOut = () => {
    localStorage.removeItem("admin_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
