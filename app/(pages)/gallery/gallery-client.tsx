"use client";

const galleryItems = [
  { img: "/home/hero-athlete.jpg", title: "Elite Training" },
  { img: "/home/classes/male-fitness.jpg", title: "Strength Building" },
  { img: "/home/classes/female-fitness.jpg", title: "Women Empowerment" },
  { img: "/home/abs-workout.jpg", title: "Core Focus" },
  { img: "/home/class-training.jpg", title: "Group Dynamics" },
  { img: "/gallery/success-transformation.jpg", title: "Transformation" },
  { img: "/home/hero-athlete.jpg", title: "Advanced Techniques" },
  { img: "/home/classes/male-fitness.jpg", title: "High Performance" },
  { img: "/home/classes/female-fitness.jpg", title: "Fitness Goals" },
];

export default function GalleryClient() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/20 to-background">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our state-of-the-art facilities, training sessions, and member success stories.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-xl h-64 border-2 border-border hover:border-primary transition cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent flex items-end p-6 group-hover:bg-primary/20 transition">
                  <h3 className="font-black text-xl">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/20 to-primary/10 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">Want to Be Featured?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our community and see yourself featured in our gallery.
          </p>
          <button className="bg-primary text-primary-foreground px-10 py-4 rounded-xl font-black text-lg hover:bg-primary/90 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
            BECOME A MEMBER
          </button>
        </div>
      </section>
    </div>
  );
}
