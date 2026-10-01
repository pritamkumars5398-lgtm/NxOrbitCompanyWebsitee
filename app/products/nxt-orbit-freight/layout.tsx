import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NXT Orbit Freight — Operating System for Global Freight",
  description:
    "The world's first AI-native Operating System for Global Freight. Unify CRM, Operations, Finance, and Customs into one intelligent system of action.",
};

export default function NxtFreightLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
