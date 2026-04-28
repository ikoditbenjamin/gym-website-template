"use client";

import { useAuth } from "@/context/auth-context";
import { redirect } from "next/navigation";
import { Calendar, BookOpen, Zap, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DashboardClient() {
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/20 to-primary/10 py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-muted-foreground">Here&apos;s your fitness dashboard</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-card border-2 border-border rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Membership Tier</p>
                  <p className="text-2xl font-black capitalize text-primary">{user?.membershipTier}</p>
                </div>
                <Zap className="w-8 h-8 text-primary/50" />
              </div>
            </div>
            <div className="bg-card border-2 border-border rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Classes Enrolled</p>
                  <p className="text-2xl font-black">{user?.enrolledClasses.length}</p>
                </div>
                <BookOpen className="w-8 h-8 text-primary/50" />
              </div>
            </div>
            <div className="bg-card border-2 border-border rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Next Class</p>
                  <p className="text-2xl font-black">Today</p>
                </div>
                <Calendar className="w-8 h-8 text-primary/50" />
              </div>
            </div>
            <div className="bg-card border-2 border-border rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Goal Progress</p>
                  <p className="text-2xl font-black">65%</p>
                </div>
                <Target className="w-8 h-8 text-primary/50" />
              </div>
            </div>
          </div>

          {/* Main Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Enrolled Classes */}
            <div className="lg:col-span-2">
              <div className="bg-card border-2 border-border rounded-xl p-8">
                <h2 className="text-2xl font-black mb-6">Your Enrolled Classes</h2>
                <div className="space-y-4">
                  {user?.enrolledClasses.length === 0 ? (
                    <p className="text-muted-foreground">No classes enrolled yet.</p>
                  ) : (
                    user?.enrolledClasses.map((classId) => (
                      <div
                        key={classId}
                        className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg"
                      >
                        <div>
                          <p className="font-bold capitalize">{classId.replace("-", " ")}</p>
                          <p className="text-sm text-muted-foreground">Next session: Tomorrow at 9:00 AM</p>
                        </div>
                        <Link
                          href="/classes"
                          className="text-primary font-bold hover:underline flex items-center gap-1"
                        >
                          View <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 rounded-xl p-8">
                <h2 className="text-2xl font-black mb-6">Quick Actions</h2>
                <div className="space-y-3">
                  <Link
                    href="/classes"
                    className="block w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg font-bold hover:bg-primary/90 transition text-center"
                  >
                    Browse Classes
                  </Link>
                  <Link
                    href="/membership"
                    className="block w-full bg-secondary text-foreground px-4 py-3 rounded-lg font-bold hover:bg-secondary/80 transition text-center"
                  >
                    Upgrade Plan
                  </Link>
                  <Link
                    href="/profile"
                    className="block w-full bg-secondary text-foreground px-4 py-3 rounded-lg font-bold hover:bg-secondary/80 transition text-center"
                  >
                    Edit Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
