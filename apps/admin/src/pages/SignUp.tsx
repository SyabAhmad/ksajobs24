import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";

export default function SignUp() {
  const { signUp } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signUp(name, email, password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-white">KSA Jobs<span className="text-gold-400">Admin</span></h1>
          <p className="mt-2 text-sm text-brand-200/70">Create your admin account</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="rounded-xl bg-white/10 p-1 ring-1 ring-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 rounded-lg bg-white px-4 py-3">
              <User className="size-5 text-slate-400" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>

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
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-brand-200/60">
          Already have an account?{" "}
          <Link to="/signin" className="font-bold text-gold-400 hover:text-gold-300">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
