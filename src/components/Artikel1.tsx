"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Partisi from '../assets/partisi.jpg';
import proyek20 from "../assets/sb/sb2.jpg";
import proyek17 from "../assets/jsw/jsw5.jpg";
import proyek30 from "../assets/floorhinge.jpg";
import proyek31 from "../assets/ak/ak2.jpg";
import proyek32 from "../assets/pintusliding1.jpg";
import proyek33 from "../assets/pl/pl2.jpg";
import proyek34 from "../assets/pf/pf4.jpg";
import proyek35 from "../assets/pintukaca.jpg";

export default function Artikel1() {
  const items = [
    {
      title: "Partisi Aluminium: Solusi Ideal untuk Ruang yang Modern dan Fungsional",
      desc: "Memiliki ruang yang terorganisir dan estetik adalah impian setiap pemilik rumah maupun pebisnis.",
      image: Partisi,
      link: "/artikel/partisi-aluminium-modern",
    },
    {
      title: "Kaca Tempered Kamar Mandi: Pilihan Tepat untuk Kesan Mewah & Aman",
      desc: "Kaca Tempered merupakan salah satu material yang paling banyak digunakan dalam desain",
      image: proyek20,
      link: "/artikel/kaca-tempered-kamar-mandi",
    },
    {
      title: "Mengenal Jendela Aluminium dan Keunggulannya Dibanding Material Lain",
      desc: "Jendela aluminium sudah dikenal dan dimanfaatkan puluhan tahun sejak maraknya desain bergaya modern.",
      image: proyek17,
      link: "/artikel/mengenal-jendela-aluminium-dan-keunggulannya-dibanding-material-lainnya",
    },
    {
      title: "Keunggulan Kaca Tempered atau Tempered Glass",
      desc: "Kaca Tempered atau kaca yang telah diproses dengan pemasangan dan pendinginan cepat ini memiliki kekuatan",
      image: proyek30,
      link: "/artikel/keunggulan-kaca-tempered",
    },
    {
      title: "Skylight Rumah: Cara Efektif Bikin Interior Lebih Terang & Estetik",
      desc: "Salah satu cara terbaik untuk memanfaatkan cahaya alami di dalam rumah adalah dengan menggunakan.",
      image: proyek31,
      link: "/artikel/skylight-rumah-interior-terang-estetik",
    },
    {
      title: "Pintu Sliding Aluminium: Elegan, Praktis, Dan Fungsional",
      desc: "Pintu sliding aluminium atau pintu geser yang menggunakan bahan aluminium",
      image: proyek32,
      link: "/artikel/pintu-sliding-aluminium-elegan-praktis-fungsional",
    },
    {
      title: "Kelebihan Pintu Lipat Aluminium untuk Rumah Minimalis Modern",
      desc: "Pintu lipat aluminium kaca merupakan salah satu jenis pintu yang semakin populer digunakan saat ini",
      image: proyek33,
      link: "/artikel/kelebihan-pintu-lipat-aluminium-rumah-minimalis-modern",
    },
    {
      title: "Simak 6 Tips Memilih Floor Hinge yang Tepat dan Nyaman",
      desc: "Salah satu alat bantu untuk menjaga keseimbangan dan kekuatan dari daun pintu kaca adalah floor hinge",
      image: proyek34,
      link: "/artikel/tips-memilih-floor-hinge-tepat-dan-nyaman",
    },
    {
      title: "Bagaimana Rincian Pemasangan untuk Pintu Kaca",
      desc: "Pintu kaca telah menjadi pilihan populer dalam desain interior dan eksterior bangunan.",
      image: proyek35,
      link: "/artikel/rincian-pemasangan-pintu-kaca",
    },
  ];

  return (
    <>
      {/* SECTION 1: Hero Background Biru */}
      <section className="bg-gradient-to-br from-[#0D2C40] to-[#1A4365] py-24 px-4 md:px-8 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Inspirasi Pintu Jendela Aluminium, Partisi Kaca & Kitchen Set – Zen Workshop
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Temukan inspirasi dan tips praktis seputar desain interior modern, pintu jendela aluminium, partisi kaca, hingga kitchen set aluminium di halaman artikel Zen Workshop. Kami hadirkan berbagai informasi terbaru untuk membantu Anda mewujudkan rumah impian yang elegan, fungsional, dan tahan lama.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Semua Kartu di Background Putih */}
      <section className="bg-white py-24 px-4 md:px-8 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white text-gray-900 rounded-2xl shadow-md overflow-hidden border"
              >
                <Link to={item.link || "#"} className="block">
                  <div className="relative group overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#0D2C40] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition duration-500">
                      Lihat Selengkapnya
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
