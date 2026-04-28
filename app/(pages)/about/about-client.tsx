"use client";

import { Users, Award, Dumbbell } from "lucide-react";

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            About <span className="text-primary">Troygym</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Learn about our mission, team, and commitment to fitness excellence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Troygym, we believe fitness is more than just physical
                transformation. It&apos;s about building confidence, resilience,
                and a community of like-minded individuals committed to
                excellence.
              </p>
              <p className="text-lg text-muted-foreground">
                Since our founding, we&apos;ve helped thousands of members
                achieve their fitness goals through expert coaching,
                state-of-the-art equipment, and an inspiring community
                environment.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-primary/30">
              <img
                src="/about/class-training.jpg"
                alt="Our gym community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
            Why Choose <span className="text-primary">Troygym?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Dumbbell,
                title: "Expert Coaching",
                desc: "Certified trainers with years of experience guiding you every step of the way.",
              },
              {
                icon: Users,
                title: "Supportive Community",
                desc: "Join a community of fitness enthusiasts motivated to achieve their goals.",
              },
              {
                icon: Award,
                title: "Proven Results",
                desc: "Thousands of successful transformations from our proven methods.",
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="bg-card border-2 border-border rounded-xl p-8 hover:border-primary transition"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-black mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "John Trainer", role: "Head Coach", image: "/home/trainer-1.jpg" },
              { name: "Sarah Fitness", role: "Program Director", image: "/home/classes/trainer-2.jpg" },
              { name: "Mike Power", role: "Senior Trainer", image: "/home/classes/trainer-3.jpg" },
              { name: "Lisa Coach", role: "Nutrition Specialist", image: "/home/classes/trainer-4.jpg" },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-full aspect-square rounded-xl mb-4 overflow-hidden border-2 border-primary/20 hover:border-primary transition">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-black text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground text-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
