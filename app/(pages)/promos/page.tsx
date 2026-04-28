import { Metadata } from "next";
import PromosClient from "./promos-client";

export const metadata: Metadata = {
  title: "Special Offers | Limited Time Promotions | Troygym",
  description:
    "Check out Troygym special offers and limited-time promotions. Save on memberships, personal training, and group classes.",
  keywords: ["promotions", "offers", "discounts", "deals", "gym deals"],
  openGraph: {
    title: "Special Offers | Troygym",
    description: "Limited time promotions and special offers on memberships and services",
    type: "website",
  },
};

export default function PromosPage() {
  return <PromosClient />;
}
