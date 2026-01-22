"use client";

import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo / Company */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold">ABDIEL AIRCON</h2>
            <p className="text-sm text-gray-300">INFRA SOLUTION PVT. LTD.</p>

            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full hover:bg-gray-800">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-gray-800">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-gray-800">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-gray-800">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-white">Air Conditioning</li>
              <li className="hover:text-white">Installation</li>
              <li className="hover:text-white">Maintenance</li>
              <li className="hover:text-white">Repair</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <p className="text-sm text-gray-300">📍 Bhubaneswar, Odisha</p>
            <p className="text-sm text-gray-300 mt-2">📞 +91 12345 67890</p>
            <p className="text-sm text-gray-300 mt-2">
              ✉️ info@abdielaircon.com
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} ABDIEL AIRCON INFRA SOLUTION PVT. LTD. —
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
