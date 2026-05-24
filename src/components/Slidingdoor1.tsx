"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";

import proyek1 from "../assets/kanopi.jpg";
import proyek2 from "../assets/kanopikaca.jpeg";
import proyek3 from "../assets/kanopi4.jpeg";
import proyek4 from "../assets/kanopisolar1.jpg";
import proyek5 from "../assets/kanopi6.jpeg";
import proyek6 from "../assets/kanopisliding.jpeg";
import proyek15 from "../assets/kanopialderon.jpeg";
import proyek16 from "../assets/kanopi10.jpeg";
import proyek17 from "../assets/kanopi11.jpeg";
import pesananimg from "../assets/sectionn.png";

export const metadata = {
  title: "Jasa Pintu Sliding Aluminium | Zen Workshop",
  description: "Layanan jasa pembuatan dan pemasangan pintu sliding aluminium profesional dan custom.",
};

const galleryImages = [proyek1, proyek2, proyek3, proyek4, proyek5, proyek6, proyek15, proyek16, proyek17];

export default function PintuSlidingPage() {
  const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Accordion states per section
  const [kenapaIndex, setKenapaIndex] = useState(null);
  const [siapaIndex, setSiapaIndex] = useState(null);
  const [faqIndex, setFaqIndex] = useState(null);

  const refs = useRef([]);

  const openModal = (index) => { setActiveIndex(index); setIsOpen(true); };
  const closeModal = () => setIsOpen(false);
  const nextImage = () => setActiveIndex((activeIndex + 1) % galleryImages.length);
  const prevImage = () => setActiveIndex((activeIndex - 1 + galleryImages.length) % galleryImages.length);

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === "Escape") closeModal(); };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* HERO */}
        <motion.section
          className="bg-[#0D2C40] text-white py-20 px-4 md:px-8 text-center w-full min-h-screen flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Jasa Pembuatan Kanopi Minimalis & Modern
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Kami menyediakan layanan pembuatan dan pemasangan kanopi untuk rumah tinggal, ruko, area komersial, hingga bangunan modern lainnya. Menggunakan material berkualitas seperti alderon, solarflat, spandek, hingga kaca — dengan desain modern, kokoh, tahan cuaca, dan menyesuaikan tampilan bangunan Anda.
            </p>
            <a
              href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
              onClick={() => {
                fbq('track', 'Contact');
                return gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F');
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-500 text-white px-5 py-2.5 rounded-lg text-base font-semibold transition"
            >
              <FaWhatsapp size={20} /> Konsultasi Gratis
            </a>


          </div>
        </motion.section>

      {/* Mengapa memilih */}
        <section className="bg-white text-[#0D2C40] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Judul Tengah */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Kenapa harus pasang kanopi?
        </h2>

        {/* Gambar ditampilkan lebih dulu di mobile */}
        <div className="block md:hidden mb-8">
          <img
            src={proyek1}
            alt="Ilustrasi Pintu Sliding Aluminium"
            className="w-full max-w-[700px] mx-auto rounded-xl shadow"
          />
        </div>

        {/* Konten Dua Kolom (Desktop) */}
        <div className="flex flex-col-reverse md:flex-row md:items-stretch md:gap-10">

          {/* Kiri: Konten Accordion */}
          <div className="md:w-1/2 w-full md:flex md:flex-col md:justify-center space-y-6 px-4 md:px-0">
            {[
              {
                title: "Melindungi Area Rumah dari Panas & Hujan",
                content:
                  "Kanopi membantu melindungi teras, carport, maupun area outdoor dari paparan panas matahari dan hujan secara langsung. Aktivitas di luar rumah jadi lebih nyaman setiap hari.",
              },
              {
                title: "Membuat Tampilan Rumah Lebih Modern",
                content:
                  "Desain kanopi yang tepat dapat mempercantik tampilan fasad rumah secara keseluruhan. Cocok untuk rumah minimalis, industrial, hingga modern contemporary.",
              },
              {
                title: "Material Kuat dan Tahan Lama",
                content:
                  "Menggunakan material berkualitas seperti besi hollow, baja ringan, dan atap premium membuat kanopi lebih kokoh, tahan cuaca, dan minim perawatan dalam jangka panjang.",
              },
              {
                title: "Menambah Nilai dan Fungsi Bangunan",
                content:
                  "Selain melindungi kendaraan dan area outdoor, kanopi juga meningkatkan nilai estetika serta fungsi rumah agar terlihat lebih rapi dan premium.",
              },
              {
                title: "Bisa Custom Sesuai Kebutuhan",
                content:
                  "Mulai dari ukuran, model, warna, hingga jenis atap bisa disesuaikan dengan kebutuhan dan desain rumah Anda. Hasilnya lebih presisi dan menyatu dengan konsep bangunan.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#F5F7FA] border border-[#E0E6ED] rounded-2xl overflow-hidden shadow-sm transition"
              >
                <button
                  onClick={() => setKenapaIndex(index === kenapaIndex ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-lg font-semibold hover:bg-[#E6ECF1] transition"
                >
                  {item.title}
                  {kenapaIndex === index ? <FiMinus /> : <FiPlus />}
                </button>
                <AnimatePresence>
                  {kenapaIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-5 text-[#555] bg-[#F5F7FA] border-t border-[#E0E6ED]"
                    >
                      <p>{item.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Kanan: Gambar (Desktop Only) */}
          <div className="hidden md:flex md:w-1/2 items-center justify-center px-4 md:px-0">
            <img
              src={proyek1}
              alt="Ilustrasi Pintu Sliding Aluminium"
              className="w-full max-w-[700px] rounded-xl shadow"
            />
          </div>
        </div>
      </div>
    </section>

     {/* Untuk Siapa */}
        <section className="bg-[#0D2C40] text-white py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">

            {/* Gambar hanya tampil di mobile */}
            <div className="mb-10 md:hidden">
              <img
                src={proyek2} // Ganti dengan gambar yang kamu inginkan
                alt="Penerapan pintu sliding aluminium"
                className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
              />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Berbagai Jenis Kanopi untuk Rumah & Bangunan
            </h2>

            {/* Deskripsi */}
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Kami menyediakan berbagai jenis kanopi berkualitas untuk rumah tinggal, carport, teras, cafe, hingga bangunan komersial. Mulai dari kanopi alderon, polycarbonate, kaca, spandek, hingga membrane — semuanya bisa disesuaikan dengan kebutuhan desain dan fungsi bangunan Anda. Tampil lebih modern, terlindungi dari panas dan hujan, serta menggunakan material yang kuat dan tahan lama.
            </p>

            {/* Grid Konten */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Kanopi Polycarbonate",
                  desc: "Kanopi polycarbonate memiliki tampilan transparan yang modern dan elegan. Material ini memungkinkan cahaya tetap masuk namun tetap melindungi area dari hujan dan panas.",
                },
                {
                  title: "Kanopi Alderon",
                  desc: "Kanopi alderon terkenal karena mampu meredam panas dan suara hujan dengan baik. Cocok untuk carport, teras, maupun area outdoor rumah modern.",
                },
                {
                  title: "Kanopi Kaca",
                  desc: "Kanopi kaca memberikan kesan mewah dan minimalis pada rumah maupun bangunan komersial. Biasanya dipadukan dengan rangka besi atau stainless untuk tampilan premium.",
                },
                {
                  title: "Kanopi Spandek",
                  desc: "Kanopi spandek dikenal kuat, ringan, dan ekonomis. Banyak digunakan untuk area parkir, gudang, hingga rumah tinggal karena pemasangannya praktis.",
                },
                {
                  title: "Kanopi Hollow Minimalis",
                  desc: "Kanopi dengan rangka besi hollow minimalis sangat populer untuk rumah modern. Desainnya simpel, kokoh, dan bisa dicustom sesuai konsep bangunan.",
                },
                {
                  title: "Kanopi Baja Ringan",
                  desc: "Kanopi baja ringan memiliki struktur yang kuat namun tetap ringan. Tahan karat dan cocok digunakan untuk berbagai jenis atap kanopi.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#0F3A55] p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out text-left"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-300 mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>




      {/* Galeri */}
      <motion.section className="py-16 px-4 md:px-8 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Contoh Proyek Kanopi Rumah NEMU Workshop
        </h2>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-12">
          Galeri hasil pemasangan berbagai jenis kanopi untuk rumah tinggal, carport, cafe, dan bangunan komersial. Mulai dari kanopi alderon, polycarbonate, kaca, hingga kanopi minimalis custom — semua dikerjakan rapi, presisi, dan menyesuaikan desain bangunan modern di area Jabodetabek dan sekitarnya.
        </p>
        <div className="columns-2 md:columns-3 gap-4 space-y-4 mb-16">
          {galleryImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow cursor-pointer" onClick={() => openModal(index)}>
              <img src={src} alt={`Proyek ${index + 1}`} className="w-full h-auto object-cover transition hover:scale-105" />
            </div>
          ))}
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center" onClick={closeModal}>
            <div className="relative max-w-5xl mx-auto" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-4 right-6 text-white text-3xl" onClick={closeModal}>&times;</button>
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl" onClick={prevImage}>&#10094;</button>
              <img src={galleryImages[activeIndex]} alt={`Preview ${activeIndex + 1}`} className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg" />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl" onClick={nextImage}>&#10095;</button>
            </div>
          </div>
        )}
      </motion.section>

      {/* Tahapan Pemesanan */}
        <section className="bg-gray-50 py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Proses Pemesanan Kanopi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-left">
              
              {/* Gambar dan Paragraf */}
                <div className="text-center md:text-left">
                  <img
                    src={pesananimg}
                    alt="Konsultasi pemesanan pintu sliding aluminium"
                    className="rounded-lg shadow-lg mb-6 mx-auto w-[85%] max-w-xs md:max-w-[400px] h-auto"
                  />

                  <p className="text-gray-600 leading-relaxed mb-4">
                    Kami memberikan <span className="font-semibold">layanan konsultasi, survey, hingga pemasangan kanopi</span> dengan proses yang transparan dan profesional. Cocok untuk rumah minimalis maupun bangunan komersial.
                  </p>

                  <div className="flex justify-center md:justify-start">
                    <a
                      href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
                      onClick={() => {
                        fbq('track', 'Contact');
                        return gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F');
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white px-6 py-3 rounded-lg text-base font-semibold transition"
                    >
                      <FaWhatsapp size={20} className="mb-[1px]" /> Konsultasi Sekarang
                    </a>

                  </div>
                </div>


              {/* Langkah-langkah */}
              <div className="grid gap-6">
                {[
                  {
                    id: "01",
                    title: "Hubungi Kami",
                    desc: "Diskusikan kebutuhan pintu sliding aluminium Anda melalui WhatsApp atau telepon.",
                  },
                  {
                    id: "02",
                    title: "Survey Lokasi",
                    desc: "Tim kami akan datang langsung ke lokasi untuk melakukan pengukuran dan evaluasi.",
                  },
                  {
                    id: "03",
                    title: "Kalkulasi Biaya",
                    desc: "Kami akan mengirimkan rincian harga lengkap berdasarkan kebutuhan dan spesifikasi Anda.",
                  },
                  {
                    id: "04",
                    title: "MoU atau DP",
                    desc: "Kesepakatan kerja akan dibuat agar proyek berjalan jelas dan terjadwal.",
                  },
                  {
                    id: "05",
                    title: "Proses Produksi & Pemasangan",
                    desc: "Pintu aluminium diproduksi dan dipasang oleh tim berpengalaman dari Zen Workshop.",
                  },
                ].map((step) => (
                  <div key={step.id} className="p-5 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
                      <span className="text-[#0D2C40] font-bold">{step.id}</span> {step.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>




      {/* FAQ */}
<section className="bg-[#0D2C40] text-white py-16 px-4 md:px-6">
  <div className="max-w-6xl mx-auto text-center">

    {/* Judul */}
    <h2 className="text-4xl font-bold mb-6">
      FAQ Kanopi
    </h2>

    {/* Grid: Gambar & Konten */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:items-stretch">

      {/* Gambar */}
      <div className="flex items-center justify-center">
        <img
          src={proyek3}
          alt="Ilustrasi Pintu Sliding Aluminium"
          className="w-[300px] md:w-full md:max-w-md md:h-full object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Konten Teks */}
      <div className="flex flex-col justify-center space-y-6 text-center md:text-left">

        {[ 
          { 
            question: "Berapa harga pembuatan kanopi per meter?", 
            answer: "Harga kanopi tergantung jenis material, ukuran, desain, dan lokasi pemasangan. Kami menyediakan berbagai pilihan kanopi yang bisa disesuaikan dengan budget dan kebutuhan Anda." 
          },
          { 
            question: "Jenis kanopi apa yang paling cocok untuk rumah minimalis?", 
            answer: "ntuk rumah minimalis, jenis kanopi yang paling sering digunakan adalah alderon, polycarbonate, dan kanopi hollow minimalis karena tampilannya modern, rapi, dan cocok untuk desain rumah masa kini." 
          },
          { 
            question: "Apakah bisa custom desain kanopi sesuai rumah?", 
            answer: "Tentu bisa. Kami melayani pembuatan kanopi custom mulai dari ukuran, model rangka, warna, hingga jenis atap agar hasilnya menyatu dengan desain rumah Anda." 
          },
          { 
            question: "Berapa lama proses pembuatan dan pemasangan kanopi?", 
            answer: "Waktu pengerjaan biasanya menyesuaikan ukuran dan tingkat kesulitan proyek. Rata-rata proses produksi dan pemasangan memakan waktu beberapa hari setelah survei dan deal proyek." 
          },
          { 
            question: "Apakah melayani survey dan konsultasi gratis?", 
            answer: "Ya, tim kami siap membantu konsultasi dan survey gratis untuk area tertentu agar Anda bisa mendapatkan rekomendasi kanopi terbaik sesuai kebutuhan bangunan." 
          }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#0F3A55] border border-[#1C4563] rounded-2xl overflow-hidden transition"
          >
            <button
              onClick={() => setFaqIndex(index === faqIndex ? null : index)}
              className="w-full flex items-center justify-between p-5 text-lg font-semibold hover:bg-[#153955]"
            >
              <span className="text-left">{item.question}</span>
              {faqIndex === index ? <FiMinus /> : <FiPlus />}
            </button>
            <AnimatePresence>
              {faqIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-5 text-gray-300 bg-[#0F3A55] text-left"
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>





      {/* CTA */}
        <section className="w-full min-h-screen bg-white text-gray-900 px-6 md:px-20 flex flex-col items-center justify-center text-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">Siap Memasang Kanopi untuk Rumah atau Bangunan Anda?</h2>
            <p className="mt-4 text-lg md:text-xl font-semibold">Dapatkan layanan konsultasi gratis dari NEMU Workshop untuk pembuatan dan pemasangan kanopi minimalis, modern, dan tahan lama. Cocok untuk carport, teras rumah, cafe, hingga area komersial dengan pilihan berbagai jenis kanopi sesuai kebutuhan Anda.</p>
            <div className="mt-6 flex justify-center">
              <a
                href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
                onClick={() => {
                  fbq('track', 'Contact');
                  return gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F');
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit px-6 py-3 bg-[#25D366] hover:bg-green-500 text-white rounded-lg shadow-md font-semibold flex items-center gap-2 transition"
              >
                <FaWhatsapp size={24} /> Konsultasi Sekarang
              </a>

            </div>
          </div>
        </section>

    </>
  );
}
