"use client";
import { useState } from "react";
import { Button } from "@/app/shared/ui/Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="max-w-lg mx-auto bg-brand-300/15 border border-brand-300/30 rounded-xl px-6 py-4 text-center">
        <p className="text-brand-200 font-semibold text-sm">
          You&apos;re subscribed! We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
        className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-ink-400
          focus:outline-none focus:ring-2 focus:ring-brand-300/50 focus:border-brand-300 text-sm transition-all"
      />
      <Button variant="accent" size="md" type="submit">
        Subscribe
      </Button>
    </form>
  );
}
