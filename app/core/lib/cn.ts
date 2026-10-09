import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge must know our custom font-size tokens (globals.css @theme);
 * otherwise it reads e.g. `text-display-lg` as a text colour and drops it
 * whenever a real colour such as `text-slate-900` follows.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["2xs", "lead", "eyebrow", "display-sm", "display-md", "display-lg", "display-xl", "display-2xl"],
    },
  },
});

/** Merge conditional class names, letting later Tailwind utilities win. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
