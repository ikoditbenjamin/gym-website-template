import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

export default function TopBanner() {
  return (
    <div className="bg-black/90 border-b border-white/10 text-white/60 text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left side - info */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            Mon – Fri: 9am – 5pm
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Kampala, Uganda
          </span>
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            +256 700 000 000
          </span>
        </div>

        {/* Right side - social links */}
        <div className="flex items-center gap-3">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaFacebook className="w-4 h-4" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            <FaXTwitter className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
