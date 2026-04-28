import { Metadata } from "next";
import ClassCard from "@/components/class-card";
import { Users, Clock, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Fitness Classes | Troygym - Yoga, HIIT, Boxing & More",
  description:
    "Join our diverse fitness classes at Troygym. Choose from Yoga, HIIT Training, Spinning, Boxing, Pilates, and Strength Building. Expert instructors, all levels welcome.",
  keywords: [
    "fitness classes",
    "yoga classes",
    "HIIT training",
    "boxing classes",
    "spinning",
    "pilates",
    "fitness Los Angeles",
  ],
  openGraph: {
    title: "Fitness Classes | Troygym",
    description: "Explore expert-led fitness classes for all fitness levels",
    type: "website",
  },
};

const classesData = [
  {
    id: "yoga-basics",
    title: "Yoga Basics",
    image: "/home/classes/trainer-2.jpg",
    instructor: "Sarah Johnson",
    difficulty: "Beginner" as const,
    duration: "60 mins",
    schedule: "Mon, Wed, Fri - 9:00 AM",
    members: 24,
    description:
      "Gentle yoga class perfect for beginners. Focus on flexibility, breathing, and relaxation.",
  },
  {
    id: "hiit-training",
    title: "HIIT Training",
    image: "/home/classes/abs-workout.jpg",
    instructor: "Marcus Stone",
    difficulty: "Advanced" as const,
    duration: "45 mins",
    schedule: "Tue, Thu, Sat - 6:30 PM",
    members: 32,
    description:
      "High-intensity interval training for maximum calorie burn and cardiovascular fitness.",
  },
  {
    id: "spinning-elite",
    title: "Spinning Elite",
    image: "/home/classes/trainer-4.jpg",
    instructor: "Emma Davis",
    difficulty: "Intermediate" as const,
    duration: "50 mins",
    schedule: "Mon, Wed, Fri - 5:30 PM",
    members: 28,
    description:
      "Dynamic indoor cycling class with energetic music and challenging intervals.",
  },
  {
    id: "boxing-power",
    title: "Boxing Power",
    image: "/home/classes/trainer-3.jpg",
    instructor: "James Wilson",
    difficulty: "Advanced" as const,
    duration: "55 mins",
    schedule: "Tue, Thu, Sat - 7:00 PM",
    members: 19,
    description:
      "Intense boxing workout combining technique, power, and endurance training.",
  },
  {
    id: "pilates-core",
    title: "Pilates Core",
    image: "/home/classes/female-fitness.jpg",
    instructor: "Lisa Chen",
    difficulty: "Intermediate" as const,
    duration: "50 mins",
    schedule: "Mon, Wed, Fri - 10:00 AM",
    members: 22,
    description:
      "Strengthen your core with controlled pilates movements and breath work.",
  },
  {
    id: "strength-building",
    title: "Strength Building",
    image: "/home/classes/male-fitness.jpg",
    instructor: "David Lopez",
    difficulty: "Intermediate" as const,
    duration: "60 mins",
    schedule: "Tue, Thu, Sat - 5:00 PM",
    members: 27,
    description:
      "Build muscle and increase strength with resistance training techniques.",
  },
];

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
              Our <span className="text-primary">Classes</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the perfect class for your fitness level and goals. All
              classes are led by certified instructors and designed to challenge
              and inspire.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <p className="text-2xl font-black">{classesData.length}</p>
              <p className="text-sm text-muted-foreground">Classes</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <p className="text-2xl font-black">45-60</p>
              <p className="text-sm text-muted-foreground">Minutes</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <p className="text-2xl font-black">172+</p>
              <p className="text-sm text-muted-foreground">Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classesData.map((cls) => (
              <ClassCard key={cls.id} {...cls} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/20 to-primary/10 py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our community and start your fitness journey today. Sign up for
            a free trial class.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition">
              Book A Free Class
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary/10 transition">
              View Schedule
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
