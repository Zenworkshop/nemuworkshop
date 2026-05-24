"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { CheckCircle } from "lucide-react";

import proyek1 from "../assets/pk/pk1.jpg";
import proyek2 from "../assets/pk/pk2.jpg";
import proyek3 from "../assets/pk/pk3.jpg";
import proyek4 from "../assets/pk/pk4.jpg";
import proyek5 from "../assets/pk/pk5.jpg";
import proyek6 from "../assets/pk/pk6.jpg";
import proyek7 from "../assets/pk/pk7.jpg";
import proyek8 from "../assets/pk/pk8.jpg";
import proyek9 from "../assets/pk/pk9.jpg";
import proyek10 from "../assets/pk/pk10.jpg";
import proyek11 from "../assets/pk/pk11.jpg";
import proyek12 from "../assets/pk/pk12.jpg";
import proyek13 from "../assets/pk/pk13.jpg";
import proyek14 from "../assets/pk/pk14.jpg";
import proyek15 from "../assets/pk/pk15.jpg";
import proyek16 from "../assets/pk/pk16.jpg";
import proyek17 from "../assets/pk/pk17.jpg";
import proyek18 from "../assets/pk/pk18.jpg";
import proyek19 from "../assets/pk/pk19.jpg";
import proyek20 from "../assets/pk/pk20.jpg";
import proyek21 from "../assets/pk/pk21.jpg";
import proyek22 from "../assets/pk/pk22.jpg";
import proyek23 from "../assets/pk/pk23.jpg";
import proyek24 from "../assets/pk/pk24.jpg";
import proyek25 from "../assets/pk/pk25.jpg";
import proyek26 from "../assets/pk/pk26.jpg";
import pesananimg from "../assets/sectionn.png";
import solutiomimg from "../assets/partisi.jpg";
import partisi1 from "../assets/partisi.jpg";
import partisi3 from "../assets/partisikacaframeless.jpg";
import partisi5 from "../assets/partisikacarusak.jpg";
import partisi6 from "../assets/minimalisframe.jpg";
import partisi7 from "../assets/pkgita.jpg";



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

const galleryImages = [proyek1, proyek2, proyek3, proyek4, proyek5, proyek6, proyek7, proyek8, proyek9, proyek10,
  proyek11, proyek12, proyek13, proyek14, proyek15, proyek16, proyek17, proyek18, proyek19, proyek20,
  proyek21, proyek22, proyek23, proyek24, proyek25, proyek26];

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
      
     {/* HERO SECTION: Partisi Kaca Aluminium */}
<motion.section
  className="bg-gradient-to-br from-[#0D2C40] to-[#1A4365] text-white py-28 px-6 md:px-12 text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }}
>
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
      Jasa Pembuatan Railing Tangga & Balkon Minimalis Modern
    </h1>
    <p className="text-lg md:text-xl text-white/90 mb-8">
      Hadirkan tampilan rumah yang lebih aman, elegan, dan modern dengan railing tangga serta balkon berkualitas. Cocok untuk rumah tinggal, apartemen, hingga bangunan komersial dengan desain custom yang kokoh, estetik, dan menyesuaikan konsep bangunan Anda.
    </p>
      <a
        href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
        onClick={() => {
          fbq('track', 'Contact');
          return gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F');
        }}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-500 text-white px-5 py-2.5 rounded-lg text-base font-semibold shadow-md transition"
      >
        <FaWhatsapp size={20} /> Konsultasi via WhatsApp
      </a>


  </div>
</motion.section>

