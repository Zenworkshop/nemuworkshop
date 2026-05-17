"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { CheckCircle } from "lucide-react";

import proyek1 from "../assets/ksa/KSA1.jpg";
import proyek2 from "../assets/ksa/KSA2.png";
import proyek3 from "../assets/ksa/KSA3.png";
import proyek4 from "../assets/ksa/KSA4.jpg";
import proyek5 from "../assets/ksa/KSA5.png";
import proyek6 from "../assets/ksa/KSA6.png";
import proyek7 from "../assets/ksa/KSA7.jpg";
import proyek8 from "../assets/ksa/KSA8.png";
import proyek9 from "../assets/ksa/KSA9.png";
import proyek10 from "../assets/ksa/KSA10.png";
import proyek11 from "../assets/ksa/KSA11.png";
import proyek12 from "../assets/ksa/KSA12.jpg";
import proyek13 from "../assets/ksa/KSA13.png";
import proyek14 from "../assets/ksa/KSA14.jpg";
import proyek15 from "../assets/ksa/KSA15.png";
import proyek16 from "../assets/ksa/KSA16.png";
import proyek17 from "../assets/ksa/KSA17.png";
import proyek18 from "../assets/ksa/KSA18.jpg";
import proyek19 from "../assets/ksa/KSA19.png";
import proyek20 from "../assets/ksa/KSA20.jpg";
import proyek21 from "../assets/ksa/KSA21.png";
import proyek22 from "../assets/ksa/KSA22.png";
import proyek23 from "../assets/ksa/KSA23.png";
import proyek24 from "../assets/ksa/KSA24.png";
import proyek25 from "../assets/ksa/KSA25.jpg";
import proyek26 from "../assets/ksa/KSA26.png";
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

