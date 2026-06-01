"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { CheckCircle } from "lucide-react";

import proyek1 from "../assets/stainles.webp";
import proyek2 from "../assets/stainles2.webp";
import proyek3 from "../assets/stainles3.jpg";
import proyek4 from "../assets/stainles4.jpg";
import proyek5 from "../assets/stainles5.jpg";
import proyek6 from "../assets/stainles6.jpg";
import proyek7 from "../assets/stainles7.jpg";
import proyek8 from "../assets/stainles8.webp";
import proyek9 from "../assets/stainles9.png";
import proyek10 from "../assets/stainless11.jpg";
import proyek11 from "../assets/stainless12.jpg";
import proyek12 from "../assets/stainless13.webp";
import proyek13 from "../assets/stainless14.webp";
import proyek14 from "../assets/stainless15.jpeg";
import proyek15 from "../assets/stainless10.jpg";
import proyek16 from "../assets/stainless16.jpeg";
import pesananimg from "../assets/sectionn.png";
import solutiomimg from "../assets/partisi.jpg";

const benefits = [
  "Anti rayap & tidak berkarat, ideal untuk iklim tropis yang lembap",
  "Desain elegan dan minimalis, menambah nilai estetika interior",
  "Cocok untuk rumah, kantor, hingga toko, fleksibel dalam berbagai kebutuhan",
  "Ringan dan mudah dibuka tutup, praktis untuk penggunaan harian",
];

export const metadata = {
  title: "Jasa Pintu Sliding Aluminium | Zen Workshop",
  description: "Layanan jasa pembuatan dan pemasangan pintu sliding aluminium profesional dan custom.",
};

const galleryImages = [proyek1, proyek2, proyek3, proyek4, proyek5, proyek6, proyek7, proyek8, proyek9, proyek10, proyek11, proyek12, proyek13, proyek14, proyek15, proyek16];

