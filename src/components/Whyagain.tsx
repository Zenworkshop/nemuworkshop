"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, LayoutGrid, Warehouse } from "lucide-react";
import keroposimg from "../assets/pagarduma8.jpeg";

const problems = [
  "Tim Profesional",
  "Kualitas Premium",
  "Harga Kompetitif",
  "Garansi 6 bulan",
];

const stats = [
  { icon: <Users size={48} className="text-blue-500" />, value: "23+", label: "Professional Team" },
  { icon: <LayoutGrid size={48} className="text-blue-500" />, value: "440+", label: "Projects Completed" },
  { icon: <Warehouse size={48} className="text-blue-500" />, value: "3+", label: "Workshop Warehouse" },
];

const listContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

export default function Whyagain() {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Kiri - Gambar */}
          <div className="w-full md:basis-4/12 relative mb-8 md:mb-0">
            <div className="relative rounded-lg overflow-hidden w-80 h-96 md:w-[28rem] md:h-[32rem] mx-auto md:mx-0">
              <img 
                src={keroposimg} 
                alt="Mengapa pilih kami" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Kanan - Konten */}
          <motion.div
            className="w-full md:basis-8/12 md:pl-12 flex flex-col justify-center h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-snug">
              Mengapa pilih kami?
            </h2>

            {/* List Keunggulan */}
            <motion.ul
              className="mt-8 space-y-6"
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-4 text-xl font-semibold leading-relaxed"
                  variants={listItem}
                >
                  <CheckCircle size={28} className="text-blue-500" />
                  {problem}
                </motion.li>
              ))}
            </motion.ul>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  {stat.icon}
                  <h2 className="text-3xl font-bold mt-2 text-gray-900">{stat.value}</h2>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
