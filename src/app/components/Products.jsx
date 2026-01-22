"use client";

import { motion } from "framer-motion";
import { Snowflake, Wind, Building2, Factory } from "lucide-react";

export default function Products() {
  const products = [
    {
      icon: Snowflake,
      title: "Split AC",
      desc: "Energy efficient cooling for homes and offices.",
    },
    {
      icon: Wind,
      title: "Window AC",
      desc: "Compact and powerful cooling solutions.",
    },
    {
      icon: Building2,
      title: "Cassette AC",
      desc: "Perfect for commercial & office spaces.",
    },
    {
      icon: Factory,
      title: "VRV / VRF Systems",
      desc: "Advanced HVAC for large infrastructure.",
    },
  ];

  const brands = [
    "LG",
    "Daikin",
    "Voltas",
    "Blue Star",
    "Hitachi",
    "Panasonic",
    "Samsung",
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our <span className="text-blue-600">Products</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Wide range of AC products designed for every space and requirement.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center"
            >
              <item.icon className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Brands */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-center text-xl font-semibold text-gray-800">
            Trusted Brands We Deal With
          </h3>

          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {brands.map((brand, index) => (
              <span
                key={index}
                className="px-6 py-2 bg-white rounded-full shadow text-gray-700 font-medium"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
