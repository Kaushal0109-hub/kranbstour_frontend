"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-paper">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-royal text-paper p-8 sm:p-12 lg:p-16 shadow-card">
          {/* Decorative radial gradients */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-saffron/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-mint/15 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-saffron/20 px-3.5 py-1 text-xs font-bold text-saffron">
              <Sparkles className="h-3.5 w-3.5" /> KranbsTour Travel Dispatch
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-paper leading-tight">
              Get Travel Stories &amp; Secret Tips in Your Inbox
            </h2>

            <p className="text-base sm:text-lg text-paper/80 font-sans leading-relaxed">
              Join 12,000+ conscious travellers receiving our bi-weekly cultural guides, sunrise
              photography maps, and exclusive tour discounts across India.
            </p>

            {submitted ? (
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 text-sm font-semibold text-paper">
                <CheckCircle2 className="h-5 w-5 text-saffron" />
                <span>You&apos;re in! We&apos;ve sent a welcome travel guide to your inbox.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-royal/40" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full rounded-full bg-paper py-3.5 pl-11 pr-4 text-sm text-royal placeholder:text-royal/40 focus:outline-none focus:ring-2 focus:ring-saffron font-sans"
                  />
                </div>
                <Button
                  type="submit"
                  className="rounded-full bg-saffron hover:bg-saffron-deep text-paper font-display text-sm font-bold px-6 py-3.5 shadow-saffron transition-all"
                >
                  <span>Subscribe</span>
                  <Send className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </form>
            )}

            <p className="text-xs text-paper/60 font-sans">
              No spam, ever. Unsubscribe at any time with one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
