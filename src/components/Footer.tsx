import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaTiktok, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Zen Workshop</h3>
            <p className="text-gray-400">
              Kontraktor Spesialis Aluminium dan Kaca di Jabodetabek – Jasa Pembuatan Pintu, Jendela, dan Kusen Aluminium Berkualitas & Terlengkap
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">Profil</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition">Layanan</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition">Portofolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Kontak</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
            <li>
              <a
                href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition"
              >
                <Phone className="w-5 h-5 mr-2" />
                +62 812-4499-7748
              </a>
            </li>
            <li>
              <a
                href="mailto:zenworkshopid@gmail.com"
                className="flex items-center text-gray-400 hover:text-white transition"
              >
                <Mail className="w-5 h-5 mr-2" />
                zenworkshopid@gmail.com
              </a>
            </li>

              <li>
                <a
                  href="https://maps.app.goo.gl/kKFFpca4TbKUL34t9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition"
                >
                  <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                  QM2Q+85 Pd. Kacang Tim., Kota Tangerang Selatan, Banten
                </a>
              </li>

            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.tiktok.com/@zenworkshop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaTiktok className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/zenworkshopid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@zenworkshop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zen Workshop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
