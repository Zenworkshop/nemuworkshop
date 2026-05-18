"use client";

import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import floorhinge from "../assets/mezanin2.jpeg";
import partisikacaa from "../assets/railingtangga4.jpeg";
import pintuslidinggg from "../assets/kanopi7.jpeg";
import jendela from "../assets/pagar.jpeg";
import pivot from "../assets/tangga5.jpeg";
import atapkaca from "../assets/kanopi11.jpeg";

const projects = [
  { title: "Pagar Besi", image: jendela },
  { title: "Kanopi", image: pintuslidinggg },
  { title: "Railing Tangga", image: partisikacaa },
  { title: "Tangga Besi", image: pivot },
  { title: "Mezzanine", image: floorhinge },
  { title: "Baja Ringan", image: atapkaca },
];

export default function Catalog() {
  return (
    <section className="bg-[#1A2A41] text-white px-6 md:px-20 py-16">
      {/* Judul */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-orange-400 uppercase">
          Galeri
        </h3>
        <h2 className="text-4xl font-bold">Produk utama kami</h2>
      </div>

      {/* Grid Galeri */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Link to="/gallery" key={index}>
            <motion.div
              className="relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-white text-black px-3 py-1 rounded-md font-semibold text-sm">
                {project.title}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      

      {/* Button Konsultasi Pemasangan */}
      <div className="text-center mt-8 md:mt-12">
        <motion.a
          href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg text-base md:text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            const whatsappLink = "https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F";

            fbq('track', 'Contact');
            gtag('event', 'conversion', {
              send_to: 'AW-17108704615/Njd_CLfTtswaEOe6iN4_',
              value: 1.0,
              currency: 'IDR',
              transaction_id: '',
            });

            window.open(whatsappLink, '_blank');
          }}
        >
          <FaWhatsapp size={20} className="md:size-6" />
          Konsultasi Pemasangan
        </motion.a>
      </div>


     
    </section>
  );
}
