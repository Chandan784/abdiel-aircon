"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Gourav Kumar",
    time: "1 week ago",
    review:
      "This company does very good work and their service is also fast, nice work.",
    rating: 5,
  },
  {
    name: "Moim Mohd",
    time: "3 weeks ago",
    review: "Good service",
    rating: 5,
  },
  {
    name: "Santosh loves his mother",
    time: "3 weeks ago",
    review: "New",
    rating: 5,
  },
  {
    name: "Tanya Singh",
    time: "3 weeks ago",
    review: "New",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
          <p className="mt-3 text-gray-600">
            ⭐⭐⭐⭐⭐ Excellent service & genuine products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.time}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{t.review}</p>

              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
