"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Gambar contoh
import sliding1 from "../assets/jsdecky.jpg";
import sliding2 from "../assets/js6.jpg";
import sliding3 from "../assets/js7.jpg";
import swing1 from "../assets/jsw1.jpg";
import swing2 from "../assets/jsw2.jpg";
import swing3 from "../assets/jendelaa.jpg";
import jungkit1 from "../assets/jjungkit3.jpg";
import jungkit2 from "../assets/jjungkit2.jpg";
import jungkit3 from "../assets/jjungkit.jpg";
import jkmati from "../assets/jkmfahri.jpg";
import jkmati2 from "../assets/ribbenhariono.jpg";
import jkmati3 from "../assets/jkmati3.jpg";
import jcustom from "../assets/komjsliding.jpg";
import jcustom2 from "../assets/jendelaa.jpg";
import jcustom3 from "../assets/pivotfahri.jpg";

const jenisJendela = [
  {
    title: "Jendela Sliding Aluminium",
    content: `Jendela sliding aluminium adalah solusi sempurna untuk rumah minimalis modern. 
Dengan sistem buka geser, jendela ini tidak memakan tempat dan sangat praktis untuk ruang tamu, kamar tidur, hingga balkon.<br /><br />
Desainnya memberikan tampilan elegan dan memaksimalkan cahaya alami masuk ke ruangan. Cocok untuk Anda yang menginginkan ruangan lebih terang dan lega.`,
    images: [sliding1, sliding2, sliding3]
  },
  {
    title: "Jendela Swing Aluminium",
    content: "Jendela swing aluminium sangaJendela swing aluminium sangat ideal untuk menghadirkan ventilasi maksimal. Bukaan penuh ke arah luar atau dalam memudahkan sirkulasi udara segar.<br /><br />Jendela ini umumnya dipilih untuk dapur dan kamar mandi yang membutuhkan pertukaran udara lebih sering. Material aluminium membuatnya tahan lama dan bebas perawatan.t ideal untuk menghadirkan ventilasi maksimal.",
    images: [swing1, swing2, swing3]
  },
  {
    title: "Jendela Jungkit Aluminium",
    content: "Jendela jungkit aluminium adalah pilihan fleksibel bagi Anda yang menginginkan ventilasi namun tetap menjaga keamanan.<br /><br /> Bukaan sedikit ke atas membuat udara tetap mengalir tanpa takut hujan masuk. Umumnya dipasang di area-area semi-privat seperti kamar mandi atau ruang cuci.",
    images: [jungkit1, jungkit2, jungkit3]
  },
  {
    title: "Jendela Mati (fixed)",
    content: "Jendela fixed aluminium merupakan jendela tanpa bukaan yang difungsikan untuk menghadirkan pencahayaan alami maksimal.<br /><br /> Cocok untuk area tangga, foyer, atau ruang tamu yang ingin menonjolkan desain interior dengan pencahayaan natural sepanjang hari. Anti karat dan mudah perawatan.",
    images: [jkmati, jkmati2, jkmati3]
  },
  {
    title: "Jendela Aluminium Custom Design",
    content: "Ingin tampilan jendela aluminium sesuai kebutuhan dan gaya hunian Anda? Kami melayani pembuatan jendela custom design.<br /><br /> Mulai dari ukuran, tipe bukaan, hingga pilihan kaca dan warna, semua bisa disesuaikan. Sangat tepat untuk proyek rumah impian atau desain arsitektural unik. Konsultasikan gratis bersama tim ahli kami!",
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
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Pilihan Jenis Jendela Aluminium</h2>
        <p className="text-lg md:text-xl mb-10">Temukan berbagai jenis jendela aluminium terbaik yang bisa disesuaikan dengan kebutuhan rumah modern Anda. Setiap model memiliki fungsi dan keunggulan tersendiri, cocok untuk rumah minimalis, klasik, maupun komersial.</p>

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
