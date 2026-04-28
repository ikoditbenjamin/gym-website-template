import { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About Troygym | Our Mission, Values & Expert Team",
  description:
    "Learn about Troygym fitness community. Our mission is to transform lives through expert training, state-of-the-art facilities, and a supportive community.",
  keywords: ["about us", "fitness community", "gym", "fitness coaches", "mission"],
  openGraph: {
    title: "About Troygym",
    description: "Discover our mission to transform your fitness journey",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
