import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
  link: string;
  buttonText?: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  icon,
  features,
  link,
  buttonText = "Learn More",
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border-2 border-border hover:border-primary transition-all duration-300">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Icon & Title */}
        <div className="flex items-start gap-3 mb-4">
          <div className="text-primary text-3xl">{icon}</div>
          <h3 className="font-black text-xl group-hover:text-primary transition">
            {title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        {/* Features List */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href={link}
          className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-primary/90 transition shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
