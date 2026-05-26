"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { CheckCircle } from "lucide-react";

import proyek1 from "../assets/mezanin2.jpeg";
import proyek2 from "../assets/mezanin3.jpeg";
import proyek3 from "../assets/mezanin4.jpg";
import proyek4 from "../assets/mezanin5.jpeg";
import proyek5 from "../assets/mezanin6.jpeg";
import proyek6 from "../assets/mezanin7.jpeg";
import proyek7 from "../assets/mezanin8.jpg";
import proyek8 from "../assets/mezanin8.webp";
import proyek9 from "../assets/mezanin9.jpg";
import proyek10 from "../assets/mezanin10.jpg";
import proyek11 from "../assets/mezanin11.jpg";
import proyek12 from "../assets/mezanin12.jpg";
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

const galleryImages = [proyek1, proyek2, proyek3, proyek4, proyek5, proyek6, proyek7, proyek8, proyek9, proyek10, proyek11, proyek12];

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
      
     
        {/* HERO SECTION: Jasa Pembuatan Mezanine */}
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
              Jasa Pembuatan Mezanine Besi Profesional & Kokoh
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8">
              Solusi tambahan ruang tanpa renovasi besar untuk rumah, gudang, toko, cafe, hingga bangunan komersial. 
              Mezanine custom dengan konstruksi kuat, desain modern, dan pengerjaan rapi dari Nemu Workshop.
            </p>

            <a
              href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20jasa%20pembuatan%20mezanine%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
              onClick={() => {
                fbq('track', 'Contact');
                return gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20jasa%20pembuatan%20mezanine%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F');
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition"
            >
              <FaWhatsapp size={24} /> Konsultasi Gratis Sekarang
            </a>

          </div>
        </motion.section>





      {/* KENAPA PILIH MEZANINE BESI */}
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
                src={proyek11}
                alt="Contoh pemasangan mezanine besi"
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
              Kenapa Memilih Mezanine Besi?
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Mezanine besi menjadi solusi ideal untuk menambah area tanpa perlu renovasi besar. 
              Cocok digunakan untuk gudang, toko, cafe, workshop, hingga rumah tinggal karena 
              konstruksinya kuat, hemat ruang, dan tampil modern.
            </p>

            <ul className="space-y-5 text-lg">
              {[
                "Menambah ruang tanpa memperluas bangunan",
                "Konstruksi kokoh dan tahan beban berat",
                "Cocok untuk gudang, toko, cafe, dan rumah",
                "Desain modern dan bisa custom sesuai kebutuhan"
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


        {/* JENIS & APLIKASI MEZANINE BESI */}
        <section className="bg-[#0D2C40] text-white py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Jenis & Aplikasi Mezanine Besi
            </h2>

            <p className="text-lg md:text-xl text-center text-white/80 max-w-3xl mx-auto mb-14">
              Mezanine besi menjadi solusi populer untuk menambah area tanpa perlu renovasi besar. 
              Cocok digunakan untuk rumah, gudang, kantor, hingga area komersial karena kuat, fleksibel, 
              dan mampu memaksimalkan ruang kosong secara efisien.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Gudang & Warehouse",
                  desc: "Menambah area penyimpanan tanpa perlu memperluas bangunan utama.",
                  icon: "🏭",
                },
                {
                  title: "Ruko & Toko",
                  desc: "Dimanfaatkan sebagai area display produk, stok barang, atau ruang kerja tambahan.",
                  icon: "🏬",
                },
                {
                  title: "Kantor",
                  desc: "Membuat area kerja tambahan dengan desain industrial modern yang efisien.",
                  icon: "💼",
                },
                {
                  title: "Cafe & Restoran",
                  desc: "Memberikan seating area tambahan dengan tampilan estetik dan lebih menarik.",
                  icon: "☕",
                },
                {
                  title: "Rumah Tinggal",
                  desc: "Cocok untuk kamar tambahan, ruang santai, atau area kerja minimalis.",
                  icon: "🏠",
                },
                {
                  title: "Workshop & Pabrik",
                  desc: "Membantu memaksimalkan area produksi dan penyimpanan alat kerja.",
                  icon: "🛠️",
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -6 }}
                  transition={{ type: "spring", stiffness: 250, damping: 18 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-white cursor-pointer"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>

                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-white/80 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      
      {/* Galeri */}
        <motion.section className="py-16 px-4 md:px-8 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Contoh Proyek Pembuatan Mezanin Besi Nemu Workshop 
          </h2>
          <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-12">
            Lihat dokumentasi pemasangan pintu kaca floor hinge dari Nemu Workshop di berbagai bangunan seperti gedung perkantoran, hotel, ruko, dan showroom. Semua proses dikerjakan oleh tim profesional dengan hasil rapi dan presisi.
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
              <h2 className="text-4xl font-bold mb-8">Proses Pemesanan Mezzanine</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-left">
                
                {/* Gambar dan Paragraf */}
          <div className="text-center md:text-left">
            <img
              src={pesananimg}
              alt="Konsultasi pemesanan pintu sliding aluminium"
              className="rounded-lg shadow-lg mb-6 mx-auto sm:max-w-[250px] md:max-w-[400px] lg:max-w-[400px] h-auto"
            />                              
            <p className="text-white/90 leading-relaxed mb-4">
              Kami memberikan <span className="font-semibold text-white">layanan konsultasi, survey, hingga pemasangan Mezzanine</span> dengan proses yang transparan dan profesional. Cocok untuk rumah minimalis maupun bangunan komersial.
            </p>
            <a
              href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
              onClick={() => {
                fbq('track', 'Contact');
                return gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F');
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white px-6 py-3 rounded-lg text-base font-semibold transition mx-auto"
            >
              <FaWhatsapp size={20} className="mb-[1px]" /> Konsultasi Sekarang
            </a>

          </div>
      {/* Langkah-langkah */}
      <div className="grid gap-6">
        {[
          {
            id: "01",
            title: "Hubungi Kami",
            desc: "Diskusikan kebutuhan Mezzanine Anda melalui WhatsApp atau telepon.",
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
            desc: "Mezzanine diproduksi dan dipasang oleh tim berpengalaman dari Nemu Workshop.",
          },
        ].map((step) => (
          <motion.div
            key={step.id}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-white/10 text-white border border-white/20 rounded-xl p-5 shadow-sm backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold flex items-center gap-3">
              <span className="bg-white text-[#0D2C40] font-bold px-3 py-1 rounded-full">{step.id}</span>
              {step.title}
            </h3>
            <p className="mt-2 text-white/90">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

  
      {/* Testimoni Klien - Mezanin Besi */}
      <section className="bg-white py-20 px-4 md:px-8 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Testimoni Klien Pembuatan Mezanin Besi
          </h2>

          <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4">
            {[
              {
                name: "Rizky Pratama",
                job: "Pemilik Gudang Sparepart, Bekasi",
                message:
                  "Mezanin besi dari Nemu Workshop bikin area gudang kami jauh lebih maksimal. Struktur kokoh dan pengerjaannya rapi.",
              },
              {
                name: "Lina Marlina",
                job: "Owner Cafe Industrial, Jakarta Selatan",
                message:
                  "Konsep cafe jadi lebih estetik dengan tambahan mezanin. Tim Nemu juga membantu menyesuaikan desain dengan interior kami.",
              },
              {
                name: "Hendra Gunawan",
                job: "Pemilik Workshop, Tangerang",
                message:
                  "Awalnya ruang workshop terasa sempit, sekarang jauh lebih efisien setelah dibuatkan mezanin besi oleh Nemu Workshop.",
              },
              {
                name: "Veronika Ayu",
                job: "Interior Designer, Jakarta Pusat",
                message:
                  "Saya sering rekomendasikan Nemu Workshop untuk proyek mezanin klien karena hasil finishing dan detail konstruksinya bagus.",
              },
              {
                name: "Fajar Ramadhan",
                job: "Pemilik Toko Fashion, Depok",
                message:
                  "Mezanin tambahan sangat membantu untuk area penyimpanan stok barang. Konstruksinya kuat dan tetap terlihat modern.",
              },
              {
                name: "Yohana Widya",
                job: "Pemilik Rumah Minimalis, Bogor",
                message:
                  "Rumah jadi punya ruang tambahan tanpa renovasi besar. Proses pengerjaan cepat dan hasilnya sesuai ekspektasi.",
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
              Lihat Lokasi Nemu Workshop di Google Maps
            </a>
          </div>
        </div>
      </section>


    
        {/* CTA Akhir – Mezanin Besi */}
        <section className="bg-white text-gray-900 py-20 px-4 md:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Siap Menambah Ruang dengan Mezanin Besi yang Kokoh?
            </h2>

            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Maksimalkan area rumah, gudang, cafe, workshop, atau bangunan komersial Anda dengan 
              <strong> konstruksi mezanin besi custom </strong>
              dari <strong>Zen Workshop</strong>. Dikerjakan oleh tim profesional dengan desain presisi, struktur kuat, dan tampilan modern sesuai kebutuhan ruang Anda.
            </p>

            <a
              href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20jasa%20pembuatan%20mezanin%20besi%20dari%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
              onClick={() => {
                fbq('track', 'Contact');
                return gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20jasa%20pembuatan%20mezanin%20besi%20dari%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F');
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white px-6 py-3 rounded-lg text-base font-semibold transition"
            >
              <FaWhatsapp size={20} /> Konsultasi Gratis via WhatsApp
            </a>
          </div>
        </section>

    </>
  );
}
