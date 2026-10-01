import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courier Express — Intelligent Shipping & Fulfillment Engine",
  description:
    "Beyond basic courier aggregation. Courier Express combines multicarrier logistics, AI address verification, dynamic RTO prevention, and autonomous buyer engagement into one unified shipping platform.",
};

export default function CourierExpressLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
