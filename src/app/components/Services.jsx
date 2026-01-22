"use client";

import { Airplay, Toolbox, Droplets, Repeat, Building } from "lucide-react";

const services = [
  {
    title: "Air Conditioning",
    description: "Best AC service and repair",
    icon: Airplay,
  },
  {
    title: "Tools Service",
    description: "All tools available for maintenance",
    icon: Toolbox,
  },
  {
    title: "Water Leakage",
    description: "Fix all leakage issues",
    icon: Droplets,
  },
  {
    title: "Maintenance",
    description: "Regular maintenance & service",
    icon: Repeat,
  },
  {
    title: "Building Setup",
    description: "Commercial and residential setup",
    icon: Building,
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="border rounded-2xl p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl text-blue-600 mb-4">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
