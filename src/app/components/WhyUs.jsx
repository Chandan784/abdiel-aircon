"use client";

import { Users, Shield, Tag, Star } from "lucide-react";

const reasons = [
  {
    title: "Exceptional Staff",
    desc: "Highly trained team with fast and reliable service.",
    icon: Users,
  },
  {
    title: "Premium Quality",
    desc: "Top quality materials and workmanship for long-lasting results.",
    icon: Shield,
  },
  {
    title: "Affordable Pricing",
    desc: "Competitive pricing without compromising on quality.",
    icon: Tag,
  },
  {
    title: "High Industry Standards",
    desc: "We follow strict safety and quality standards in every project.",
    icon: Star,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
          <p className="mt-3 text-gray-600">
            We deliver premium service with professionalism and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
