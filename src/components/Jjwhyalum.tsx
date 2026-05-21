"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import solutiomimg from "../assets/pagar.jpeg";
import solutiomimg2 from "../assets/pagar1.jpeg";
import solutiomimg3 from "../assets/pagarduma.jpeg";

const images = [
  {
    src: solutiomimg,
    alt: "pagar minimalis",
  },
  {
    src: solutiomimg2,
    alt: "pagar besi rumah",
  },
  {
    src: solutiomimg3,
    alt: "pagar sliding wpc",
  },
];

const benefits = [
  "Rumah terasa kurang aman?",
  "Pagar lama sudah berkarat?",
  "Bingung cari tukang pagar yang rapi?",
  "Takut hasil pagar tidak sesuai ekspektasi?",
  "Ingin pagar modern untuk rumah minimalis?",
];

export default function Jjwhyalum() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const itemVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section className="bg-white text-black py-16">

      {/* SECTION PERTAMA */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-stretch gap-10">

        {/* Kiri - Teks */}
        <motion.div
          className="w-full md:w-7/12 text-left flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-snug">
            Rumah Jadi Kurang Nyaman Karena Pagar Lama?
          </h2>

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

      {/* CTA SECTION */}
      <motion.div
        className="mt-16 bg-[#1e3a5f]/80 text-white py-12 px-6 md:px-20 text-center shadow-lg w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariant}
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-lg md:text-xl font-semibold text-white leading-relaxed">
            Tenang, NEMU Workshop siap bantu wujudkan pagar rumah yang lebih aman, kuat, dan estetik.
            <br /><br />

            Mulai dari pagar minimalis, sliding, perforated, hingga custom sesuai desain rumah Anda —
            semua dikerjakan rapi dan presisi oleh tim berpengalaman. Konsultasi gratis sekarang dan temukan model pagar yang paling cocok untuk rumah Anda.
          </p>

          <div className="mt-6 flex justify-center">
            <motion.a
              href="https://wa.me/6281244997748?text=Halo%20NEMU%20Workshop,%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20pagar%20dan%20konstruksi%20besi."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit px-6 py-3 bg-[#25D366] hover:bg-green-500 text-white rounded-lg shadow-md font-semibold flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();

                const whatsappLink =
                  "https://wa.me/6281244997748?text=Halo%20NEMU%20Workshop,%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20pagar%20dan%20konstruksi%20besi.";

                fbq("track", "Contact");

                gtag("event", "conversion", {
                  send_to: "AW-17108704615/Njd_CLfTtswaEOe6iN4_",
                  value: 1.0,
                  currency: "IDR",
                  transaction_id: "",
                });

                window.open(whatsappLink, "_blank");
              }}
            >
              <FaWhatsapp size={24} />
              Konsultasi Sekarang
            </motion.a>
          </div>
        </div>
      </motion.div>

      
      {/* SECTION KEDUA - DIBALIK */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-stretch gap-10 mt-20">

        {/* Kiri - Gambar */}
        <div className="w-full md:w-5/12 flex flex-col items-center justify-center">

          {/* Gambar utama */}
          <div
            className="relative w-80 h-72 md:w-96 md:h-80 overflow-hidden rounded-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openModal(1)}
          >
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail */}
          <div className="flex gap-4 mt-4 w-80 md:w-96">
            {[0, 2].map((i) => (
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

        {/* Kanan - Teks */}
        <motion.div
          className="w-full md:w-7/12 text-left flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-snug">
            Tahukah kamu?
          </h2>

          <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-700">
            Pagar bukan hanya soal keamanan, tapi juga bagian penting dari tampilan rumah Anda.
            Pemilihan material dan pengerjaan yang kurang tepat bisa membuat pagar cepat berkarat,
            keropos, hingga mengurangi nilai estetika bangunan.
          </p>

          <ul className="mt-8 space-y-6">
            {[
              "Pagar kuat dan lebih aman",
              "Desain modern yang menyatu dengan fasad rumah",
              "Material berkualitas dan tahan lama",
              "Pengerjaan rapi dan presisi",
              "Bisa custom sesuai kebutuhan dan desain rumah",
            ].map((benefit, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-4 text-xl font-semibold leading-relaxed"
                initial={{ opacity: 0, x: 20 }}
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
      </div>

      
      {/* BOTTOM CTA SECTION */}
      <motion.div
        className="mt-20 bg-[#1e3a5f]/90 py-16 px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariant}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Kiri - Text */}
          <div className="w-full md:w-7/12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold leading-snug">
              Ingin punya pagar rumah yang kokoh, modern, dan tahan lama?
            </h2>
          </div>

          {/* Kanan - Button */}
          <div className="w-full md:w-5/12 flex justify-center md:justify-end">
            <motion.a
              href="https://wa.me/6281244997748?text=Halo%20NEMU%20Workshop,%20saya%20ingin%20konsultasi%20mengenai%20pagar%20dan%20konstruksi%20besi."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#25D366] hover:bg-green-500 text-white rounded-xl shadow-lg font-semibold flex items-center gap-3 text-lg"
              onClick={(e) => {
                e.preventDefault();

                const whatsappLink =
                  "https://wa.me/6281244997748?text=Halo%20NEMU%20Workshop,%20saya%20ingin%20konsultasi%20mengenai%20pagar%20dan%20konstruksi%20besi.";

                fbq("track", "Contact");

                gtag("event", "conversion", {
                  send_to: "AW-17108704615/Njd_CLfTtswaEOe6iN4_",
                  value: 1.0,
                  currency: "IDR",
                  transaction_id: "",
                });

                window.open(whatsappLink, "_blank");
              }}
            >
              <FaWhatsapp size={26} />
              Konsultasi Gratis
            </motion.a>
          </div>
        </div>
      </motion.div>





      {/* MODAL ZOOM */}
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

          <div
            className="max-w-4xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
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

