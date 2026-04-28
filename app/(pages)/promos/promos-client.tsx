"use client";

import { Gift, Zap, Users, Calendar } from "lucide-react";

const promos = [
  {
    icon: Gift,
    title: "SUMMER SPECIAL",
    description: "Get 50% off on all memberships for the first 3 months",
    validity: "Valid until August 31, 2024",
    badge: "HOT DEAL",
  },
  {
    icon: Users,
    title: "REFER A FRIEND",
    description: "Earn $50 credit for every friend who joins. They get 1 month free!",
    validity: "Year-round program",
    badge: "EARN REWARDS",
  },
  {
    icon: Zap,
    title: "EARLY BIRD PROMO",
    description: "Sign up before 9 AM and get a free personal training session",
    validity: "Mon-Fri only",
    badge: "LIMITED TIME",
  },
  {
    icon: Calendar,
    title: "ANNUAL MEMBERSHIP",
    description: "Pay for 11 months and get 1 month completely free",
    validity: "Valid this month only",
    badge: "SAVE BIG",
  },
];

const currentOffers = [
  {
    title: "30-Day Free Trial",
    desc: "Experience our premium facilities and classes with zero commitment",
    cta: "START FREE TRIAL",
  },
  {
    title: "Bring a Friend Week",
    desc: "Bring a friend and both get 2 free weeks of membership",
    cta: "INVITE FRIEND",
  },
  {
    title: "New Year Transformation",
    desc: "3-month package at a special rate with free nutrition plan",
    cta: "TRANSFORM NOW",
  },
];

export default function PromosClient() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-primary-foreground">
            EXCLUSIVE PROMOS
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Limited-time offers that won&apos;t last long. Join hundreds of satisfied members today!
          </p>
        </div>
      </section>

      {/* Featured Promos Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">Current Promotions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promos.map((promo, i) => {
              const Icon = promo.icon;
              return (
                <div
                  key={i}
                  className="bg-card border-2 border-primary rounded-xl p-8 hover:shadow-lg transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-12 h-12 text-primary" />
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                      {promo.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black mb-2">{promo.title}</h3>
                  <p className="text-muted-foreground mb-4">{promo.description}</p>
                  <p className="text-sm text-muted-foreground italic">{promo.validity}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentOffers.map((offer, i) => (
              <div
                key={i}
                className="bg-card border-2 border-border rounded-xl p-8 text-center hover:border-primary transition"
              >
                <h3 className="text-2xl font-black mb-3">{offer.title}</h3>
                <p className="text-muted-foreground mb-6">{offer.desc}</p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-black hover:bg-primary/90 transition w-full shadow-lg hover:shadow-xl hover:-translate-y-1">
                  {offer.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/70">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4 text-primary-foreground">Never Miss an Offer</h2>
          <p className="text-primary-foreground/90 mb-8">
            Subscribe to our newsletter to get exclusive deals and updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg bg-primary-foreground text-foreground font-semibold placeholder-muted-foreground"
            />
            <button className="bg-foreground text-background px-8 py-3 rounded-lg font-bold hover:bg-primary-foreground transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
