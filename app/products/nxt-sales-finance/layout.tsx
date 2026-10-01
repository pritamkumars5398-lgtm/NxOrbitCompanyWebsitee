import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NXT Sales & Finance — Core Financial & Accounts Platform",
  description:
    "Decoupled core financial accounting and pipeline control engine for modern enterprise logistics and distribution businesses.",
};

export default function NxtSalesFinanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
