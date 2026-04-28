"use client";

import { Check, ChevronRight } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$50",
    desc: "Perfect for beginners",
    features: ["Gym access", "Basic equipment", "Community access", "2 classes per week"],
  },
  {
    name: "Elite",
    price: "$60",
    desc: "Popular choice",
    features: [
      "Full gym access",
      "All equipment",
      "Personal trainer consultation",
      "Unlimited classes",
      "Nutrition guide",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$79",
    desc: "Maximum benefits",
    features: [
      "Everything in Elite",
      "Dedicated trainer",
      "Custom meal plans",
      "Recovery services",
      "Private sessions",
    ],
  },
];

export default function PricingClient() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Plan For <span className="text-primary">Everyone</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Choose the plan that best fits your fitness goals and budget.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden transition transform ${
                  plan.highlighted ? "md:scale-105 border-2 border-primary" : "border-2 border-border"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="relative p-8 flex flex-col h-full">
                  <div>
                    <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                    <div className="mb-8">
                      <span className="text-5xl font-black text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className={`w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition ${
                      plan.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border-2 border-primary text-primary hover:bg-primary/10"
                    }`}
                  >
                    GET STARTED <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
