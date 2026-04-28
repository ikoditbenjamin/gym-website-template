import { Metadata } from "next";
import PricingClient from "./pricing-client";

export const metadata: Metadata = {
  title: "Pricing Plans | Troygym",
  description: "Choose the plan that best fits your fitness goals and budget at Troygym.",
};

export default function PricingPage() {
  return <PricingClient />;
}
