import { Metadata } from "next";
import Link from "next/link";
import LoginForm from "@/components/login-form";

export const metadata: Metadata = {
  title: "Login - Troygym Fitness",
  description:
    "Login to your Troygym account to access your dashboard and classes.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12">
      <div className="w-full max-w-md px-4">
        <div className="bg-card border-2 border-border rounded-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">
              Login to your Troygym account
            </p>
          </div>

          <LoginForm />

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-primary font-bold hover:underline"
              >
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <button className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg font-bold hover:bg-secondary/80 transition mb-3">
              Continue with Google
            </button>
            <button className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg font-bold hover:bg-secondary/80 transition">
              Continue with Apple
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          By logging in, you agree to our{" "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
