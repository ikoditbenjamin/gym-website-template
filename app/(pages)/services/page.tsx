import { Metadata } from "next";
import ServiceCard from "@/components/service-card";
import { Dumbbell, Heart, Users, Zap, TrendingUp, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Fitness Services | Personal Training, Nutrition & Wellness | Troygym",
  description:
    "Discover comprehensive fitness services at Troygym: personal training, nutrition coaching, recovery & wellness, performance tracking, and expert coaching.",
  keywords: [
    "personal training",
    "nutrition coaching",
    "fitness services",
    "wellness",
    "recovery",
    "gym services",
  ],
  openGraph: {
    title: "Fitness Services | Troygym",
    description: "Complete fitness solutions for all your training needs",
    type: "website",
  },
};

const servicesData = [
  {
    title: "Personal Training",
    description:
      "One-on-one coaching with certified trainers tailored to your specific fitness goals and needs.",
    image: "/services/trainer-9.jpg",
    icon: <Dumbbell className="w-8 h-8" />,
    features: [
      "Custom workout plans",
      "Form correction",
      "Progress tracking",
      "Flexible scheduling",
    ],
    link: "/contact?service=personal-training",
    buttonText: "Book a Session",
  },
  {
    title: "Nutrition Coaching",
    description:
      "Personalized meal plans and nutrition guidance designed to complement your training.",
    image: "/services/gym-facility.jpg",
    icon: <Heart className="w-8 h-8" />,
    features: [
      "Personalized meal plans",
      "Nutrition education",
      "Supplement guidance",
      "Dietary adjustments",
    ],
    link: "/contact?service=nutrition",
    buttonText: "Start Program",
  },
  {
    title: "Group Classes",
    description:
      "Dynamic group fitness classes in various disciplines and intensity levels for all ages.",
    image: "/services/class-training.jpg",
    icon: <Users className="w-8 h-8" />,
    features: ["Yoga & Pilates", "HIIT classes", "Spinning", "Boxing training"],
    link: "/classes",
    buttonText: "View Classes",
  },
  {
    title: "Recovery & Wellness",
    description:
      "Complete wellness services including massage, stretching, and recovery techniques.",
    image: "/services/spa-wellness.jpg",
    icon: <Zap className="w-8 h-8" />,
    features: [
      "Massage therapy",
      "Sauna access",
      "Stretching sessions",
      "Recovery planning",
    ],
    link: "/contact?service=recovery",
    buttonText: "Book Now",
  },
  {
    title: "Performance Tracking",
    description:
      "Advanced metrics and progress monitoring to track your transformation and results.",
    image: "/services/abs-workout.jpg",
    icon: <TrendingUp className="w-8 h-8" />,
    features: [
      "Body composition",
      "Fitness assessments",
      "Progress reports",
      "Goal planning",
    ],
    link: "/contact?service=tracking",
    buttonText: "Get Assessment",
  },
  {
    title: "Expert Coaching",
    description:
      "Guidance from certified and experienced fitness professionals with proven track records.",
    image: "/services/trainer-8.jpg",
    icon: <Award className="w-8 h-8" />,
    features: [
      "Certified trainers",
      "Experience guaranteed",
      "Proven methods",
      "24/7 support",
    ],
    link: "/contact?service=coaching",
    buttonText: "Meet Coaches",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/20 to-background">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-pretty">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive fitness solutions designed to help you achieve your
            goals and transform your life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/20 to-primary/10 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Transform{" "}
            <span className="text-primary">Your Fitness</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of members who have achieved their fitness goals with
            our comprehensive services.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary/90 transition">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
