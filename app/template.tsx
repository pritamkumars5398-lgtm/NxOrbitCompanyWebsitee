import { PageTransition } from "@/app/shared/layout/PageTransition";

/**
 * Next remounts this on every route change (see `template.js` conventions),
 * which is what gives each page its enter animation.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
