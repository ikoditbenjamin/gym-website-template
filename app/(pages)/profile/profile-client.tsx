"use client";

import { useAuth } from "@/context/auth-context";
import { redirect } from "next/navigation";
import { User, Shield, LogOut } from "lucide-react";

export default function ProfileClient() {
  const { user, isLoggedIn, logout } = useAuth();

  if (!isLoggedIn) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/20 to-primary/10 py-12 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black mb-2">Your Profile</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-card border-2 border-border rounded-xl p-8 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-black mb-1 capitalize">{user?.name}</h2>
                <p className="text-muted-foreground mb-6">{user?.email}</p>
                <div className="space-y-2">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-1">Member Tier</p>
                    <p className="font-black capitalize text-primary">{user?.membershipTier}</p>
                  </div>
                  <button
                    onClick={logout}
                    className="w-full flex items-center justify-center gap-2 bg-red-500/20 text-red-400 px-4 py-3 rounded-lg font-bold hover:bg-red-500/30 transition"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </div>
            </div>

            {/* Settings */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Account Information */}
                <div className="bg-card border-2 border-border rounded-xl p-8">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Account Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-muted-foreground mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue={user?.name}
                        className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-muted-foreground mb-2">Email Address</label>
                      <input
                        type="email"
                        defaultValue={user?.email}
                        className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary"
                      />
                    </div>
                    <button className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg font-bold hover:bg-primary/90 transition">
                      Update Profile
                    </button>
                  </div>
                </div>

                {/* Security Settings */}
                <div className="bg-card border-2 border-border rounded-xl p-8">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Security Settings
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-muted-foreground mb-2">Current Password</label>
                      <input
                        type="password"
                        placeholder="Enter current password"
                        className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-muted-foreground mb-2">New Password</label>
                      <input
                        type="password"
                        placeholder="Enter new password"
                        className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-muted-foreground mb-2">Confirm Password</label>
                      <input
                        type="password"
                        placeholder="Confirm new password"
                        className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary"
                      />
                    </div>
                    <button className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg font-bold hover:bg-primary/90 transition">
                      Update Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
