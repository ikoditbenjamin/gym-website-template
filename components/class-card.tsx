import Link from "next/link";
import { Clock, Users, ArrowRight } from "lucide-react";

interface ClassCardProps {
  id: string;
  title: string;
  image: string;
  instructor: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  schedule: string;
  enrolled?: boolean;
  members: number;
  description: string;
}

export default function ClassCard({
  id,
  title,
  image,
  instructor,
  difficulty,
  duration,
  schedule,
  enrolled = false,
  members,
  description,
}: ClassCardProps) {
  const difficultyColor = {
    Beginner: "bg-green-500/20 text-green-400",
    Intermediate: "bg-yellow-500/20 text-yellow-400",
    Advanced: "bg-red-500/20 text-red-400",
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border-2 border-border hover:border-primary transition-all duration-300 h-full">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 right-4 flex gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${difficultyColor[difficulty]}`}
          >
            {difficulty}
          </span>
          {enrolled && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/30 text-primary">
              Enrolled
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-[calc(100%-14rem)]">
        <div className="flex-grow">
          <h3 className="font-black text-xl mb-2 group-hover:text-primary transition">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>

          {/* Trainer Info */}
          <div className="mb-4 pb-4 border-b border-border">
            <p className="text-xs text-muted-foreground mb-1">Instructor</p>
            <p className="font-bold text-primary">{instructor}</p>
          </div>

          {/* Class Details */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>
                {duration} • {schedule}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4 text-primary" />
              <span>{members} members</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href={enrolled ? `/classes/${id}` : `/classes/${id}?action=enroll`}
          className="mt-6 w-full bg-primary text-primary-foreground px-4 py-3 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-primary/90 transition shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          {enrolled ? "View Class Details" : "Enroll Now"}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
