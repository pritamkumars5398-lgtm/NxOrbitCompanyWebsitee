"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import { EASE } from "@/app/core/motion/tokens";
import { Button } from "@/app/shared/ui/Button";
import { SelectField, TextArea, TextField } from "@/app/shared/ui/Field";

type Status = "idle" | "sending" | "sent";

const BUDGETS = [
  { value: "", label: "Select a range" },
  { value: "under-25k", label: "Under $25,000" },
  { value: "25-75k", label: "$25,000 – $75,000" },
  { value: "75-200k", label: "$75,000 – $200,000" },
  { value: "200k-plus", label: "$200,000+" },
  { value: "unsure", label: "Not sure yet" },
];

const SERVICES = [
  { value: "", label: "What do you need?" },
  { value: "mobile", label: "Mobile app development" },
  { value: "web", label: "Web platform" },
  { value: "ai", label: "AI / ML" },
  { value: "design", label: "Product design" },
  { value: "devops", label: "DevOps & cloud" },
  { value: "other", label: "Something else" },
];

/**
 * Enquiry form.
 *
 * No backend is wired up yet, so submit runs a local pending state and swaps
 * to a confirmation panel. The arithmetic check is a lightweight spam gate
 * that costs a real visitor one second and needs no third-party script.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState<string | undefined>();

  /* A fixed pair, deliberately. Randomising it here would need either an
     impure render or a post-mount state update, and it would buy nothing: any
     check evaluated in the browser can be read straight out of the bundle.
     This is a speed bump for naive bots. When the form gets a real backend,
     the verification has to move server-side along with it. */
  const challenge = { a: 7, b: 4, sum: 11 };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Number(answer) !== challenge.sum) {
      setError("That doesn't add up — please try again.");
      return;
    }

    setError(undefined);
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE.outExpo }}
        role="status"
        className="flex min-h-[28rem] flex-col items-center justify-center gap-5 rounded-3xl border border-hairline bg-surface p-10 text-center"
      >
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-500">
          <Check aria-hidden className="size-6" strokeWidth={2.5} />
        </span>
        <h3 className="text-display-sm">Message sent.</h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-600">
          An engineer will read this and reply within one working day — usually sooner. If it&apos;s
          urgent, call us instead.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-3xl border border-hairline bg-surface p-7 shadow-sm sm:p-9"
    >
      <div className="flex flex-col gap-1 border-b border-hairline pb-6">
        <h2 className="text-display-sm">Tell us about the project</h2>
        <p className="text-sm text-ink-500">
          The more context you give, the more useful our first reply will be.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Full name" name="name" placeholder="Priya Sharma" required autoComplete="name" />
        <TextField
          label="Work email"
          name="email"
          type="email"
          placeholder="priya@company.com"
          required
          autoComplete="email"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          autoComplete="tel"
        />
        <TextField label="Company" name="company" placeholder="Company name" autoComplete="organization" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField label="Service" name="service" options={SERVICES} required />
        <SelectField label="Budget" name="budget" options={BUDGETS} hint="Helps us scope realistically." />
      </div>

      <TextArea
        label="What are you building?"
        name="message"
        required
        rows={5}
        placeholder="The problem, who it's for, and where you are today."
      />

      <div className="flex flex-col gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-end sm:justify-between">
        <TextField
          label={`Quick check: ${challenge.a} + ${challenge.b} =`}
          name="verification"
          inputMode="numeric"
          required
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          error={error}
          className="sm:max-w-[13rem]"
        />

        <Button type="submit" size="lg" loading={status === "sending"} withArrow>
          {status === "sending" ? "Sending" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
