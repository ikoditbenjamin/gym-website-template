import { Metadata } from "next";
import Link from "next/link";
import { Check, Star, Play, ChevronRight } from "lucide-react";
import HeroSlider from "@/components/hero-slider";

export const metadata: Metadata = {
  title: "Troygym - Premium Fitness Community",
  description:
    "Transform your fitness journey with expert trainers, diverse classes, and personalized coaching. Join our community today.",
};

const classes = [
  { title: "Yoga Basics",       img: "/home/classes/trainer-2.jpg",     level: "Beginner"     },
  { title: "HIIT Training",     img: "/home/classes/abs-workout.jpg",   level: "Advanced"     },
  { title: "Spinning Elite",    img: "/home/classes/trainer-4.jpg",     level: "Intermediate" },
  { title: "Boxing Power",      img: "/home/classes/trainer-3.jpg",     level: "Advanced"     },
  { title: "Pilates Core",      img: "/home/classes/female-fitness.jpg",level: "Intermediate" },
  { title: "Strength Building", img: "/home/classes/male-fitness.jpg",  level: "Intermediate" },
];

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
      "Personal training (2x/month)",
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
    ],
  },
];

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Member since 2022",
    img: "/home/trainer-1.jpg",
    text: "Troygym completely transformed my fitness journey. The trainers are incredible and the community is so supportive!",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Member since 2023",
    img: "/home/trainer-2.jpg",
    text: "I tried many gyms before, but here I finally see results I didn't think were possible. Best decision I ever made.",
    rating: 5,
  },
];

const partners = ["Nike", "Adidas", "Under Armour", "Reebok", "Puma"];

