import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() && message.trim()) setSent(true);
  };

  return (
    <section className="border-t border-slate-100 bg-slate-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Have a question or need help? Drop us a message.
          </p>
        </div>

        {sent ? (
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
            <CheckCircle2 className="mx-auto size-10 text-brand-600" />
            <p className="mt-4 text-base font-bold text-brand-800">Message sent!</p>
            <p className="mt-1 text-sm text-brand-600">
              We&rsquo;ll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 max-w-md space-y-4"
          >
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-100">
              <Mail className="size-5 shrink-0 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-100">
              <MessageSquare className="mt-0.5 size-5 shrink-0 text-slate-400" />
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                className="w-full resize-none bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-500"
            >
              <Send className="size-4" />
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
