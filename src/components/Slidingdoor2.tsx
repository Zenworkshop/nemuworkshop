"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const jenisJendela = [
  {
    title: "Hemat Ruang dan Fleksibel",
    content: `Pintu sliding aluminium membuka secara horizontal tanpa perlu ruang tambahan untuk bukaan. Sangat cocok untuk area yang terbatas seperti ruang keluarga, balkon, dan area servis. Anda bisa mengoptimalkan setiap sudut ruangan tanpa terganggu bukaan pintu.`,
  },
  {
    title: "Tampilan Modern dan Elegan",
    content: `Aluminium dikenal sebagai material yang kuat namun ringan, sehingga sangat cocok dipadukan dengan kaca untuk menciptakan kesan elegan dan terang. Pintu sliding aluminium membantu menghadirkan pencahayaan alami ke dalam ruangan dan memberikan tampilan bersih dan minimalis.`,
  },
  {
    title: "Tahan Lama dan Anti Karat",
    content: `Berbeda dengan kayu, pintu aluminium tahan terhadap perubahan cuaca, tidak mudah berkarat, dan bebas rayap. Perawatannya pun mudah, cukup dibersihkan secara berkala untuk menjaga kilap dan performanya.`,
  },
  {
    title: "Meningkatkan Nilai Estetika dan Fungsional",
    content: `Dengan pilihan warna dan finishing yang beragam, pintu sliding aluminium bisa disesuaikan dengan konsep interior dan eksterior. Baik untuk hunian modern, industrial, hingga tropical, pintu ini memberikan sentuhan premium dan fungsionalitas tinggi.`,
  },
  {
    title: "Investasi Jangka Panjang",
    content: `Pintu aluminium sliding adalah pilihan cerdas. Umurnya yang panjang dan perawatan yang minim membuat biaya kepemilikan jauh lebih ekonomis dibanding material lain. Selain itu, aluminium merupakan material ramah lingkungan dan dapat didaur ulang.`,
  },
];

export default function Jjchoice() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-gray-900">
      <div className="pt-24 md:pt-32 pb-16 px-4 md:px-6 lg:px-12 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Kenapa Memilih Pintu Sliding Aluminium?</h2>
        <p className="text-lg md:text-xl mb-10 text-gray-600">Pintu sliding aluminium menjadi solusi favorit bagi banyak pemilik rumah dan bangunan komersial. Desainnya yang modern dan fungsional membuatnya sangat diminati, terutama untuk hunian minimalis hingga properti premium. Berikut adalah alasan utama memilih pintu geser aluminium untuk rumah Anda:</p>

        <div className="text-left space-y-6">
          {jenisJendela.map((item, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left p-5 text-lg font-semibold hover:bg-gray-100 transition"
              >
                {item.title}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="p-5 text-gray-700 space-y-6 bg-white border-t border-gray-200"
                  >
                    <p>{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