export default function PintuSlidingPage() {
  const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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
      
        {/* HERO SECTION: Stainless Steel */}
        <motion.section
          className="bg-gradient-to-br from-[#0D2C40] to-[#1A4365] text-white py-28 px-6 md:px-12 flex items-center justify-center min-h-screen"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Jasa Pembuatan & Pemasangan Stainless Steel Modern dan Elegan
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8">
              Tingkatkan tampilan rumah, kantor, cafe, hingga bangunan komersial Anda dengan 
              <strong> stainless steel custom </strong>
              yang kokoh, anti karat, dan tampil mewah. Nemu Workshop melayani pembuatan railing, pagar, canopy, handrail, hingga berbagai kebutuhan stainless steel lainnya dengan hasil rapi dan presisi.
            </p>

            <a
              href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20jasa%20stainless%20steel%20dari%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
              onClick={() => {
                fbq('track', 'Contact');
                return gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20jasa%20stainless%20steel%20dari%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F');
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-500 text-white px-5 py-2.5 rounded-lg text-base font-semibold shadow-lg transition"
            >
              <FaWhatsapp size={20} /> Konsultasi Gratis Sekarang
            </a>
          </div>
        </motion.section>




          {/* KENAPA PILIH STAINLESS STEEL */}
          <section className="bg-white py-24 px-4 md:px-8 text-gray-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Kiri - Gambar */}
              <motion.div
                className="flex"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-full max-h-[600px] rounded-2xl overflow-hidden shadow-lg flex-1">
                  <img
                    src={proyek2}
                    alt="Contoh pemasangan stainless steel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Kanan - Teks */}
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Kenapa Banyak Orang Pilih Stainless Steel?
                </h2>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                  Stainless steel menjadi pilihan favorit untuk rumah modern dan bangunan komersial karena tampilannya yang 
                  <strong> elegan, bersih, tahan karat, dan minim perawatan</strong>. 
                  Cocok digunakan untuk railing, pagar, handrail, kanopi, hingga berbagai kebutuhan interior dan eksterior lainnya.
                </p>

                <ul className="space-y-5 text-lg">
                  {[
                    "Tampilan modern dan mewah untuk berbagai konsep bangunan",
                    "Anti karat dan tahan terhadap cuaca ekstrem",
                    "Konstruksi kuat dan awet untuk penggunaan jangka panjang",
                    "Perawatan lebih mudah dibanding material besi biasa",
                    "Cocok untuk interior maupun eksterior rumah dan bangunan komersial"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={24} className="text-blue-500 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>


              {/* JENIS & APLIKASI */}
          <section className="bg-[#0D2C40] text-white py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
                Jenis & Aplikasi Stainless Steel
              </h2>
              <p className="text-lg md:text-xl text-center text-white/80 max-w-3xl mx-auto mb-14">
                Stainless steel memiliki tampilan modern, tahan karat, dan cocok digunakan untuk berbagai kebutuhan rumah, kantor, maupun bangunan komersial. Berikut beberapa aplikasi stainless steel yang paling banyak digunakan.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Railing Tangga Stainless",
                    desc: "Memberikan keamanan sekaligus tampilan modern pada area tangga rumah, kantor, maupun bangunan komersial.",
                    icon: "🪜",
                  },
                  {
                    title: "Railing Balkon Stainless",
                    desc: "Membuat area balkon lebih aman dengan desain elegan dan tahan terhadap cuaca luar ruangan.",
                    icon: "🏢",
                  },
                  {
                    title: "Pagar Stainless Steel",
                    desc: "Pilihan pagar yang kuat, anti karat, dan memberikan kesan bersih serta mewah pada fasad bangunan.",
                    icon: "🏡",
                  },
                  {
                    title: "Handrail Stainless",
                    desc: "Cocok untuk tangga, koridor, maupun area publik yang membutuhkan pegangan tangan yang kokoh dan tahan lama.",
                    icon: "🤝",
                  },
                  {
                    title: "Kanopi Stainless Kombinasi Kaca",
                    desc: "Menggabungkan kekuatan stainless steel dengan keindahan kaca untuk tampilan yang premium dan modern.",
                    icon: "☀️",
                  },
                  {
                    title: "Custom Stainless Steel",
                    desc: "Melayani berbagai kebutuhan stainless custom sesuai desain dan ukuran yang Anda inginkan.",
                    icon: "✨",
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -6 }}
                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-white cursor-pointer"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/80 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

                        {/* Section – Railing Stainless Steel */}
          <section className="bg-white py-20 px-4 md:px-8 text-gray-900">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

              {/* Gambar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full h-full rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={proyek15}
                  alt="Railing stainless steel modern"
                  className="w-full h-[240px] md:h-[400px] object-cover"
                />
              </motion.div>

              {/* Konten Teks */}
              <div className="space-y-5 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Butuh Railing Stainless yang Kokoh & Elegan?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Selain jasa pembuatan stainless steel, Zen Workshop juga melayani
                  <strong> pembuatan railing tangga dan balkon stainless steel</strong>
                  untuk rumah, kantor, ruko, hingga bangunan komersial. Tampilan modern,
                  tahan karat, dan awet digunakan dalam jangka panjang.
                </p>

                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Material stainless steel berkualitas dan anti karat</li>
                  <li>Desain modern, minimalis, hingga custom sesuai kebutuhan</li>
                  <li>Cocok untuk tangga, balkon, rooftop, dan area komersial</li>
                </ul>

                <a
                  href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
                  onClick={() => {
                    fbq('track', 'Contact');
                    return gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F');
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white px-5 py-2.5 rounded-md text-base font-medium transition"
                >
                  <FaWhatsapp size={18} /> Konsultasi Stainless Steel
                </a>
              </div>
            </div>
          </section>
      {/* Galeri */}
        <motion.section className="py-16 px-4 md:px-8 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
           Contoh Proyek Pembuatan Stainless Steel
          </h2>
          <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-12">
            Lihat hasil pengerjaan stainless steel dari Nemu Workshop untuk berbagai kebutuhan seperti railing tangga stainless, railing balkon, pagar stainless, handrail, dan konstruksi custom lainnya. Melayani area Jabodetabek dengan pengerjaan profesional dan hasil yang presisi.
          </p>
          <div className="columns-2 md:columns-3 gap-4 space-y-4 mb-16">
            {galleryImages.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow cursor-pointer" onClick={() => openModal(index)}>
                <img src={src} alt={`Proyek Floor Hinge ${index + 1}`} className="w-full h-auto object-cover transition hover:scale-105" />
              </div>
            ))}
          </div>

          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center" onClick={closeModal}>
              <div className="relative max-w-5xl mx-auto" onClick={(e) => e.stopPropagation()}>
                <button className="absolute top-4 right-6 text-white text-3xl" onClick={closeModal}>&times;</button>
                <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl" onClick={prevImage}>&#10094;</button>
                <img src={galleryImages[activeIndex]} alt={`Preview Proyek Floor Hinge ${activeIndex + 1}`} className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg" />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl" onClick={nextImage}>&#10095;</button>
              </div>
            </div>
          )}
        </motion.section>


              {/* Tahapan Pemesanan */}

        <section className="bg-[#0D2C40] text-white py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Proses Pemesanan Stainless Steel</h2>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-left">

          {/* Gambar dan Paragraf */}
          <div className="text-center md:text-left">
            <img
              src={pesananimg}
              alt="Konsultasi pemesanan stainless steel"
              className="rounded-lg shadow-lg mb-6 mx-auto md:mx-0 w-full h-auto sm:max-w-[250px] md:max-w-[400px]"
            />

            <p className="text-white/90 leading-relaxed mb-4">
              Kami melayani <span className="font-semibold text-white">pembuatan dan pemasangan stainless steel custom</span>
              untuk berbagai kebutuhan seperti railing tangga, railing balkon, pagar stainless,
              handrail, hingga pekerjaan stainless lainnya dengan proses yang mudah, transparan, dan profesional.
            </p>

            <a
              href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
              onClick={() => {
                fbq('track', 'Contact');
                return gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F');
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white px-6 py-3 rounded-lg text-base font-semibold transition mx-auto md:mx-0"
            >
              <FaWhatsapp size={20} className="mb-[1px]" />
              Konsultasi Sekarang
            </a>
          </div>

          {/* Langkah-langkah */}
          <div className="grid gap-6">
            {[
              {
                id: "01",
                title: "Konsultasi Kebutuhan",
                desc: "Sampaikan kebutuhan stainless steel Anda, mulai dari railing, pagar, handrail, hingga custom design."
              },
              {
                id: "02",
                title: "Survey & Pengukuran",
                desc: "Tim kami melakukan survey lokasi dan pengukuran agar hasil sesuai kebutuhan dan kondisi lapangan."
              },
              {
                id: "03",
                title: "Penawaran Harga",
                desc: "Kami mengirimkan estimasi biaya lengkap berdasarkan desain, material, dan volume pekerjaan."
              },
              {
                id: "04",
                title: "Persetujuan & DP",
                desc: "Setelah harga disetujui, proyek masuk jadwal produksi dan pengerjaan."
              },
              {
                id: "05",
                title: "Produksi & Pemasangan",
                desc: "Produk stainless steel dibuat dan dipasang oleh tim berpengalaman dengan hasil rapi dan presisi."
              }
            ].map((step) => (
              <motion.div
                key={step.id}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="bg-white/10 text-white border border-white/20 rounded-xl p-5 shadow-sm backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold flex items-center gap-3">
                  <span className="bg-white text-[#0D2C40] font-bold px-3 py-1 rounded-full">
                    {step.id}
                  </span>
                  {step.title}
                </h3>
                <p className="mt-2 text-white/90">{step.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>


          </div>
        </section>

              {/* Testimoni Klien - Stainless Steel */}

        <section className="bg-white py-20 px-4 md:px-8 text-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Testimoni Klien Pembuatan Stainless Steel
            </h2>

      
        <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4">
          {[
            {
              name: "Andi Prasetyo",
              job: "Pemilik Rumah, Tangerang",
              message:
                "Railing tangga stainless dari Nemu Workshop hasilnya rapi dan kokoh. Rumah jadi terlihat lebih modern dan elegan.",
            },
            {
              name: "Maria Lestari",
              job: "Owner Cafe, Jakarta Barat",
              message:
                "Kami pesan handrail dan railing stainless untuk area cafe. Finishing-nya bagus dan sangat sesuai desain interior kami.",
            },
            {
              name: "Hendra Kusuma",
              job: "Developer Perumahan, Bekasi",
              message:
                "Sudah beberapa kali menggunakan jasa Nemu Workshop untuk proyek railing balkon. Hasilnya konsisten dan pengerjaannya profesional.",
            },
            {
              name: "Sylvia Ramadhani",
              job: "Interior Designer, Bintaro",
              message:
                "Nemu Workshop mampu mengikuti detail desain custom yang saya buat. Hasil stainless steel-nya presisi dan terlihat premium.",
            },
            {
              name: "Yusuf Hartanto",
              job: "Pemilik Ruko, Depok",
              message:
                "Pagar stainless yang dipasang membuat tampilan bangunan lebih modern. Materialnya tebal dan pengerjaannya sangat rapi.",
            },
            {
              name: "Febri Anggraeni",
              job: "Karyawan Swasta, Bogor",
              message:
                "Proses konsultasi sampai pemasangan sangat mudah. Railing balkon stainless hasilnya melebihi ekspektasi kami.",
            },
          ].map((testi, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-[300px] bg-[#F8FAFC] p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic mb-4">“{testi.message}”</p>
              <div className="font-semibold text-[#0D2C40]">{testi.name}</div>
              <div className="text-sm text-gray-500">{testi.job}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/e7NRR7tuBcXQuXn4A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0D2C40] hover:bg-[#153955] text-white px-6 py-3 rounded-lg text-base font-semibold transition"
          >
            Lihat Lokasi Zen Workshop di Google Maps
          </a>
        </div>
        </div>
        </section>



        {/* FAQ Stainless Steel */}

        <section className="bg-[#0D2C40] text-white py-16 px-4 md:px-6">
          <div className="max-w-6xl mx-auto text-center">

      
        <h2 className="text-4xl font-bold mb-6">
          FAQ Stainless Steel
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:items-stretch">

          {/* Gambar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full h-full rounded-2xl overflow-hidden shadow-lg md:order-last"
          >
            <img
              src={proyek2}
              alt="Contoh railing dan stainless steel"
              className="w-full h-[220px] md:h-[400px] object-cover"
            />
          </motion.div>

          {/* FAQ */}
          <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
            {[
              {
                question: "Apakah stainless steel benar-benar anti karat?",
                answer:
                  "Stainless steel memiliki ketahanan tinggi terhadap karat dan korosi, sehingga cocok digunakan untuk area indoor maupun outdoor dalam jangka panjang.",
              },
              {
                question: "Apakah bisa custom desain sesuai kebutuhan?",
                answer:
                  "Tentu. Kami melayani pembuatan stainless steel custom mulai dari railing tangga, railing balkon, pagar, handrail, hingga berbagai kebutuhan desain khusus.",
              },
              {
                question: "Apa keunggulan stainless steel dibanding besi biasa?",
                answer:
                  "Stainless steel lebih tahan karat, memiliki tampilan modern, minim perawatan, dan umur pakai yang lebih panjang dibanding besi biasa.",
              },
              {
                question: "Berapa lama proses produksi dan pemasangan?",
                answer:
                  "Waktu pengerjaan umumnya sekitar 5–14 hari kerja, tergantung ukuran, desain, dan volume pekerjaan yang dipesan.",
              },
              {
                question: "Apakah melayani survey dan pemasangan ke lokasi?",
                answer:
                  "Ya. Tim Nemu Workshop siap membantu mulai dari survey, pengukuran, produksi, hingga pemasangan langsung di lokasi proyek Anda.",
              },
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





     {/* CTA Akhir – Stainless Steel */}

        <section className="bg-white text-gray-900 py-20 px-4 md:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Siap Wujudkan Stainless Steel yang Kokoh & Elegan?
            </h2>

        
        <p className="text-lg md:text-xl mb-8 text-gray-700">
          Percayakan kebutuhan <strong>railing tangga, railing balkon, pagar stainless, handrail, hingga custom stainless steel</strong> kepada <strong>Nemu Workshop</strong>. Material berkualitas, pengerjaan rapi, dan desain yang bisa disesuaikan dengan konsep rumah maupun bangunan Anda.
        </p>

        <a
          href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
          onClick={() => {
            fbq('track', 'Contact');
            return gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F');
          }}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white px-5 py-2.5 rounded-md text-base font-medium transition"
        >
          <FaWhatsapp size={18} />
          Konsultasi Gratis via WhatsApp
        </a>
        

          </div>
        </section>







    </>
  );
}
