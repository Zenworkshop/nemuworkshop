"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { CheckCircle } from "lucide-react";

import proyek1 from "../assets/pl/pl1.jpg";
import proyek2 from "../assets/pl/pl2.jpg";
import proyek3 from "../assets/pl/pl3.jpg";
import proyek4 from "../assets/pl/pl4.jpg";
import proyek5 from "../assets/pl/pl5.jpg";
import proyek6 from "../assets/pl/pl6.jpg";
import proyek7 from "../assets/pl/pl7.jpg";
import proyek8 from "../assets/pl/pl8.jpg";
import proyek9 from "../assets/pl/pl9.jpg";
import proyek10 from "../assets/pl/pl10.jpg";
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

const galleryImages = [proyek1, proyek2, proyek3, proyek4, proyek5, proyek6, proyek7, proyek8, proyek9, proyek10];

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
      
      {/* HERO */}
      <motion.section
        className="bg-[#0D2C40] text-white py-20 px-4 md:px-8 text-center w-full min-h-screen flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Jasa Pembuatan & Pemasangan Pintu Lipat Aluminium Minimalis</h1>
          <p className="text-lg md:text-xl mb-6">Solusi pintu lipat aluminium modern, hemat ruang, dan tahan lama untuk rumah maupun bangunan komersial.</p>
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
            <FaWhatsapp size={20} /> Konsultasi sekarang
          </a>


        </div>
      </motion.section>

      {/* KENAPA PILIH ALUMINIUM */}
        <section className="bg-white text-black py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            <motion.div
              className="md:col-span-7 text-left flex flex-col justify-between h-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-snug">
                Kenapa Memilih Pintu Lipat Aluminium untuk Rumah atau Bangunan Anda?
              </h2>
              <p className="text-lg md:text-xl mt-6 leading-relaxed">
                Pintu lipat aluminium adalah solusi ideal untuk hunian modern yang mengutamakan efisiensi ruang dan estetika. Dibandingkan dengan material konvensional seperti kayu atau besi, pintu lipat berbahan aluminium menawarkan daya tahan lebih tinggi, tidak berkarat, dan tampilan yang minimalis.
              </p>
              <ul className="mt-8 space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-4 text-xl font-semibold leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle size={28} className="text-blue-500" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <div className="md:col-span-5 flex items-stretch">
              <div className="w-full h-full overflow-hidden rounded-xl shadow-lg">
                <img
                  src={proyek3}
                  alt="pintu lipat aluminium"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>


                 {/* JENIS & APLIKASI */}
      <section className="bg-[#0D2C40] text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
            Jenis & Aplikasi Pintu Lipat Aluminium
          </h2>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-white/80 mb-12">
            Pintu lipat aluminium bisa digunakan untuk berbagai keperluan seperti garasi, pembatas ruangan, kamar mandi, maupun ruang komersial. Desainnya fleksibel, tahan lama, dan mudah disesuaikan dengan kebutuhan rumah modern maupun area usaha.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Garasi Rumah",
                desc: "Pintu lipat aluminium cocok untuk garasi karena tahan cuaca dan hemat ruang.",
                icon: "🚗"
              },
              {
                title: "Pembatas Ruangan",
                desc: "Ciptakan fleksibilitas antar ruangan dengan desain lipat yang minimalis.",
                icon: "🛋️"
              },
              {
                title: "Kamar Mandi",
                desc: "Anti karat dan tahan lembap, sangat cocok untuk area basah seperti kamar mandi.",
                icon: "🚿"
              },
              {
                title: "Kantor & Ruang Meeting",
                desc: "Digunakan sebagai partisi kantor yang elegan dan profesional.",
                icon: "🏢"
              },
              {
                title: "Cafe & Restoran",
                desc: "Berikan akses terbuka dan sirkulasi udara yang baik untuk ruang publik.",
                icon: "☕"
              },
              {
                title: "Toko & Showroom",
                desc: "Menampilkan area produk dengan kesan luas dan modern.",
                icon: "🛍️"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl text-white shadow-sm cursor-pointer"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Galeri */}
      <motion.section className="py-16 px-4 md:px-8 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Contoh Proyek Pintu Lipat Aluminium Zen Workshop
        </h2>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-12">
          Galeri pemasangan pintu lipat aluminium untuk berbagai kebutuhan, mulai dari rumah tinggal, kantor, hingga area komersial. Kami melayani pembuatan custom pintu lipat aluminium dengan desain minimalis dan hasil profesional di area Jabodetabek.
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
        <section className="bg-[#0D2C40] text-white py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Proses Pemesanan Pintu Lipat Aluminium</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-left">
              
              {/* Gambar dan Paragraf */}
                <div>
                  <img
                    src={pesananimg}
                    alt="Konsultasi pemesanan pintu sliding aluminium"
                    className="rounded-lg shadow-lg mb-6 mx-auto md:mx-0 w-full h-auto max-w-[250px] md:max-w-[400px]"
                  />

                  <p className="text-white/90 leading-relaxed mb-4 text-center md:text-left">
                    Kami memberikan <span className="font-semibold text-white">layanan konsultasi, survey, hingga pemasangan pintu sliding aluminium</span> dengan proses yang transparan dan profesional. Cocok untuk rumah minimalis maupun bangunan komersial.
                  </p>
                  <div className="text-center md:text-left">
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

        {/* Testimoni Klien */}
      <section className="bg-white py-20 px-4 md:px-8 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Testimoni Klien Zen Workshop
          </h2>

          <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4">
            {[ 
              {
                name: "Rina Andika",
                job: "Owner Rumah Minimalis, Bekasi",
                message: "Pintu lipat aluminium bikin rumah terasa lebih luas. Hasilnya rapi dan sesuai dengan request."
              },
              {
                name: "Ari Setiawan",
                job: "Kontraktor Interior, Jakarta",
                message: "Zen Workshop profesional dan cepat. Pemasangan pintu lipat aluminium untuk proyek kantor berjalan lancar."
              },
              {
                name: "Desi Putri",
                job: "Pemilik Cafe, BSD",
                message: "Model pintu lipat dari Zen Workshop bikin cafe saya tampil estetik dan terang alami."
              },
              {
                name: "Yudi Prasetyo",
                job: "Developer Rumah Cluster, Depok",
                message: "Proyek massal pemasangan pintu lipat aluminium sangat terbantu. Harga bersaing, kualitas mantap."
              },
              {
                name: "Citra Lestari",
                job: "Pemilik Salon, Tangerang",
                message: "Area salon jadi lebih modern dan eksklusif dengan pintu lipat aluminium custom dari Zen."
              },
              {
                name: "Bambang Herianto",
                job: "Pemilik Ruko, Jakarta Selatan",
                message: "Zen Workshop bantu ruko saya terlihat lebih luas & nyaman. Instalasi cepat dan aman."
              }
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
                 {/* FAQ Pintu Lipat Aluminium */}
<section className="bg-[#0D2C40] text-white py-16 px-4 md:px-6">
  <div className="max-w-6xl mx-auto text-center">

    {/* Judul */}
    <h2 className="text-4xl font-bold mb-6">
      FAQ Pintu Lipat Aluminium
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
          src={proyek3}
          alt="Contoh pintu lipat aluminium"
          className="w-full h-[220px] md:h-[400px] object-cover"
        />
      </motion.div>

      {/* Konten Teks */}
      <div className="flex flex-col justify-center space-y-6 text-center md:text-left">

        {[ 
          {
            question: "Apa keunggulan pintu lipat aluminium dibandingkan dengan pintu kayu atau besi?",
            answer:
              "Pintu lipat aluminium lebih tahan terhadap cuaca, tidak mudah berkarat, dan memiliki tampilan modern yang cocok untuk desain minimalis dan ruangan multifungsi.",
          },
          {
            question: "Apakah saya bisa memesan pintu lipat aluminium custom sesuai dengan ukuran rumah?",
            answer:
              "Tentu, Zen Workshop menyediakan layanan pembuatan pintu lipat aluminium custom sesuai dengan ukuran, desain, dan warna yang diinginkan untuk mencocokkan gaya interior rumah Anda.",
          },
          {
            question: "Apakah pintu lipat aluminium tahan terhadap cuaca buruk?",
            answer:
              "Ya, pintu lipat aluminium sangat tahan terhadap perubahan cuaca ekstrem, baik panas maupun hujan, sehingga sangat ideal untuk penggunaan luar ruangan seperti taman, balkon, atau akses halaman.",
          },
          {
            question: "Berapa lama waktu yang dibutuhkan untuk memproduksi dan memasang pintu lipat aluminium?",
            answer:
              "Waktu produksi rata-rata antara 7 hingga 14 hari kerja tergantung pada desain dan spesifikasi, sementara pemasangan biasanya selesai dalam waktu 1-2 hari oleh tim profesional kami.",
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



     {/* CTA Akhir – Konsultasi Gratis */}
<section className="bg-white text-gray-900 py-20 px-4 md:px-8 text-center">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">Siap Wujudkan Pintu Lipat Aluminium Impian Anda?</h2>
    <p className="text-lg md:text-xl mb-8 text-gray-700">
      Konsultasikan kebutuhan Anda bersama tim <strong>Zen Workshop</strong> dan dapatkan solusi pintu lipat aluminium yang elegan, kuat, dan sesuai desain rumah. Layanan tersedia untuk Jabodetabek dan sekitarnya.
    </p>
   <a
      href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
      onClick={() => {
        fbq('track', 'Contact');
        return gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F');
      }}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-green-600 text-white px-6 py-3 rounded-lg text-base font-semibold transition"
    >
      <FaWhatsapp size={20} /> Konsultasi Gratis via WhatsApp
    </a>

  </div>
</section>





    </>
  );
}
