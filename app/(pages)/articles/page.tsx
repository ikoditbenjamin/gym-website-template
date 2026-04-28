import { Metadata } from "next";
import ArticlesClient from "./articles-client";

export const metadata: Metadata = {
  title: "Fitness Blog | Training Tips, Nutrition & Wellness Articles | Troygym",
  description:
    "Read expert fitness articles from Troygym coaches. Learn about training, nutrition, wellness, recovery techniques, and fitness guides.",
  keywords: ["fitness blog", "training tips", "nutrition guide", "fitness articles", "wellness"],
  openGraph: {
    title: "Fitness Blog | Troygym",
    description: "Expert fitness and wellness articles to help you achieve your goals",
    type: "website",
  },
};

export default function ArticlesPage() {
  return <ArticlesClient />;
}
