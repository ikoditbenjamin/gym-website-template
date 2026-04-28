import { Metadata } from "next";
import ProfileClient from "./profile-client";

export const metadata: Metadata = {
  title: "Profile | Troygym",
  description: "Manage your Troygym account settings and preferences.",
};

export default function ProfilePage() {
  return <ProfileClient />;
}
