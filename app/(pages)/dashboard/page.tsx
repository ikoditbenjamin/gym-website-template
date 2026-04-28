import { Metadata } from "next";
import DashboardClient from "./dashboard-client";

export const metadata: Metadata = {
  title: "Dashboard | Troygym",
  description: "Your personal fitness dashboard at Troygym.",
};

export default function DashboardPage() {
  return <DashboardClient />;
}
