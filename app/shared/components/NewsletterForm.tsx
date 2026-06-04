"use client";
import { useState } from "react";
import { AppButton } from "./AppButton";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="max-w-lg mx-auto bg-nyt-green/20 border border-nyt-green/30 rounded-xl px-6 py-4 text-center">
        <p className="text-nyt-green font-semibold text-sm">
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
        className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-500
          focus:outline-none focus:ring-2 focus:ring-nyt-green/50 focus:border-nyt-green text-sm"
      />
      <AppButton variant="primary" size="medium" type="submit">
        Subscribe
      </AppButton>
    </form>
  );
}
