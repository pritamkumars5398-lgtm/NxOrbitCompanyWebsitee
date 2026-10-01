import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NXT WMS — Autonomous Warehouse Management System",
  description:
    "Next-generation Warehouse Management System (WMS) built for multi-warehouse orchestration, real-time telemetry, and yield optimization.",
};

export default function NxtWmsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
