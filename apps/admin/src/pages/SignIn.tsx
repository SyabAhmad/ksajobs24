import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";

export default function SignIn() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      signIn(email, password);
      navigate("/dashboard");
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-white">KSA Jobs<span className="text-gold-400">Admin</span></h1>
          <p className="mt-2 text-sm text-brand-200/70">Sign in to your admin dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {error && (
            <div className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-300 ring-1 ring-red-500/20">
              <AlertCircle className="size-4 shrink-0" />
              {error}
            </div>
          )}

          <div className="rounded-xl bg-white/10 p-1 ring-1 ring-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 rounded-lg bg-white px-4 py-3">
              <Mail className="size-5 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="rounded-xl bg-white/10 p-1 ring-1 ring-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 rounded-lg bg-white px-4 py-3">
              <Lock className="size-5 text-slate-400" />
              <input
                type={showPw ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
              <button type="button" onClick={() => setShowPw((v) => !v)} className="text-slate-400 hover:text-slate-600">
                {showPw ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-brand-600 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-500"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-brand-200/40">
          Demo: admin@ksajobs24.com / ksajobs24.com
        </p>
      </div>
    </div>
  );
}
