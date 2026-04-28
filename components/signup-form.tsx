"use client";

import { useState } from "react";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { Mail, Lock, User } from "lucide-react";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await login(email, password, name);
      router.push("/dashboard");
    } catch (error) {
      setError("Signup failed. Please try again.");
      console.error("Signup failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-bold text-muted-foreground mb-2">
          Full Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full bg-secondary text-foreground pl-10 pr-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-muted-foreground mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-secondary text-foreground pl-10 pr-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-muted-foreground mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-secondary text-foreground pl-10 pr-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-muted-foreground mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full bg-secondary text-foreground pl-10 pr-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary transition"
          />
        </div>
      </div>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          required
          className="w-4 h-4 rounded border-border"
        />
        <span className="text-sm text-muted-foreground">
          I agree to the terms and conditions
        </span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg font-bold hover:bg-primary/90 transition disabled:opacity-50"
      >
        {loading ? "Creating account..." : "Create Account"}
      </button>
    </form>
  );
}
