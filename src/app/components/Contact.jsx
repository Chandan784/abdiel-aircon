"use client";

import { motion } from "framer-motion";
import { PhoneCall, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Contact ABDIEL AIRCON INFRA SOLUTION PVT. LTD. for AC sales,
            installation, repair, AMC & HVAC solutions across Delhi NCR.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Card */}
            {[
              {
                icon: PhoneCall,
                title: "Call Us",
                value: "9899525310",
                link: "tel:9899525310",
              },
              {
                icon: Mail,
                title: "Email Us",
                value: "abdielairconinfrasolution@gmail.com",
                link: "mailto:abdielairconinfrasolution@gmail.com",
              },
              {
                icon: MapPin,
                title: "Head Office",
                value:
                  "M16, M17, Vijay Enclave, Dabri Power House Road, New Delhi",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link || "#"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <item.icon className="text-blue-600" size={26} />
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 mt-1">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full h-[350px] rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              title="ABDIEL AIRCON Location"
              className="w-full h-full border-0"
              loading="lazy"
              src="https://maps.google.com/maps?q=Vijay%20Enclave%20New%20Delhi&output=embed"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
