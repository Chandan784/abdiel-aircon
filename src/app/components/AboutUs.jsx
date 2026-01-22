"use client";

import { motion } from "framer-motion";
import { Building2, Award, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900">
            About <span className="text-blue-600">ABDIEL AIRCON</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            <strong>ABDIEL AIRCON INFRA SOLUTION PVT. LTD.</strong> is a trusted
            name in AC sales and HVAC services across <strong>Delhi NCR</strong>
            . We deliver reliable cooling solutions for residential, commercial,
            and industrial spaces with certified professionals.
          </p>

          <p className="mt-4 text-gray-600">
            Our expertise covers all major AC brands, ensuring energy-efficient,
            long-lasting, and cost-effective solutions backed by professional
            service and transparent pricing.
          </p>

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Certified Experts",
                desc: "Trained & verified technicians",
              },
              {
                icon: Building2,
                title: "All Brands",
                desc: "Sales & service support",
              },
              {
                icon: Users,
                title: "Trusted Clients",
                desc: "Homes & businesses",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-5 rounded-xl border hover:shadow-lg transition"
              >
                <item.icon className="text-blue-600 mb-3" size={28} />
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="https://media.istockphoto.com/id/2211719481/photo/technician-with-screwdriver-repairing-air-conditioner-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=jgXsFwah9TmgEV1m6MXRy3_BqpA0V6zJ5q4AkWw4vM4="
            alt="AC Service Team"
            className="rounded-2xl shadow-xl"
          />

          <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white px-6 py-4 rounded-xl shadow-lg">
            <p className="text-2xl font-bold">10+</p>
            <p className="text-sm">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
