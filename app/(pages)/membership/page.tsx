import { Metadata } from "next";
import MembershipClient from "./membership-client";

export const metadata: Metadata = {
  title: "Gym Membership Plans | Affordable Fitness | Troygym",
  description:
    "Choose the perfect membership plan at Troygym. Starter, Elite, and Premium plans with flexible options, unlimited classes, and premium facilities.",
  keywords: ["gym membership", "fitness plans", "membership pricing", "gym fees"],
  openGraph: {
    title: "Membership Plans | Troygym",
    description: "Find the perfect membership plan for your fitness goals",
    type: "website",
  },
};

export default function MembershipPage() {
  return <MembershipClient />;
}
