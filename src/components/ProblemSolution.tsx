"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import keroposimg from "../assets/pintukeropos.jpg";

const problems = [
  "Kusen Kayu Mudah Keropos & Lapuk",
  "Tampilan Kurang Modern dan Sulit Disesuaikan",
  "Biaya Perawatan dan Harga Lebih Mahal",
  "Material Kayu Rentan Terbakar & Tidak Tahan Cuaca",
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

export default function ProblemSolution() {
  return (
    <section className="bg-[#1e3a5f] text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Kiri - Gambar tanpa animasi */}
          <div className="w-full md:basis-4/12 relative">
            <div className="relative rounded-lg overflow-hidden w-80 h-96 mx-auto md:mx-0">
              <img 
                src={keroposimg} 
                alt="pintu keropos" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-black text-white px-4 py-2 text-lg font-bold rounded-md">
                Pintu Keropos
              </div>
            </div>

            <div className="flex gap-4 mt-4 w-80 mx-auto md:mx-0">
              <div className="basis-1/2 h-20 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <img
                  src="https://www.insekta.co.id/wp-content/uploads/2023/09/kayu-rusak.jpg"
                  alt="Kusen Keropos"
                  className="w-full h-full object-cover"
                />
                <div className="bg-black text-white text-sm text-center py-1">Kusen Keropos</div>
              </div>

              <div className="basis-1/2 h-20 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <img
                  src="https://predatorhama.com/wp-content/uploads/2017/12/rayap-kayu-kering.jpg"
                  alt="Jendela Keropos"
                  className="w-full h-full object-cover"
                />
                <div className="bg-black text-white text-sm text-center py-1">Jendela Keropos</div>
              </div>
            </div>
          </div>

          {/* Kanan - Konten dengan animasi */}
          <motion.div
            className="w-full md:basis-8/12 md:pl-12 flex flex-col justify-center h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-base font-semibold text-orange-300 uppercase tracking-wider">
              Permasalahan
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-snug">
              Anda Mengalami Masalah Dengan Kayu?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mt-6 leading-relaxed">
              Berikut adalah beberapa kelemahan kusen kayu yang sering dialami pengguna sebelum beralih ke kusen aluminium modern:
            </p>

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
                  <XCircle size={28} className="text-red-500" />
                  {problem}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
