"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Gambar contoh
import sliding1 from "../assets/pagarbesi.jpg";
import sliding2 from "../assets/pagarhollow1.png";
import sliding3 from "../assets/pagarhollow2.jpg";
import swing1 from "../assets/pagartempa.jpg";
import swing2 from "../assets/pagartempa2.webp";
import swing3 from "../assets/pagartempa3.jpg";
import jungkit1 from "../assets/pagarnako.jpg";
import jungkit2 from "../assets/pagarnako2.webp";
import jungkit3 from "../assets/pagarnako3.jpg";
import jkmati from "../assets/pagarlaser.webp";
import jkmati2 from "../assets/pagarlaser2.webp";
import jkmati3 from "../assets/pagarlaser3.webp";
import jcustom from "../assets/pagar.jpeg";
import jcustom2 from "../assets/pagar1.jpeg";
import jcustom3 from "../assets/pagarbesi.jpg";

const jenisJendela = [
  {
    title: "Pagar Minimalis Besi Hollow",
    content: "Pagar besi hollow minimalis menjadi pilihan favorit untuk rumah modern karena tampilannya yang simpel, elegan, dan tetap kokoh. Dengan desain garis-garis tegas, pagar ini cocok dipadukan dengan fasad rumah minimalis maupun industrial.<br /><br /> Material hollow berkualitas membuat pagar lebih tahan lama, anti karat, dan mudah dalam perawatan sehari-hari.",
    images: [sliding1, sliding2, sliding3]
  },
  {
    title: "Pagar Besi Tempa",
    content: "Pagar besi tempa menghadirkan tampilan klasik, elegan, dan mewah untuk hunian Anda. Detail lekukan dan ornamen khas besi tempa membuat tampilan rumah terlihat lebih eksklusif dan berkelas.<br /><br /> Selain kuat dan kokoh, pagar jenis ini juga cocok dipadukan dengan berbagai konsep rumah, mulai dari klasik modern hingga industrial mewah.",
    images: [swing1, swing2, swing3]
  },
  {
    title: "Pagar Besi Nako",
    content: "Pagar besi nako menjadi pilihan tepat untuk Anda yang menginginkan tampilan rumah lebih modern, simpel, dan tetap kokoh. Model garis-garis besi nako memberikan kesan minimalis yang rapi sekaligus mempercantik fasad rumah.<br /><br /> Selain kuat dan tahan lama, pagar jenis ini juga cocok digunakan untuk rumah minimalis modern, area komersial, hingga bangunan industrial.",
    images: [jungkit1, jungkit2, jungkit3]
  },
  {
    title: "Pagar Laser Cutting",
    content: "Pagar laser cutting menjadi pilihan populer untuk rumah modern karena tampilannya yang unik, estetik, dan premium. Motif custom pada plat besi membuat fasad rumah terlihat lebih elegan sekaligus memiliki karakter tersendiri.<br /><br /> Selain memberikan keamanan, pagar laser cutting juga mampu meningkatkan nilai visual rumah dengan desain yang modern dan eksklusif.",
    images: [jkmati, jkmati2, jkmati3]
  },
  {
    title: "Pagar Custom Design",
    content: "Ingin desain pagar yang menyesuaikan konsep rumah Anda? NEMU Workshop melayani pembuatan pagar custom sesuai kebutuhan.<br /><br /> Mulai dari model minimalis, industrial, klasik, hingga kombinasi material bisa disesuaikan dengan desain impian Anda. Konsultasikan gratis bersama tim kami!",
    images: [jcustom, jcustom2, jcustom3]
  },
];

export default function Jjchoice() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const openModal = (images, index) => {
    setModalImages(images);
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
  const nextImage = () => setModalIndex((modalIndex + 1) % modalImages.length);
  const prevImage = () => setModalIndex((modalIndex - 1 + modalImages.length) % modalImages.length);

  // ESC key close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section className="bg-[#0D2C40] text-white">
      <div className="pt-24 md:pt-32 pb-16 px-4 md:px-8 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Pilihan Jenis Pagar Besi</h2>
        <p className="text-lg md:text-xl mb-10">Temukan berbagai jenis pagar besi terbaik yang bisa disesuaikan dengan kebutuhan dan desain rumah Anda. Mulai dari pagar minimalis, sliding, laser cutting, hingga custom design — setiap model memiliki karakter dan keunggulan tersendiri untuk membuat rumah lebih aman, modern, dan estetik.</p>

        <div className="text-left space-y-4">
          {jenisJendela.map((item, index) => (
            <div key={index} className="bg-[#0B2433] rounded-lg overflow-hidden">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left p-4 text-lg font-semibold hover:bg-[#0A1A24] transition"
              >
                {item.title}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="p-4 text-gray-300 space-y-6"
                  >
                    <p dangerouslySetInnerHTML={{ __html: item.content }}></p>

                    <div className="grid grid-cols-3 gap-4 mt-6">
                      {item.images.map((img, imgIndex) => (
                        <div key={imgIndex}>
                          <img
                            src={img}
                            alt={`${item.title} - gambar ${imgIndex + 1}`}
                            className="w-full h-48 object-cover rounded-lg cursor-pointer"
                            onClick={() => openModal(item.images, imgIndex)}
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-6"
          onClick={closeModal}
        >
          <div onClick={(e) => e.stopPropagation()} className="relative max-w-3xl w-full">
            <button onClick={closeModal} className="absolute top-4 right-4 text-white text-3xl">×</button>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
              onClick={prevImage}
            >
              &#10094;
            </button>

            <img
              src={modalImages[modalIndex]}
              alt={`Detail ${modalIndex + 1}`}
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
            />

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
              onClick={nextImage}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}

  
    </section>
  );
}