const workoutItems = [
  "Cardio & Endurance Training",
  "Strength & Muscle Building",
  "Flexibility & Yoga",
  "HIIT & Fat Burning",
  "Boxing & Martial Arts",
  "Nutrition & Recovery Plans",
];

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">

      {/* ══════════════════════════════════════
          1. HERO SLIDER
      ══════════════════════════════════════ */}
      <HeroSlider />

      {/* ══════════════════════════════════════
          2. STATS BAR
      ══════════════════════════════════════ */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { value: "2,500+", label: "Active Members" },
              { value: "12",     label: "Expert Trainers" },
              { value: "50+",    label: "Weekly Classes"  },
              { value: "98%",    label: "Satisfaction Rate" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center py-6 px-4 text-center">
                <span className="text-3xl font-black text-primary leading-none mb-1">{s.value}</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. FOR HER / FOR HIM
      ══════════════════════════════════════ */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {[
          {
            title: "FOR / HER",
            img: "/home/forher.jpg",
            desc: "Strength, tone, and confidence programs designed for women",
          },
          {
            title: "FOR / HIM",
            img: "/home/forhim.jpg",
            desc: "Build muscle and power with high-intensity training",
          },
        ].map((item, i) => (
          <div key={i} className="relative h-80 overflow-hidden group cursor-pointer">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition duration-500" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-wide">{item.title}</h2>
              <p className="text-white/60 text-sm mb-5">{item.desc}</p>
              <Link
                href="/classes"
                className="bg-primary text-white px-6 py-2 font-black text-xs uppercase tracking-widest w-fit hover:bg-primary/80 transition shadow-lg shadow-primary/30"
              >
                READ MORE
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* ══════════════════════════════════════
          4. START WORKOUT ROUTINES
      ══════════════════════════════════════ */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div>
              <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Programs</p>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Start <span className="text-primary">Workout</span> Routines
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
                We offer a wide range of fitness programs tailored to every level. Whether you&apos;re just
                starting out or pushing your limits, our expert coaches are here to guide you every step of the way.
              </p>
              <ul className="space-y-3 mb-10">
                {workoutItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-5 h-5 bg-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="bg-primary text-white px-8 py-3 font-black uppercase text-xs tracking-widest hover:bg-primary/90 transition inline-block shadow-lg shadow-primary/30"
              >
                EXPLORE PROGRAMS
              </Link>
            </div>

            {/* Right — image */}
            <div className="relative h-[480px] overflow-hidden">
              <img
                src="/home/class-training.jpg"
                alt="Workout routines"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. TRAINER BANNER (dark — always)
      ══════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden bg-black">
        {/* bg image */}
        <div className="absolute inset-0">
          <img
            src="home/abs-workout.jpg"
            alt="Trainer"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/10 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-5">Expert Coaching</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase leading-none">
                TRAIN WITH THE<br />
                <span className="text-primary">BEST COACHES</span>
              </h2>
              <p className="text-white/50 mb-8 text-sm leading-relaxed">
                Our certified trainers bring years of experience and passion to every session.
                Personalized plans, real results.
              </p>
              <div className="flex items-center gap-5 flex-wrap">
                <Link
                  href="/about"
                  className="bg-primary text-white px-8 py-3 font-black uppercase text-xs tracking-widest hover:bg-primary/90 transition shadow-lg shadow-primary/30"
                >
                  MEET OUR TEAM
                </Link>
                <button className="flex items-center gap-3 text-white/70 hover:text-primary transition group">
                  <span className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping" />
                    <span className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary transition">
                      <Play className="w-4 h-4 fill-primary group-hover:fill-white transition ml-0.5" />
                    </span>
                  </span>
                  <span className="text-xs uppercase tracking-widest font-bold">Watch Video</span>
                </button>
              </div>
            </div>

            {/* Right — trainer card */}
            <div className="hidden lg:flex justify-end">
              <div className="bg-black/70 border border-white/10 backdrop-blur-sm p-6 w-60">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
                    <img src="/home/trainer-1.jpg" alt="Head Coach" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-black text-white text-sm">John Trainer</p>
                    <p className="text-primary text-[10px] uppercase tracking-wide">Head Coach</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-white/40 text-xs leading-relaxed">
                  &ldquo;Dedicated to helping every member reach their full potential.&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-center">
                  <div>
                    <p className="text-primary font-black text-lg">8+</p>
                    <p className="text-white/30 text-[10px] uppercase">Years Exp.</p>
                  </div>
                  <div>
                    <p className="text-primary font-black text-lg">500+</p>
                    <p className="text-white/30 text-[10px] uppercase">Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide dots */}
          <div className="flex gap-2 mt-10">
            <span className="w-6 h-1.5 bg-primary" />
            <span className="w-2 h-1.5 bg-white/20" />
            <span className="w-2 h-1.5 bg-white/20" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. CLASSES AT ANY LEVEL
      ══════════════════════════════════════ */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-black">
              Some of The <span className="text-primary">Classes</span> At Any Level
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {classes.map((cls, i) => (
              <div key={i} className="relative group overflow-hidden h-52 cursor-pointer">
                <img
                  src={cls.img}
                  alt={cls.title}
                  className="w-full h-full object-cover brightness-[0.45] group-hover:brightness-[0.3] group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition duration-300" />
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="text-primary text-[10px] font-black uppercase tracking-widest mb-1">{cls.level}</span>
                  <h3 className="text-white font-black text-sm uppercase">{cls.title}</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200">
                  <Link
                    href="/classes"
                    className="bg-primary text-white px-5 py-2 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/40"
                  >
                    JOIN CLASS
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/classes"
              className="border border-primary text-primary px-10 py-3 font-black uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition inline-flex items-center gap-2"
            >
              VIEW ALL CLASSES <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. PLAN FOR EVERYONE
      ══════════════════════════════════════ */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        {/* background image tint */}
        <div className="absolute inset-0 pointer-events-none">
          <img src="/male-fitness.jpg" alt="" className="w-full h-full object-cover opacity-5" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Membership</p>
            <h2 className="text-4xl md:text-5xl font-black">
              Plan For <span className="text-primary">Everyone</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative p-8 border transition-all duration-300 ${
                  plan.featured
                    ? "border-primary bg-card md:scale-105 shadow-2xl shadow-primary/20"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                {plan.featured && (
                  <>
                    <div className="absolute -top-px left-0 right-0 h-0.5 bg-primary" />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                      MOST POPULAR
                    </div>
                  </>
                )}
                <h3 className="text-xs font-black mb-4 uppercase tracking-widest text-muted-foreground">{plan.name}</h3>
                <div className="mb-6 flex items-end gap-1">
                  <span className="text-6xl font-black text-primary leading-none">{plan.price}</span>
                  <span className="text-muted-foreground text-sm mb-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-xs text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 font-black uppercase text-xs tracking-widest transition ${
                    plan.featured
                      ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30"
                      : "border border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  GET STARTED
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. PEOPLE BELIEVE OTHER PEOPLE
      ══════════════════════════════════════ */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-black">
              People <span className="text-primary">Believe</span> Other People
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-card border border-border p-8 hover:border-primary/40 transition relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-12 h-0.5 bg-primary" />
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-black text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. CTA BANNER
      ══════════════════════════════════════ */}
      <section className="relative py-14 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/home/hero-athlete.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/70 text-[10px] uppercase tracking-widest mb-1">Limited Time Offer</p>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase">
              Start Your Free Trial Today
            </h2>
          </div>
          <Link
            href="/membership"
            className="bg-white text-primary px-10 py-4 font-black uppercase text-xs tracking-widest hover:bg-white/90 transition whitespace-nowrap shadow-xl flex-shrink-0"
          >
            JOIN NOW — FREE TRIAL
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════
          10. PARTNER LOGOS
      ══════════════════════════════════════ */}
      <section className="py-10 border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-12">
            {partners.map((p, i) => (
              <span
                key={i}
                className="text-xl font-black text-muted-foreground/30 uppercase tracking-[0.2em] hover:text-primary transition cursor-pointer"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