const galleryImages = [proyek1, proyek2, proyek3, proyek4, proyek5,
  proyek6, proyek7, proyek8, proyek9, proyek10,
  proyek11, proyek12, proyek13, proyek14, proyek15,
  proyek16, proyek17, proyek18, proyek19, proyek20,
  proyek21, proyek22, proyek23, proyek24, proyek25,
  proyek26];

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
      
     {/* HERO SECTION: Kitchen Set Aluminium */}
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
              Kitchen Set Aluminium Anti Rayap & Tahan Lama – Solusi Dapur Modern
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Bosan dengan kitchen set kayu yang cepat rusak, lembab, atau kena rayap? <strong>Zen Workshop</strong> hadir dengan layanan pembuatan <strong>kitchen set aluminium custom</strong> yang tahan air, mudah dibersihkan, dan tampil elegan untuk segala tipe dapur.
            </p>
            <a
              href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
              onClick={() => {
                fbq('track', 'Contact');
                return gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F');
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition"
            >
              <FaWhatsapp size={24} /> Konsultasi Kitchen Set Sekarang
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
                src={proyek1}
                alt="Contoh kitchen set aluminium custom"
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
              Kenapa Harus Pilih Kitchen Set Aluminium?
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Kitchen set aluminium adalah solusi cerdas untuk dapur masa kini. Dengan material yang <strong>tahan rayap, tidak berkarat, dan anti lembab</strong>, kitchen set ini cocok untuk dapur aktif dan hunian tropis di Indonesia.
            </p>

            <ul className="space-y-5 text-lg">
              {[
                "Tahan lama dan tidak lapuk – cocok untuk jangka panjang",
                "Anti rayap & tahan lembab – ideal untuk iklim tropis",
                "Tampilan modern dengan banyak pilihan warna dan motif",
                "Mudah dibersihkan, tidak menyerap noda dan bau",
                "Material ramah lingkungan & tidak memerlukan cat ulang",
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


      {/* SECTION: Desain & Finishing Kitchen Set - Versi Background Biru Tua */}
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
                Pilihan Desain & Finishing Kitchen Set Aluminium
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Tersedia berbagai desain kitchen set aluminium modern yang bisa disesuaikan dengan kebutuhan dan gaya dapur Anda. Mulai dari warna netral hingga motif kayu yang alami, semuanya bisa dikustom sesuai selera.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Warna Putih Minimalis",
                  desc: "Memberi kesan bersih dan luas, cocok untuk dapur kecil atau desain Scandinavian.",
                  image: proyek20,
                },
                {
                  title: "Motif Kayu Elegan",
                  desc: "Alternatif estetika kayu tanpa takut rayap, tampil natural dan hangat.",
                  image: proyek5,
                },
                {
                  title: "Hitam Doff Modern",
                  desc: "Tampilan bold dan premium, ideal untuk dapur industrial dan kontemporer.",
                  image: proyek17,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white text-gray-900 rounded-2xl shadow-md overflow-hidden"
                >
                  <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      {/* Galeri */}
        <motion.section className="py-16 px-4 md:px-8 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Galeri Proyek Kitchen Set Aluminium
          </h2>
          <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-12">
            Lihat beberapa hasil proyek kitchen set aluminium dari <strong>Zen Workshop</strong>. Semua desain kami bisa dikustom sesuai ukuran dan konsep dapur Anda.
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

        {/* SECTION: Layanan Interior Aluminium Lainnya */}
        <section className="bg-gradient-to-br from-[#0D2C40] to-[#1A4365] py-24 px-4 md:px-8 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Tidak Hanya Kitchen Set, Kami Juga Kerjakan Furnitur Aluminium Lainnya
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12">
                Zen Workshop juga melayani pembuatan berbagai jenis furnitur custom berbahan aluminium untuk seluruh bagian rumah. Desain minimalis, tahan lama, dan pastinya anti rayap.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: "Lemari Pakaian Aluminium",
                  desc: "Lemari tahan rayap dan lembab dengan desain modern, cocok untuk kamar tidur.",
                },
                {
                  title: "Kabinet Bawah Tangga",
                  desc: "Manfaatkan ruang kosong dengan kabinet aluminium yang fungsional dan rapi.",
                },
                {
                  title: "Rak Penyimpanan Serbaguna",
                  desc: "Untuk dapur, ruang laundry, atau ruang keluarga – kuat, ringan, dan estetik.",
                },
                {
                  title: "Kabinet TV Aluminium",
                  desc: "Solusi penyimpanan ruang tamu yang tahan lama dan tampil elegan.",
                },
                {
                  title: "Lemari Dapur Tambahan",
                  desc: "Cocok untuk menyimpan peralatan dapur atau stok bahan makanan, bisa disesuaikan ukuran dan warnanya.",
                },
                {
                  title: "Kabinet Cuci Piring Aluminium",
                  desc: "Praktis dan tahan air, cocok untuk dapur basah atau area outdoor rumah.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm text-white rounded-xl shadow-sm p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
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
                Proses Pemesanan Kitchen Set Aluminium
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-left">
                
                {/* Gambar dan Paragraf */}
                <div>
                  <img
                    src={pesananimg}
                    alt="Konsultasi pemesanan kitchen set aluminium"
                    className="rounded-lg shadow-lg mb-6 mx-auto md:mx-0 md:max-w-[400px] w-full h-auto"
                  />
                  <p className="text-gray-700 leading-relaxed mb-4">
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
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white px-6 py-3 rounded-lg text-base font-semibold transition"
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


      {/* Testimoni Klien - Kitchen Set Aluminium */}
        <section className="bg-white py-20 px-4 md:px-8 text-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Testimoni Klien Kitchen Set Aluminium
            </h2>

            <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4">
              {[
                {
                  name: "Ayu Pratiwi",
                  job: "Ibu Rumah Tangga, Bekasi",
                  message:
                    "Kitchen set aluminium Zen gampang dibersihin, anti rayap, dan awet banget. Masak jadi makin semangat!",
                },
                {
                  name: "Rama Ginting",
                  job: "Arsitek Interior, BSD City",
                  message:
                    "Desainnya clean dan fungsional. Klien saya puas banget dengan hasilnya. Kualitas materialnya oke!",
                },
                {
                  name: "Putri Handayani",
                  job: "Pemilik Kost Eksklusif, Jakarta Selatan",
                  message:
                    "Kitchen set Zen Workshop bikin pantry kost saya tampil mewah tapi tetap tahan lama dan aman dipakai bersama.",
                },
                {
                  name: "Budi Santosa",
                  job: "Developer Rumah Cluster, Depok",
                  message:
                    "Zen Workshop selalu tepat waktu dan rapi. Semua unit cluster saya pakai kitchen set aluminium dari sini.",
                },
                {
                  name: "Nina Kartika",
                  job: "Karyawan Swasta, Tangerang",
                  message:
                    "Dulu dapur saya sempit dan gelap, sekarang jadi modern dan terang banget berkat kitchen set aluminium Zen.",
                },
                {
                  name: "David Mahesa",
                  job: "Content Creator Kuliner, Bogor",
                  message:
                    "Dapur saya sekarang cocok banget buat shooting. Estetik, kuat, dan pencahayaan alami makin maksimal.",
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



        {/* FAQ - Kitchen Set Aluminium */}
          <section className="bg-[#0D2C40] py-20 px-4 md:px-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-10">FAQ Kitchen Set Aluminium</h2>

              <div className="space-y-6 text-left">
                {[
                  {
                    question: "Apa kelebihan kitchen set aluminium dibanding kayu?",
                    answer:
                      "Kitchen set aluminium lebih tahan lama, anti rayap, tidak mudah lembab, dan mudah dibersihkan. Sangat cocok untuk dapur modern dengan tingkat kelembaban tinggi.",
                  },
                  {
                    question: "Apakah kitchen set aluminium tahan panas dan air?",
                    answer:
                      "Ya. Bahan aluminium tidak menyerap air dan tahan terhadap panas, sehingga sangat ideal digunakan di area dapur yang sering terpapar uap, minyak, dan suhu tinggi.",
                  },
                  {
                    question: "Bisa nggak pesan kitchen set aluminium custom sesuai ukuran dapur?",
                    answer:
                      "Tentu bisa. Kami melayani pembuatan kitchen set aluminium custom sesuai layout dapur Anda, termasuk desain laci, kabinet atas-bawah, dan pilihan warna/motif.",
                  },
                  {
                    question: "Berapa lama proses pembuatan kitchen set aluminium?",
                    answer:
                      "Proses produksi rata-rata memakan waktu 7–14 hari kerja, tergantung ukuran, desain, dan tingkat kerumitan pengerjaan.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white/10 border border-white/20 rounded-xl p-5 shadow-sm backdrop-blur-sm transition"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-white">{item.question}</h3>
                    <p className="text-white/90 leading-relaxed">{item.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>




     {/* CTA Akhir – Kitchen Set Aluminium */}
        <section className="bg-white text-gray-900 py-20 px-4 md:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Siap Ubah Dapur Jadi Lebih Modern & Awet?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Wujudkan dapur impian Anda dengan <strong>kitchen set aluminium custom dari Zen Workshop</strong>. Tahan lama, anti rayap, dan mudah dibersihkan—cocok untuk hunian modern di area Jabodetabek.
            </p>
            <a
              href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
              onClick={() => {
                fbq('track', 'Contact');
                return gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F');
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
            >
              <FaWhatsapp size={24} /> Konsultasi Gratis via WhatsApp
            </a>

          </div>
        </section>







    </>
  );
}
