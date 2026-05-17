"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { CheckCircle } from "lucide-react";

import proyek1 from "../assets/kh/kh1.jpg";
import proyek2 from "../assets/kh/kh2.jpg";
import proyek3 from "../assets/kh/kh3.jpg";
import proyek4 from "../assets/kh/kh4.jpg";
import proyek5 from "../assets/kh/kh5.jpg";
import proyek6 from "../assets/kh/kh6.jpg";
import proyek7 from "../assets/kh/kh7.jpg";
import proyek8 from "../assets/kh/kh8.jpg";
import proyek9 from "../assets/kh/kh9.jpg";
import proyek10 from "../assets/kh/kh10.jpg";
import proyek11 from "../assets/kh/kh11.jpg";
import proyek12 from "../assets/kh/kh12.jpg";
import proyek13 from "../assets/kh/kh13.webp";
import proyek14 from "../assets/kh/kh14.jpg";
import proyek15 from "../assets/kh/kh15.jpg";
import proyek16 from "../assets/kh/kh16.jpg";
import proyek17 from "../assets/kh/kh17.jpg";
import proyek18 from "../assets/kh/kh18.webp";
import proyek19 from "../assets/kh/kh19.jpg";
import proyek20 from "../assets/kh/kh20.jpeg";
import proyek21 from "../assets/kh/kh21.jpg";
import proyek22 from "../assets/kh/kh22.jpg";
import proyek23 from "../assets/kh/kh23.webp";
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
  proyek11, proyek12, proyek14, proyek15,
  proyek16, proyek17, proyek18, proyek19, proyek20,
  proyek21, proyek22, proyek23];

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
      
     {/* HERO SECTION: Kandang Kucing Aluminium */}
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
              Kandang Kucing Aman & Estetik dari Aluminium
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Solusi kandang kucing minimalis, tahan lama, dan cocok untuk indoor-outdoor.
              Dibuat dari material aluminium anti karat yang mudah dibersihkan dan nyaman
              untuk peliharaan kesayangan Anda.
            </p>
            <a
              href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
              onClick={() => {
                fbq('track', 'Contact');
                return gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F');
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition"
            >
              <FaWhatsapp size={24} /> Konsultasi via WhatsApp
            </a>

          </div>
        </motion.section>





    {/* SECTION: Kenapa Pilih Kandang Kucing Aluminium */}
      <section className="bg-white py-24 px-4 md:px-8 text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Kenapa Pilih Kandang Kucing Aluminium?
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Kandang kucing dari aluminium memberikan kombinasi sempurna antara daya tahan, estetika, dan kenyamanan. Cocok untuk pemilik kucing rumahan, pet hotel, maupun klinik hewan yang butuh solusi kandang jangka panjang.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: "🐾",
                title: "Anti Karat & Anti Rayap",
                desc: "Material aluminium tidak menyerap air dan tidak bisa dimakan rayap—lebih awet daripada kayu atau besi biasa.",
              },
              {
                icon: "💧",
                title: "Tahan Air & Mudah Dibersihkan",
                desc: "Permukaan licin dan kuat membuat pembersihan kandang jauh lebih praktis, cocok untuk kucing yang aktif atau mudah kotor.",
              },
              {
                icon: "🎨",
                title: "Desain Custom & Estetik",
                desc: "Bisa disesuaikan ukuran, warna, dan bentuknya agar selaras dengan ruang rumah maupun area outdoor Anda.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    {/* SECTION: Cocok untuk Siapa? */}
      <section className="bg-gradient-to-br from-[#0D2C40] to-[#1A4365] py-24 px-4 md:px-8 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Kandang Kucing Aluminium Ini Cocok untuk Siapa?
          </motion.h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Dirancang fleksibel dan kuat, kandang aluminium dari Zen Workshop cocok untuk berbagai kebutuhan—mulai dari penggunaan pribadi di rumah hingga kebutuhan komersial.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Pemilik Kucing Rumah Indoor",
                desc: "Solusi aman dan nyaman untuk menjaga kucing tetap rapi di dalam rumah tanpa merusak interior.",
              },
              {
                title: "Pet Hotel & Penitipan Kucing",
                desc: "Desain modular dan estetik, cocok untuk tempat penitipan hewan yang butuh kandang kuat dan higienis.",
              },
              {
                title: "Peternak / Breeder",
                desc: "Tersedia ukuran besar dan sistem bertingkat yang ideal untuk mengatur banyak kucing sekaligus.",
              },
              {
                title: "Klinik Hewan / Grooming",
                desc: "Mudah dibersihkan dan tidak menyerap bau – menjaga standar kebersihan di lingkungan profesional.",
              },
              {
                title: "Kost & Apartemen dengan Kucing",
                desc: "Hemat tempat dan tetap estetik – ideal untuk ruangan terbatas yang tetap ingin nyaman untuk hewan peliharaan.",
              },
              {
                title: "Pecinta Kucing yang Sering Bepergian",
                desc: "Cocok untuk Anda yang butuh kandang aman dan praktis saat harus menitipkan kucing ke kerabat atau pengasuh.",
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

      {/* Galeri */}
        <motion.section className="py-16 px-4 md:px-8 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Galeri Proyek Kandang Kucing Aluminium
          </h2>
          <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-12">
            Lihat beberapa hasil proyek kandang kucing aluminium dari <strong>Zen Workshop</strong>. Semua kandang bisa dikustom sesuai kebutuhan, ukuran ruang, dan kenyamanan si mpus Anda.
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

        {/* SECTION: Pilihan Model & Ukuran Kandang */}
          <section className="bg-gradient-to-br from-[#0D2C40] to-[#1A4365] py-24 px-4 md:px-8 text-white">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pilihan Model & Ukuran Kandang Kucing Aluminium
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto">
                Zen Workshop menyediakan berbagai pilihan <strong>model kandang aluminium custom</strong> yang bisa disesuaikan dengan kebutuhan, jumlah kucing, dan lokasi pemasangan di rumah Anda.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white/10 border border-white/20 text-left shadow-md rounded-xl overflow-hidden backdrop-blur-sm">
                  <thead className="bg-white/10 text-white">
                    <tr>
                      <th className="px-6 py-4 font-semibold border-b border-white/20">Model</th>
                      <th className="px-6 py-4 font-semibold border-b border-white/20">Ukuran</th>
                      <th className="px-6 py-4 font-semibold border-b border-white/20">Kapasitas</th>
                      <th className="px-6 py-4 font-semibold border-b border-white/20">Lokasi Pemasangan</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/90">
                    {[
                      {
                        model: "Single Tier",
                        ukuran: "60 x 60 x 60 cm",
                        kapasitas: "1 Kucing",
                        lokasi: "Dalam Rumah",
                      },
                      {
                        model: "Double Tier",
                        ukuran: "80 x 60 x 120 cm",
                        kapasitas: "2–3 Kucing",
                        lokasi: "Teras / Balkon",
                      },
                      {
                        model: "Stackable",
                        ukuran: "Custom",
                        kapasitas: "Fleksibel",
                        lokasi: "Grooming / Petshop",
                      },
                      {
                        model: "Sliding Door Model",
                        ukuran: "90 x 60 x 100 cm",
                        kapasitas: "1–2 Kucing",
                        lokasi: "Indoor / Outdoor",
                      },
                      {
                        model: "Outdoor Anti-Hujan",
                        ukuran: "120 x 80 x 130 cm",
                        kapasitas: "3–4 Kucing",
                        lokasi: "Halaman / Teras Tertutup",
                      },
                      {
                        model: "Portable Folding",
                        ukuran: "Custom (Foldable)",
                        kapasitas: "1–2 Kucing",
                        lokasi: "Mobilitas Tinggi / Titip Kucing",
                      },
                    ].map((row, index) => (
                      <tr key={index} className="border-t border-white/10">
                        <td className="px-6 py-4 font-medium">{row.model}</td>
                        <td className="px-6 py-4">{row.ukuran}</td>
                        <td className="px-6 py-4">{row.kapasitas}</td>
                        <td className="px-6 py-4">{row.lokasi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>


        {/* Tahapan Pemesanan */}
          <section className="bg-white text-gray-900 py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">
                Proses Pemesanan Kandang Kucing Aluminium
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


      {/* Testimoni Klien - Kandang Kucing Aluminium */}
        <section className="bg-white py-20 px-4 md:px-8 text-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Testimoni Klien Kandang Kucing Aluminium
            </h2>

            <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4">
              {[
                {
                  name: "Melati Rahma",
                  job: "Pecinta Kucing, Depok",
                  message:
                    "Sejak pakai kandang aluminium dari Zen, kucing saya jadi lebih nyaman. Kandangnya kokoh, mudah dibersihin, dan nggak makan tempat.",
                },
                {
                  name: "Drh. Yuni Ariani",
                  job: "Dokter Hewan, Jakarta Timur",
                  message:
                    "Saya pakai di klinik untuk pasien kucing rawat inap. Higienis dan tahan lama. Kucing juga terlihat lebih tenang.",
                },
                {
                  name: "Tommy Widjaja",
                  job: "Pemilik Pet Hotel, BSD City",
                  message:
                    "Desainnya profesional banget. Tamunya puas, saya juga mudah dalam maintenance. Worth every penny.",
                },
                {
                  name: "Lestari Anggraini",
                  job: "Mahasiswi & Cat Mom, Bandung",
                  message:
                    "Cocok banget buat apartemen. Ringan tapi kuat, dan kelihatan modern. Pindah-pindah juga gampang.",
                },
                {
                  name: "Andra Santosa",
                  job: "Breeder Kucing, Bekasi",
                  message:
                    "Saya pesen sistem bertingkat. Produknya presisi, kuat, dan gampang dibersihkan tiap hari.",
                },
                {
                  name: "Sari Prameswari",
                  job: "Pegawai Swasta, Bogor",
                  message:
                    "Kucing saya punya tempat baru yang lebih aman dan bersih. Terima kasih Zen Workshop!",
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


        {/* FAQ - Kandang Kucing Aluminium */}
          <section className="bg-[#0D2C40] py-20 px-4 md:px-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-10">FAQ Kandang Kucing Aluminium</h2>

              <div className="space-y-6 text-left">
                {[
                  {
                    question: "Apakah kandang kucing aluminium aman untuk kucing?",
                    answer:
                      "Sangat aman. Aluminium tidak beracun dan tahan karat, sehingga nyaman dan higienis untuk kucing Anda.",
                  },
                  {
                    question: "Bisa nggak desain kandangnya disesuaikan dengan ruang rumah?",
                    answer:
                      "Bisa banget. Kami melayani pembuatan kandang custom sesuai ukuran ruangan, jumlah kucing, dan kebutuhan mobilitas.",
                  },
                  {
                    question: "Apa kandang bisa dipakai untuk outdoor dan tidak berkarat?",
                    answer:
                      "Ya. Kandang kami dirancang tahan cuaca dan tidak berkarat, cocok untuk penggunaan di teras, balkon, atau halaman rumah.",
                  },
                  {
                    question: "Berapa lama proses produksi kandang kucing aluminium?",
                    answer:
                      "Proses pembuatan biasanya memakan waktu 7–10 hari kerja tergantung desain dan ukuran yang dipesan.",
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

     {/* CTA Akhir – Kandang Kucing Aluminium */}
      <section className="bg-white text-gray-900 py-20 px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Buat Si Mpus Punya Rumah Baru?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Wujudkan kandang ideal untuk kucing kesayangan Anda bersama <strong>Zen Workshop</strong>. Tahan lama, estetik, dan bisa custom sesuai kebutuhan ruang maupun jumlah kucing.
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
            <FaWhatsapp size={24} /> Konsultasi Kandang Sekarang
          </a>

        </div>
      </section>








    </>
  );
}
