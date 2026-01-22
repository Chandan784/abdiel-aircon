"use client";

import { motion } from "framer-motion";
import { PhoneCall, Wrench, Snowflake } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-400 text-white"
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Trusted <span className="text-yellow-300">AC Sales</span> &
            <br /> Service Experts
          </h1>

          <p className="mt-6 text-lg text-blue-100 max-w-xl">
            All Brands AC Sales, Installation, Repair, AMC & Complete HVAC
            Solutions for Home & Commercial Spaces.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:9899525310"
              className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              <PhoneCall size={20} />
              Call Now
            </a>

            <a
              href="#services"
              className="flex items-center gap-2 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition"
            >
              <Wrench size={20} />
              Our Services
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-10 flex gap-6 flex-wrap">
            {[
              { icon: Snowflake, text: "All AC Brands" },
              { icon: Wrench, text: "Expert Technicians" },
              { icon: PhoneCall, text: "24/7 Support" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur"
              >
                <item.icon size={18} />
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center"
        >
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
            alt="AC Service"
            className="w-96 drop-shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
