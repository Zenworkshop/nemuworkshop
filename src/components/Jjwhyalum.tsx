"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import solutiomimg from "../assets/jendelaa.jpg";
import solutiomimg2 from "../assets/jjungkit.jpg";
import solutiomimg3 from "../assets/jsw6.jpg";

const images = [
  {
    src: solutiomimg,
    alt: "partisi kaca aluminium",
  },
  {
    src: solutiomimg2,
    alt: "pintu floorhinge",
  },
  {
    src: solutiomimg3,
    alt: "pintu sliding",
  },
];

const benefits = [
  "Bebas rayap & tidak berkarat",
  "Tahan Lama & Minim Perawatan",
  "Tampilan Modern, cocok untuk rumah minimalis",
  "Material Tidak Mudah Terbakar & Lebih aman untuk Hunian",
];

export default function Jjwhyalum() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="bg-white text-black py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-10">
        {/* Kiri - Teks */}
        <motion.div
          className="w-full md:w-7/12 text-left flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-snug">
            Kenapa Memilih Jendela Aluminium untuk Rumah atau Bangunan Anda?
          </h2>
          <p className="text-lg md:text-xl mt-6 leading-relaxed">
            Jendela aluminium adalah pilihan terbaik untuk hunian modern karena memiliki banyak keunggulan dibandingkan material kayu atau besi. Berikut kelebihan jendela aluminium yang perlu Anda tahu:
          </p>

          <ul className="mt-8 space-y-6">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-4 text-xl font-semibold leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <CheckCircle size={28} className="text-blue-500" />
                {benefit}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Kanan - Gambar */}
        <div className="w-full md:w-5/12 flex flex-col items-center justify-center">
          {/* Gambar utama */}
          <div
            className="relative w-80 h-72 md:w-96 md:h-80 overflow-hidden rounded-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openModal(0)}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail */}
          <div className="flex gap-4 mt-4 w-80 md:w-96">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="basis-1/2 h-20 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => openModal(i)}
              >
                <img
                  src={images[i].src}
                  alt={images[i].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Zoom */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="absolute top-4 right-6 text-white text-3xl font-bold"
          >
            &times;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white text-4xl font-bold"
          >
            &#8592;
          </button>

          <div className="max-w-4xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full max-h-[80vh] object-contain mx-auto rounded-xl"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white text-4xl font-bold"
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
}
