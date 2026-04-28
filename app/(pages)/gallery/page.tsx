import { Metadata } from "next";
import GalleryClient from "./gallery-client";

export const metadata: Metadata = {
  title: "Gallery | Member Transformations & Facility Photos | Troygym",
  description:
    "View Troygym member transformations and facility photos. See the results our community achieves with expert training and support.",
  keywords: ["gym gallery", "transformations", "member photos", "facility", "success stories"],
  openGraph: {
    title: "Gallery | Troygym",
    description: "Inspiring member transformations and facility showcase",
    type: "website",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
