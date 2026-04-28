"use client";

import { Check } from "lucide-react";

const plans = [
  {
    name: "STARTER",
    price: "$50",
    period: "/month",
    features: [
      "Access to gym equipment",
      "Basic classes (2x per week)",
      "Member community access",
      "Fitness assessment",
    ],
  },
  {
    name: "ELITE",
    price: "$60",
    period: "/month",
    featured: true,
    features: [
      "Unlimited gym access",
      "All group classes included",
      "Personal training (2x per month)",
      "Nutrition consultation",
      "Progress tracking",
      "Priority booking",
    ],
  },
  {
    name: "PREMIUM",
    price: "$79",
    period: "/month",
    features: [
      "All Elite benefits",
      "Unlimited personal training",
      "One-on-one nutrition coaching",
      "Performance testing",
      "Private training studio",
      "Exclusive member events",
      "Premium merchandise",
    ],
  },
];

export default function MembershipClient() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/20 to-background">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Membership & Fees</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Choose the perfect plan for your fitness journey and start transforming today.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-xl p-8 border-2 transition ${
                  plan.featured
                    ? "border-primary bg-primary/5 transform md:scale-105"
                    : "border-border bg-card hover:border-primary"
                }`}
              >
                <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <button
                  className={`w-full py-3 rounded-xl font-black mb-8 transition shadow-lg hover:shadow-xl hover:-translate-y-1 ${
                    plan.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-foreground hover:bg-secondary/90"
                  }`}
                >
                  GET STARTED
                </button>
                <div className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8">Additional Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">No Long-Term Contracts</h3>
              <p className="text-muted-foreground">
                Cancel anytime without penalties. Your commitment to your fitness journey is our priority.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">First Month Free</h3>
              <p className="text-muted-foreground">
                Try any membership plan with no cost for the first month. Experience our world-class facilities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Corporate Rates</h3>
              <p className="text-muted-foreground">
                Special pricing available for corporate teams and group memberships.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Money-Back Guarantee</h3>
              <p className="text-muted-foreground">
                Not satisfied? Get a full refund within 30 days of purchase.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
