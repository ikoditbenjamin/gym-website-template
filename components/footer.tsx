import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const recentPosts = [
  { title: "Complete Guide to Abs Workout", date: "10 June 2024", img: "/home/classes/abs-workout.jpg" },
  { title: "How to Create a Logo like a Pro", date: "10 June 2024", img: "/home/trainer-1.jpg" },
  { title: "Principles of Coldness", date: "10 June 2024", img: "/home/classes/trainer-3.jpg" },
  { title: "Much Space in World", date: "10 June 2024", img: "/home/class-training.jpg" },
];

const galleryImages = [
  "/home/hero-athlete.jpg",
  "/home/classes/female-fitness.jpg",
  "/home/classes/male-fitness.jpg",
  "/home/classes/trainer-2.jpg",
  "/home/classes/abs-workout.jpg",
  "/home/classes/trainer-4.jpg",
];

const quickLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Classes", "/classes"],
  ["Membership", "/membership"],
  ["Gallery", "/gallery"],
  ["Articles", "/articles"],
  ["Promos", "/promos"],
];

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Background gym image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-athlete.jpg"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/95 via-gray-950/90 to-gray-950" />
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1 — About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-lg">⚡</span>
              </div>
              <span className="font-black text-xl uppercase tracking-wide">Troygym</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              We are dedicated to helping you achieve your fitness goals. Our expert trainers and state-of-the-art facilities are here to support your journey. Fitness is not about being better than someone else.
            </p>
            {/* Contact with red circle icons */}
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/60">
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                </span>
                Wakiso, Uganda Kireka Kamuli

              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </span>
                +256 759 405 095
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-white" />
                </span>
                info@troygym.com
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3.5 h-3.5 text-white" />
                </span>
                Mon – Fri: 6am – 11pm
              </li>
            </ul>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-black uppercase text-sm tracking-widest mb-6 pb-3 border-b border-white/10 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary" />
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/50 text-sm hover:text-primary transition flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/40 group-hover:bg-primary transition flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Recent Posts */}
          <div>
            <h4 className="font-black uppercase text-sm tracking-widest mb-6 pb-3 border-b border-white/10 relative">
              Recent Posts
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary" />
            </h4>
            <ul className="space-y-4">
              {recentPosts.map((post, i) => (
                <li key={i}>
                  <Link href="/articles" className="flex items-center gap-3 group">
                    <div className="w-14 h-14 flex-shrink-0 overflow-hidden">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition"
                      />
                    </div>
                    <div>
                      <p className="text-white/70 text-xs font-semibold leading-snug group-hover:text-primary transition line-clamp-2">
                        {post.title}
                      </p>
                      <p className="text-white/30 text-xs mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.date}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Gallery */}
          <div>
            <h4 className="font-black uppercase text-sm tracking-widest mb-6 pb-3 border-b border-white/10 relative">
              Gallery
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary" />
            </h4>
            <div className="grid grid-cols-3 gap-1.5">
              {galleryImages.map((img, i) => (
                <Link key={i} href="/gallery" className="group overflow-hidden block aspect-square">
                  <img
                    src={img}
                    alt="Gallery"
                    className="w-full h-full object-cover brightness-60 group-hover:brightness-100 group-hover:scale-110 transition duration-300"
                  />
                </Link>
              ))}
            </div>
            {/* Social icons */}
            <div className="flex gap-2 mt-5">
              {[
                { Icon: Facebook, href: "https://facebook.com/troygym" },
                { Icon: Instagram, href: "https://instagram.com/troygym" },
                { Icon: Twitter, href: "https://twitter.com/troygym" },
                { Icon: Youtube, href: "https://youtube.com/troygym" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/40 hover:bg-primary hover:border-primary hover:text-white transition"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © 2026 Troygym. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1 text-white/20 text-xs">
            <Link href="#" className="hover:text-primary transition">Privacy Policy</Link>
            <span className="mx-2">/</span>
            <Link href="/membership" className="hover:text-primary transition">Fitness Programs</Link>
            <span className="mx-2">/</span>
            <Link href="/classes" className="hover:text-primary transition">Classes</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
