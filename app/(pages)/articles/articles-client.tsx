"use client";

import { Clock, User } from "lucide-react";

const articles = [
  { title: "Complete Guide to Abs Workout", category: "Training", author: "John Trainer", date: "Mar 15, 2024", readTime: "5 min read" },
  { title: "10 Nutrition Tips for Muscle Growth", category: "Nutrition", author: "Lisa Coach", date: "Mar 12, 2024", readTime: "7 min read" },
  { title: "How to Maximize Your Gym Sessions", category: "Training", author: "Mike Power", date: "Mar 10, 2024", readTime: "6 min read" },
  { title: "Recovery Techniques Every Athlete Needs", category: "Wellness", author: "Sarah Fitness", date: "Mar 8, 2024", readTime: "8 min read" },
  { title: "Building Strength at Any Age", category: "Training", author: "John Trainer", date: "Mar 5, 2024", readTime: "6 min read" },
  { title: "Mental Health & Fitness Connection", category: "Wellness", author: "Lisa Coach", date: "Mar 1, 2024", readTime: "7 min read" },
];

export default function ArticlesClient() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Fitness <span className="text-primary">Articles</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Expert insights, training tips, and wellness advice from our professional team.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <article
                key={i}
                className="group bg-card border-2 border-border rounded-xl overflow-hidden hover:border-primary transition cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border-b border-border">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📚</div>
                    <p className="text-sm text-muted-foreground font-semibold">{article.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black mb-4 group-hover:text-primary transition line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="space-y-3 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{article.date}</p>
                  <button className="mt-6 w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition">
                    READ MORE
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