{/* SECTION: Keunggulan Kitchen Set Aluminium */}
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
                src={partisi5}
                alt="Contoh Partisi kaca rusak"
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
              Railing Tangga & Balkon Lama Bikin Tampilan Rumah Terlihat Kuno?
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Banyak rumah terasa kurang modern dan kurang aman karena penggunaan railing yang sudah usang, berkarat, atau desainnya tidak sesuai dengan konsep rumah masa kini. Ini jadi salah satu detail penting yang sering mempengaruhi tampilan keseluruhan rumah.
            </p>

            <ul className="space-y-5 text-lg">
              {[
                "Railing lama terlihat berkarat dan kurang estetik",
                "Desain tangga atau balkon terasa ketinggalan zaman",
                "Rumah terlihat kurang modern dan kurang elegan",
                "Khawatir keamanan railing sudah tidak kokoh",
                "Bingung memilih model railing yang cocok untuk rumah minimalis",
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

    {/* PROBLEM SECTION: Tulisan Kiri, Gambar Kanan */}
      <motion.section
        className="bg-[#0D2C40] text-white py-24 px-4 md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Tulisan - Kiri */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              Partisi Kaca Aluminium, Solusi Sekat Modern Tanpa Bikin Sempit
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Ingin memisahkan ruangan tanpa bikin ruang terasa gelap atau sempit? Partisi kaca aluminium jadi solusi modern yang tetap estetik dan efisien.
            </p>

            <div className="space-y-5">
              {[
                "Transparan tapi tetap terstruktur",
                "Cahaya tetap masuk, ruangan terasa luas",
                "Desain bisa custom sesuai kebutuhan"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-green-400 text-2xl mt-1">✅</span>
                  <p className="text-xl font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gambar - Kanan (Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full h-full rounded-2xl overflow-hidden shadow-lg md:order-last"
          >
            <img
              src={solutiomimg}
              alt="Contoh partisi kaca aluminium"
              className="w-full h-[220px] md:h-[400px] object-cover"
            />
          </motion.div>

        </div>
      </motion.section>



    

     {/* SECTION: Jenis-Jenis Partisi Kaca Aluminium */}
        <section className="bg-white py-24 px-4 md:px-8 text-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 leading-snug">
              Pilihan Model Partisi yang Bisa Kamu Custom
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Partisi Kaca Frameless",
                  desc: "Tampilan bersih dan modern tanpa rangka terlihat, cocok untuk ruang meeting atau kantor minimalis.",
                  img: partisi3
                },
                {
                  name: "Partisi Kaca Minimal Frame",
                  desc: "Rangka tipis dengan kesan ringan dan elegan, tetap memberi struktur tanpa mengganggu cahaya alami.",
                  img: partisi6
                },
                {
                  name: "Partisi Kaca Aluminium Hitam",
                  desc: "Desain industrial modern yang tegas, cocok untuk kantor kreatif atau kafe dengan aksen maskulin.",
                  img: partisi1
                },
                {
                  name: "Partisi Kaca Buram (Privacy)",
                  desc: "Memberi privasi tanpa mengorbankan pencahayaan, ideal untuk ruang rapat atau ruang pribadi.",
                  img: partisi7
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl overflow-hidden shadow-md bg-white cursor-pointer transition-transform duration-300"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


         {/* Galeri */}
            <motion.section className="py-16 px-4 md:px-8 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Galeri Proyek Partisi Kaca Aluminium
              </h2>
              <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-12">
                Lihat beberapa hasil pemasangan <strong>partisi kaca aluminium custom</strong> dari <strong>Zen Workshop</strong>. Semua partisi dibuat sesuai layout ruangan, kebutuhan privasi, dan gaya interior yang diinginkan.
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



    {/* SECTION: Kenapa Pilih Zen Workshop? */}
      <section className="bg-gradient-to-br from-[#0D2C40] to-[#1A4365] py-24 px-4 md:px-8 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Kenapa Pilih Zen Workshop?
          </motion.h2>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Kami hadir sebagai partner tepercaya untuk pembuatan partisi kaca aluminium dengan hasil rapi, cepat, dan sesuai kebutuhan ruangan Anda.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 text-left">
            {[
              {
                title: "🔧 Pemasangan Presisi & Cepat",
                desc: "Dikerjakan oleh tim berpengalaman dengan proses pemasangan yang efisien dan minim gangguan.",
              },
              {
                title: "📐 Survei & Desain Layout Terlebih Dahulu",
                desc: "Kami bantu ukur langsung ke lokasi dan menyusun desain yang sesuai fungsi dan tampilan ruang.",
              },
              {
                title: "🏢 Proyek Kantor, Toko, dan Hunian",
                desc: "Zen Workshop telah menyelesaikan ratusan proyek mulai dari rumah tinggal hingga ruang komersial.",
              },
              {
                title: "⭐ Lebih dari 100+ Proyek Partisi Selesai",
                desc: "Portofolio luas kami membuktikan kualitas dan kepercayaan yang terus tumbuh dari klien-klien kami.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 border border-white/20 p-6 rounded-xl shadow-sm hover:shadow-md transition backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/90">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


        {/* Tahapan Pemesanan */}
          <section className="bg-white text-gray-900 py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">
                Proses Pemesanan Partisi Kaca Aluminium
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-left">
                
                {/* Gambar dan Paragraf */}
          <div className="text-center md:text-left">
            <img
              src={pesananimg}
              alt="Konsultasi pemesanan kitchen set aluminium"
              className="w-[220px] sm:w-[280px] md:w-[500px] h-auto mx-auto md:mx-0 rounded-lg shadow-lg mb-6"
            />                                        
            <p className="text-gray-700 leading-relaxed mb-4 max-w-md mx-auto md:mx-0">
              Kami memberikan <span className="font-semibold text-gray-900">layanan konsultasi, survey, hingga pemasangan kitchen set aluminium</span> dengan proses yang profesional dan transparan. Cocok untuk dapur rumah tinggal, apartemen, maupun bisnis komersial.
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
              <FaWhatsapp size={20} className="mb-[1px]" /> Konsultasi Sekarang
            </a>

          </div>


                {/* Langkah-langkah */}
                <div className="grid gap-6">
                  {[
                    {
                      id: "01",
                      title: "Hubungi Kami",
                      desc: "Diskusikan kebutuhan kitchen set aluminium Anda melalui WhatsApp atau telepon.",
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
                      title: "Produksi & Pemasangan",
                      desc: "Kitchen set aluminium diproduksi dan dipasang oleh tim berpengalaman dari Zen Workshop.",
                    },
                  ].map((step) => (
                    <motion.div
                      key={step.id}
                      whileHover={{ scale: 1.03, y: -4 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="bg-gray-100 text-gray-900 border border-gray-200 rounded-xl p-5 shadow-sm"
                    >
                      <h3 className="text-xl font-semibold flex items-center gap-3">
                        <span className="bg-[#0D2C40] text-white font-bold px-3 py-1 rounded-full">{step.id}</span>
                        {step.title}
                      </h3>
                      <p className="mt-2 text-gray-700">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>


      {/* Testimoni Klien - Partisi Kaca Aluminium */}
    <section className="bg-white py-20 px-4 md:px-8 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Testimoni Klien Partisi Kaca Aluminium
        </h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4">
          {[
            {
              name: "Andi Maulana",
              job: "Pemilik Rumah Modern, Tangerang",
              message:
                "Partisi kaca dari Zen bikin ruang tamu dan ruang kerja tetap terang tanpa terasa sempit. Pemasangan cepat dan rapi!",
            },
            {
              name: "Maria Lestari",
              job: "Owner Cafe Minimalis, Jakarta Barat",
              message:
                "Tampilan depan cafe jadi lebih menarik. Partisi kacanya estetik dan tetap memberi batas ruangan tanpa bikin sumpek.",
            },
            {
              name: "Raka Pratama",
              job: "Interior Designer, Bandung",
              message:
                "Saya pakai Zen Workshop untuk proyek kantor klien. Finishing-nya rapi, hasilnya memuaskan. Klien juga happy!",
            },
            {
              name: "Sylvia Yuliani",
              job: "Karyawan Swasta, Jakarta Selatan",
              message:
                "Ruang kerja di rumah jadi lebih terorganisir tanpa kehilangan cahaya. Pilihan yang sangat tepat.",
            },
            {
              name: "Bagas Ramdhan",
              job: "Developer Properti, Bekasi",
              message:
                "Partisi kaca aluminium dari Zen bikin unit show house terlihat mewah. Materialnya solid dan presisi banget.",
            },
            {
              name: "Fauzia Rahmat",
              job: "Arsitek Freelance, Jogja",
              message:
                "Saya rekomendasikan ke semua klien. Zen Workshop selalu bisa custom sesuai desain dan layout ruangan.",
            },
          ].map((testi, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-[300px] bg-white text-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-yellow-500 mb-2">★★★★★</p>
              <p className="italic mb-4">“{testi.message}”</p>
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
            className="inline-block bg-[#0D2C40] hover:bg-[#133C56] text-white px-6 py-3 rounded-lg text-base font-semibold transition"
          >
            Lihat Lokasi Zen Workshop di Google Maps
          </a>
        </div>
      </div>
    </section>

      {/* FAQ Partisi Kaca Aluminium */}
          <section className="bg-[#0D2C40] text-white py-16 px-4 md:px-6">
            <div className="max-w-6xl mx-auto text-center">

              {/* Judul */}
              <h2 className="text-4xl font-bold mb-6">
                FAQ Partisi Kaca Aluminium
              </h2>

              {/* Grid: Gambar & Konten */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:items-stretch">

                {/* Gambar - Kanan (Desktop) */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="w-full h-full rounded-2xl overflow-hidden shadow-lg md:order-last"
                    >
                      <img
                        src={proyek19}
                        alt="Contoh partisi kaca aluminium"
                        className="w-full h-[220px] md:h-[400px] object-cover"
                      />
                    </motion.div>

                {/* Konten Teks */}
                <div className="flex flex-col justify-center space-y-6 text-center md:text-left">

                  {[
                    {
                      question: "Apakah partisi kaca aluminium cukup kuat dan aman?",
                      answer:
                        "Sangat aman. Menggunakan kaca tempered dan rangka aluminium yang kuat, sehingga tahan benturan dan tidak mudah rusak.",
                    },
                    {
                      question: "Apakah bisa custom ukuran dan bentuk sesuai ruangan?",
                      answer:
                        "Tentu bisa. Kami melayani pembuatan partisi kaca custom sesuai layout dan kebutuhan ruangan Anda.",
                    },
                    {
                      question: "Cocok nggak untuk ruang kantor atau cafe?",
                      answer:
                        "Sangat cocok! Banyak klien kami dari sektor komersial seperti kantor, cafe, dan ruang meeting.",
                    },
                    {
                      question: "Berapa lama proses produksi dan pemasangannya?",
                      answer:
                        "Proses pengerjaan rata-rata 5–10 hari kerja tergantung desain dan lokasi pemasangan.",
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


      {/* CTA Akhir – Partisi Kaca Aluminium */}
    <section className="bg-white text-gray-900 py-20 px-4 md:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Siap Ubah Ruangan Jadi Lebih Modern?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-700">
          Wujudkan tampilan ruang kantor atau rumah yang terang dan estetik dengan <strong>partisi kaca aluminium</strong> dari Zen Workshop. Estetik, fungsional, dan bisa custom sesuai kebutuhan layout.
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
          <FaWhatsapp size={18} /> Konsultasi Sekarang
        </a>


      </div>
    </section>
    </>
  );
}
