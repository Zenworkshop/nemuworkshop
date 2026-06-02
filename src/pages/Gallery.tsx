"use client";

import React, { useState, useEffect } from "react";
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import alperon from "../assets/alperon.jpg";
import alperon2 from "../assets/alperon2.jpeg";
import alperon3 from "../assets/alperon3.jpg";


import bajaringan from "../assets/bajaringan.jpg";
import bajaringan2 from "../assets/bajaringan2.jpg";
import bajaringan2webp from "../assets/bajaringan2.webp";


import kanopi from "../assets/kanopi.jpg";
import kanopi1 from "../assets/kanopi1.jpg";
import kanopi4 from "../assets/kanopi4.jpeg";


import kanopialderon from "../assets/kanopialderon.jpeg";
import kanopikaca from "../assets/kanopikaca.jpeg";
import kanopikaca17 from "../assets/kanopikaca17.jpeg";


import mezanin2 from "../assets/mezanin2.jpeg";
import mezanin3 from "../assets/mezanin3.jpeg";
import mezanin4 from "../assets/mezanin4.jpg";



import pagar from "../assets/pagar.jpeg";
import pagar1 from "../assets/pagar1.jpeg";
import pagarbesi from "../assets/pagarbesi.jpg";

import pagarduma from "../assets/pagarduma.jpeg";
import pagarduma2 from "../assets/pagarduma2.jpeg";
import pagarduma3 from "../assets/pagarduma3.jpeg";


import pagarrc from "../assets/pagargrc.jpeg";
import pagarrc2 from "../assets/pagargrc2.jpeg";
import pagarrcwood from "../assets/pagargrcwood.jpeg";

import pagarhollow1 from "../assets/pagarhollow1.png";
import pagarhollow2 from "../assets/pagarhollow2.jpg";

import pagarkisikisi from "../assets/pagarkisikisi.jpeg";
import pagarkisikisi2 from "../assets/pagarkisikisi2.jpeg";
import pagarkisikisi3 from "../assets/pagarkisikisi3.jpeg";


import pagarlaser from "../assets/pagarlaser.webp";
import pagarlaser2 from "../assets/pagarlaser2.webp";
import pagarlaser3 from "../assets/pagarlaser3.webp";

import pagarnako from "../assets/pagarnako.jpg";
import pagarnakowebp from "../assets/pagarnako.webp";
import pagarnako2 from "../assets/pagarnako2.webp";


import pagarsliding from "../assets/pagarsliding.jpeg";
import pagarsliding2 from "../assets/pagarsliding2.jpeg";
import pagarsliding3 from "../assets/pagarsliding3.jpeg";


import pagartempa from "../assets/pagartempa.jpg";
import pagartempa2 from "../assets/pagartempa2.webp";
import pagartempa3 from "../assets/pagartempa3.jpg";

import railingbalkon3 from "../assets/railingbalkon3.jpg";
import railingbalkonkaca from "../assets/railingbalkonkaca.webp";
import railingbalkonkaca2 from "../assets/railingbalkonkaca2.png";


import railingkaca from "../assets/railingkaca.jpeg";
import railinglasercutting from "../assets/railinglasercuting.webp";
import railingstainless from "../assets/railingstainless.jpg";

import railingtangga from "../assets/railingtangga.jpeg";
import railingtangga2 from "../assets/railingtangga2.jpeg";
import railingtangga3 from "../assets/railingtangga3.jpeg";


import stainless from "../assets/stainles.webp";
import stainless2 from "../assets/stainles2.webp";
import stainless3 from "../assets/stainles3.jpg";


import tangga from "../assets/tangga.jpg";
import tangga3 from "../assets/tangga3.jpeg";
import tangga4 from "../assets/tangga4.jpeg";


export default function Artikel1() {

const [isOpen, setIsOpen] = useState(false);
const [activeIndex, setActiveIndex] = useState(0);

const images = [
  alperon, alperon2, alperon3, 
  bajaringan, bajaringan2, bajaringan2webp, 
  kanopi, kanopi1, kanopi4, 
  kanopialderon, kanopikaca, kanopikaca17,
  mezanin2, mezanin3, mezanin4, 
  pagarduma, pagarduma2, pagarduma3, 
  pagarrc, pagarrc2, pagarrcwood,
  pagarhollow1, pagarhollow2,
  pagarkisikisi, pagarkisikisi2, pagarkisikisi3, 
  pagarlaser, pagarlaser2, pagarlaser3,
  pagarnako, pagarnakowebp, pagarnako2, 
  pagarsliding, pagarsliding2, pagarsliding3, 
  pagartempa, pagartempa2, pagartempa3,
  railingbalkon3, railingbalkonkaca, railingbalkonkaca2, 
  railingkaca, railinglasercutting, railingstainless,
  railingtangga, railingtangga2, railingtangga3, 
  stainless, stainless2, stainless3, 
  tangga, tangga3, tangga4, 
];

const openModal = (index) => {
  setActiveIndex(index);
  setIsOpen(true);
};

const closeModal = () => setIsOpen(false);

const nextImage = () => {
  setActiveIndex((prev) => (prev + 1) % images.length);
};

const prevImage = () => {
  setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
};

useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  if (isOpen) {
    window.addEventListener("keydown", handleKeyDown);
  }

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [isOpen]);



  return (
    <>
      {/* SECTION 1: Hero Background Biru */}
      <section className="bg-gradient-to-br from-[#0D2C40] to-[#1A4365] py-24 pt-24 md:pt-36 px-4 md:px-8 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Galeri Proyek NEMU Workshop | Pagar, Kanopi, Railing, Baja Ringan & Mezanine
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto">
              Lihat berbagai hasil pekerjaan NEMU Workshop mulai dari pagar besi minimalis, pagar sliding, kanopi baja ringan, kanopi Alderon, railing balkon, railing tangga, konstruksi mezanine, tangga besi, stainless steel, hingga berbagai proyek custom untuk rumah, ruko, kantor, dan bangunan komersial. Temukan inspirasi desain serta kualitas pengerjaan profesional yang kuat, rapi, dan tahan lama.
            </p>  
          </motion.div>
        </div>
      </section>

      {/* GALERI PROYEK */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
       
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="w-full overflow-hidden rounded-lg shadow hover:shadow-xl cursor-pointer break-inside-avoid"
            >
              <img
                src={src}
                alt={`Proyek ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>      
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/628XXXXXXXXXX?text=Halo,%20saya%20tertarik%20dengan%20produk%20dan%20jasa%20NEMU%20Workshop.%20Boleh%20saya%20konsultasi%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition"
          >
            Konsultasi via WhatsApp →
          </a>
        </div>
      </section>
          {isOpen && (
  <div
    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
    onClick={closeModal}
  >
    <div
      className="relative max-w-7xl w-full px-4"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={closeModal}
        className="absolute top-4 right-6 text-white text-5xl z-50"
      >
        ×
      </button>

      <button
        onClick={prevImage}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white text-6xl z-50"
      >
        ‹
      </button>

      <motion.img
        key={activeIndex}
        src={images[activeIndex]}
        alt={`Preview ${activeIndex + 1}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="max-w-full max-h-[90vh] mx-auto object-contain rounded-xl"
      />

      <button
        onClick={nextImage}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white text-6xl z-50"
      >
        ›
      </button>
    </div>
  </div>
)}
      <Footer />
    </>
  );
}
