"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { CheckCircle } from "lucide-react";

import proyek1 from "../assets/tangga3.jpeg";
import proyek2 from "../assets/tangga4.jpeg";
import proyek3 from "../assets/tangga5.jpeg";
import proyek4 from "../assets/tangga6.jpeg";
import proyek5 from "../assets/tangga7.jpeg";
import proyek6 from "../assets/tangga9.jpeg";
import proyek7 from "../assets/tangga10.jpeg";
import proyek8 from "../assets/tangga13.jpg";
import proyek9 from "../assets/tangga14.jpg";
import proyek10 from "../assets/tangga.jpg";
import proyek11 from "../assets/tangga15.webp";
import proyek12 from "../assets/tangga16.webp";
import proyek13 from "../assets/tangga17.webp";
import proyek14 from "../assets/tangga18.webp";
import proyek15 from "../assets/tangga19.webp";
import proyek16 from "../assets/tangga20.jpg";
import proyek17 from "../assets/tangga21.jpg";
import proyek18 from "../assets/tangga22.png";
import proyek19 from "../assets/tangga23.png";
import proyek20 from "../assets/tangga24.png";
import proyek21 from "../assets/tangga25.png";
import proyek22 from "../assets/tangga26.png";
import proyek23 from "../assets/tangga27.png";
import proyek24 from "../assets/tangga28.jpg";
import proyek25 from "../assets/tangga29.jpg";
import proyek26 from "../assets/tangga30.jpg";
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
      
     {/* HERO SECTION: Jasa Pembuatan Tangga Besi */}
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
              Jasa Pembuatan Tangga Besi Custom yang Kuat, Aman & Estetik
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Butuh tangga untuk rumah, mezzanine, ruko, gudang, atau bangunan komersial? <strong>Nemu Workshop</strong> melayani pembuatan <strong>tangga besi custom</strong> dengan desain modern, konstruksi kokoh, dan pengerjaan profesional sesuai kebutuhan bangunan Anda.
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
              <FaWhatsapp size={24} /> Konsultasi Tangga Besi Sekarang
            </a>
          </div>
        </motion.section>



    {/* SECTION: Keunggulan Tangga Besi Custom */}

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
              alt="Contoh tangga besi custom"
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
            Kenapa Harus Pilih Tangga Besi Custom?
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Tangga besi menjadi pilihan favorit untuk rumah modern, mezzanine, ruko, hingga bangunan komersial karena memiliki <strong>konstruksi yang kuat, desain fleksibel, dan umur pakai yang panjang</strong>. Selain kokoh, tangga besi juga dapat dibuat sesuai konsep bangunan yang Anda inginkan.
          </p>

          <ul className="space-y-5 text-lg">
            {[
              "Konstruksi kuat dan aman untuk penggunaan jangka panjang",
              "Bisa custom model minimalis, industrial, spiral, hingga mezzanine",
              "Tampilan modern yang meningkatkan nilai estetika bangunan",
              "Cocok untuk rumah, ruko, gudang, cafe, dan kantor",
              "Mudah dikombinasikan dengan kayu, kaca, atau railing besi",
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


      {/* SECTION: Jenis Tangga Besi Custom */}

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
                Pilihan Model Tangga Besi yang Bisa Dikustom
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Kami melayani pembuatan berbagai jenis tangga besi sesuai kebutuhan bangunan. Mulai dari rumah tinggal, mezzanine, ruko, gudang, hingga area komersial dengan desain yang bisa disesuaikan dengan konsep bangunan Anda.
              </p>
            </motion.div>

        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Tangga Besi Minimalis",
              desc: "Desain simpel dan modern yang cocok untuk rumah minimalis maupun bangunan kontemporer.",
              image: proyek20,
            },
            {
              title: "Tangga Mezzanine",
              desc: "Solusi ideal untuk akses ke lantai mezzanine pada rumah, gudang, cafe, atau workshop.",
              image: proyek5,
            },
            {
              title: "Tangga Spiral Custom",
              desc: "Hemat ruang dengan desain unik dan estetik, cocok untuk area dengan space terbatas.",
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
            Contoh Proyek Pembuatan Tangga Besi Custom
          </h2>
          <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-12">
            Lihat berbagai hasil proyek tangga besi custom yang telah kami kerjakan untuk rumah tinggal, mezzanine, ruko, gudang, cafe, dan bangunan komersial lainnya. Setiap tangga dibuat dengan konstruksi yang kokoh, desain yang estetik, dan dapat disesuaikan dengan kebutuhan serta konsep bangunan Anda.
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

        {/* SECTION: Layanan Besi & Konstruksi Lainnya */}

        <section className="bg-gradient-to-br from-[#0D2C40] to-[#1A4365] py-24 px-4 md:px-8 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Tidak Hanya Tangga Besi, Kami Juga Mengerjakan Konstruksi Besi Lainnya
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12">
                Nemu Workshop melayani berbagai kebutuhan fabrikasi dan konstruksi besi untuk rumah, ruko, gudang, cafe, kantor, hingga bangunan komersial. Semua dikerjakan dengan material berkualitas dan tenaga berpengalaman.
              </p>
            </motion.div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Mezzanine Besi",
              desc: "Menambah area fungsional tanpa perlu renovasi besar, cocok untuk gudang, toko, dan rumah.",
            },
            {
              title: "Pagar Besi Custom",
              desc: "Pagar minimalis, industrial, maupun klasik yang bisa disesuaikan dengan desain bangunan.",
            },
            {
              title: "Railing Tangga & Balkon",
              desc: "Meningkatkan keamanan sekaligus mempercantik tampilan rumah dan bangunan.",
            },
            {
              title: "Kanopi Besi",
              desc: "Solusi perlindungan area carport, teras, maupun halaman dengan konstruksi yang kokoh.",
            },
            {
              title: "Pintu Besi Custom",
              desc: "Pintu besi kuat dan aman untuk rumah, gudang, ruko, maupun area komersial.",
            },
            {
              title: "Struktur Baja Ringan",
              desc: "Konstruksi ringan namun kuat untuk kebutuhan atap dan bangunan tambahan.",
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
                    Proses Pemesanan Tangga Besi Custom
                  </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-left">
                
                {/* Gambar dan Paragraf */}
                <div>
                  <img
                    src={pesananimg}
                    alt="Konsultasi pembuatan tangga besi custom"
                    className="rounded-lg shadow-lg mb-6 mx-auto md:mx-0 md:max-w-[400px] w-full h-auto"
                  />

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Kami menyediakan <span className="font-semibold text-gray-900">layanan konsultasi, survey, desain, fabrikasi, hingga pemasangan tangga besi custom</span> dengan proses yang profesional dan transparan. Cocok untuk rumah tinggal, ruko, kantor, gudang, maupun bangunan komersial lainnya.
                  </p>

                  <a
                    href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20jasa%20pembuatan%20tangga%20besi.%20Boleh%20saya%20konsultasi%3F"
                    onClick={() => {
                      fbq('track', 'Contact');
                      return gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20jasa%20pembuatan%20tangga%20besi.%20Boleh%20saya%20konsultasi%3F');
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
                      desc: "Diskusikan kebutuhan tangga besi Anda melalui WhatsApp atau telepon.",
                    },
                    {
                      id: "02",
                      title: "Survey & Pengukuran",
                      desc: "Tim kami akan melakukan pengukuran langsung untuk memastikan desain dan ukuran sesuai lokasi.",
                    },
                    {
                      id: "03",
                      title: "Penawaran Harga",
                      desc: "Kami mengirimkan estimasi biaya lengkap berdasarkan model, material, dan spesifikasi yang dipilih.",
                    },
                    {
                      id: "04",
                      title: "Persetujuan & DP",
                      desc: "Setelah desain dan harga disetujui, proyek masuk ke tahap produksi.",
                    },
                    {
                      id: "05",
                      title: "Produksi & Pemasangan",
                      desc: "Tangga besi diproduksi oleh tim berpengalaman dan dipasang dengan rapi sesuai standar keamanan.",
                    },
                  ].map((step) => (
                    <motion.div
                      key={step.id}
                      whileHover={{ scale: 1.03, y: -4 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="bg-gray-100 text-gray-900 border border-gray-200 rounded-xl p-5 shadow-sm"
                    >
                      <h3 className="text-xl font-semibold flex items-center gap-3">
                        <span className="bg-[#0D2C40] text-white font-bold px-3 py-1 rounded-full">
                          {step.id}
                        </span>
                        {step.title}
                      </h3>
                      <p className="mt-2 text-gray-700">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>

              </div>

                </div>
              </section>



      {/* Testimoni Klien - Tangga Besi Custom */}

              <section className="bg-white py-20 px-4 md:px-8 text-gray-900">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Testimoni Klien Pembuatan Tangga Besi
                  </h2>

              <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4">
                {[
                  {
                    name: "Fajar Nugroho",
                    job: "Pemilik Rumah 2 Lantai, Tangerang",
                    message:
                      "Tangga besi yang dibuat Nemu Workshop kokoh banget dan desainnya sesuai konsep rumah minimalis kami.",
                  },
                  {
                    name: "Lina Oktavia",
                    job: "Owner Cafe, Jakarta Barat",
                    message:
                      "Kami pesan tangga industrial untuk area mezzanine cafe. Hasilnya rapi, kuat, dan jadi nilai tambah interior.",
                  },
                  {
                    name: "Dimas Prakoso",
                    job: "Pemilik Gudang, Cikupa",
                    message:
                      "Tangga akses gudang dibuat sangat kokoh dan aman. Proses pengerjaan juga cepat dan profesional.",
                  },
                  {
                    name: "Rendy Saputra",
                    job: "Kontraktor Bangunan, Bekasi",
                    message:
                      "Sudah beberapa kali kerja sama dengan Nemu Workshop. Hasil fabrikasi tangga besinya selalu presisi dan tepat waktu.",
                  },
                  {
                    name: "Sarah Maharani",
                    job: "Pemilik Rumah Modern, BSD",
                    message:
                      "Tangga floating dengan kombinasi besi dan kayu yang dibuat terlihat mewah dan sesuai desain impian kami.",
                  },
                  {
                    name: "Agus Setiawan",
                    job: "Pemilik Ruko 3 Lantai, Depok",
                    message:
                      "Kualitas materialnya bagus, finishing rapi, dan pemasangannya sangat memperhatikan keamanan.",
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
                  Lihat Lokasi Nemu Workshop di Google Maps
                </a>
              </div>
            
                </div>
              </section>




        {/* FAQ - Tangga Besi Custom */}

              <section className="bg-[#0D2C40] py-20 px-4 md:px-8 text-white">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-10">
                    FAQ Tangga Besi Custom
                  </h2>

              ```
              <div className="space-y-6 text-left">
                {[
                  {
                    question: "Apakah tangga besi aman untuk penggunaan sehari-hari?",
                    answer:
                      "Ya. Tangga besi dirancang dengan struktur yang kuat dan kokoh sehingga aman digunakan untuk rumah tinggal, kantor, ruko, maupun bangunan komersial lainnya.",
                  },
                  {
                    question: "Bisa custom model tangga sesuai desain rumah?",
                    answer:
                      "Tentu. Kami melayani pembuatan tangga besi custom sesuai kebutuhan, mulai dari tangga lurus, tangga L, tangga U, tangga putar, hingga tangga floating modern.",
                  },
                  {
                    question: "Apakah tangga besi bisa dikombinasikan dengan material lain?",
                    answer:
                      "Bisa. Tangga besi dapat dikombinasikan dengan kayu, kaca, stainless steel, maupun railing custom untuk menghasilkan tampilan yang lebih modern dan elegan.",
                  },
                  {
                    question: "Apakah tangga besi mudah berkarat?",
                    answer:
                      "Tidak. Kami menggunakan material berkualitas dengan finishing cat atau coating khusus untuk membantu melindungi tangga dari korosi dan memperpanjang usia pakainya.",
                  },
                  {
                    question: "Berapa lama proses pembuatan dan pemasangan tangga besi?",
                    answer:
                      "Waktu pengerjaan umumnya berkisar 7–14 hari kerja, tergantung ukuran, desain, dan tingkat kompleksitas proyek.",
                  },
                  {
                    question: "Apakah melayani survey lokasi terlebih dahulu?",
                    answer:
                      "Ya. Tim kami dapat melakukan survey dan pengukuran langsung agar desain tangga sesuai dengan kondisi bangunan dan kebutuhan Anda.",
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
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {item.question}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
              

                </div>
              </section>





     {/* CTA Akhir – Tangga Besi Custom */}

            <section className="bg-white text-gray-900 py-20 px-4 md:px-8 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Siap Mewujudkan Tangga Besi Impian Anda?
                </h2>

          
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Percayakan pembuatan <strong>tangga besi custom</strong> kepada <strong>Nemu Workshop</strong>. Mulai dari tangga minimalis, industrial, mezzanine, hingga tangga putar, semuanya bisa dibuat sesuai kebutuhan dan desain bangunan Anda. Melayani area Jabodetabek dan sekitarnya.
            </p>

            <a
              href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20jasa%20pembuatan%20tangga%20besi.%20Boleh%20saya%20konsultasi%3F"
              onClick={() => {
                fbq('track', 'Contact');
                return gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20jasa%20pembuatan%20tangga%20besi.%20Boleh%20saya%20konsultasi%3F');
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
