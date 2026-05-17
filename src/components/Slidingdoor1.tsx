"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";

import proyek1 from "../assets/pintusliding.jpg";
import proyek2 from "../assets/pintusliding1.jpg";
import proyek3 from "../assets/psfahri.jpg";
import proyek4 from "../assets/sliding.jpg";
import proyek5 from "../assets/ps1.jpg";
import proyek6 from "../assets/ps2.jpg";
import proyek15 from "../assets/ps3.jpg";
import proyek16 from "../assets/ps4.jpg";
import proyek17 from "../assets/ps5.jpg";
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
              Jasa Pintu Sliding Aluminium Minimalis & Modern
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Kami menyediakan layanan pembuatan dan pemasangan pintu sliding aluminium untuk rumah tinggal, apartemen, dan bangunan komersial. Desain elegan, tahan lama, dan hemat ruang.
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
          Kenapa Memilih Pintu Sliding Aluminium untuk Rumah Anda?
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
                title: "Hemat Ruang dan Fleksibel",
                content:
                  "Pintu sliding aluminium tidak memerlukan ruang bukaan seperti pintu konvensional. Cocok digunakan di area sempit atau desain rumah minimalis modern, menjadikannya solusi hemat ruang yang fungsional dan fleksibel.",
              },
              {
                title: "Tampilan Modern dan Elegan",
                content:
                  "Desain pintu aluminium sliding menawarkan kesan modern, simpel, dan bersih. Cocok untuk rumah bergaya minimalis, industrial, hingga komersial seperti kantor atau showroom.",
              },
              {
                title: "Tahan Lama dan Anti Karat",
                content:
                  "Terbuat dari bahan aluminium berkualitas yang tahan terhadap cuaca, tidak berkarat, serta bebas rayap. Pintu ini sangat ideal untuk penggunaan jangka panjang tanpa perawatan rutin yang merepotkan.",
              },
              {
                title: "Meningkatkan Nilai Estetika",
                content:
                  "Dengan tampilan ramping dan bingkai tipis, pintu sliding aluminium membantu menonjolkan elemen desain interior maupun eksterior, serta memberi kesan mewah dan profesional pada bangunan.",
              },
              {
                title: "Investasi Jangka Panjang",
                content:
                  "Meski awalnya lebih mahal dari kayu biasa, pintu sliding aluminium memiliki umur pakai lebih panjang dan tidak memerlukan biaya perawatan tinggi, menjadikannya pilihan ekonomis jangka panjang.",
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
              Untuk Siapa Pintu Sliding Aluminium Cocok?
            </h2>

            {/* Deskripsi */}
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Pintu sliding aluminium cocok digunakan untuk berbagai jenis bangunan — dari rumah tinggal
              hingga ruang komersial. Desainnya yang hemat tempat, tahan lama, dan elegan membuatnya ideal untuk banyak kebutuhan.
            </p>

            {/* Grid Konten */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Rumah Minimalis",
                  desc: "Pintu sliding aluminium sangat cocok untuk rumah bergaya minimalis. Ideal digunakan di ruang tamu, dapur, dan kamar tidur karena desainnya yang hemat ruang dan modern.",
                },
                {
                  title: "Kantor & Ruang Kerja",
                  desc: "Solusi efisien untuk kantor atau ruang kerja modern. Memberikan tampilan profesional dan memungkinkan cahaya alami masuk lebih banyak.",
                },
                {
                  title: "Apartemen & Kondominium",
                  desc: "Maksimalkan tata letak apartemen dengan pintu sliding aluminium yang ramping dan tidak memakan banyak tempat.",
                },
                {
                  title: "Cafe & Retail",
                  desc: "Cocok untuk usaha seperti cafe, butik, dan toko retail. Memberikan kesan welcoming, modern, dan mudah dibuka tutup.",
                },
                {
                  title: "Balkon & Taman",
                  desc: "Hubungkan area indoor dengan outdoor tanpa hambatan. Cocok untuk pintu ke arah balkon, taman, atau kolam renang.",
                },
                {
                  title: "Showroom & Hotel",
                  desc: "Berikan kesan elegan dan mewah di ruang komersial seperti showroom, lobi hotel, atau ruang konferensi.",
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
          Contoh Proyek Pintu Sliding Aluminium Zen Workshop
        </h2>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-12">
          Galeri hasil pemasangan pintu sliding aluminium dari proyek rumah, apartemen, dan bangunan komersial. Kami melayani berbagai kebutuhan desain minimalis modern untuk area Jabodetabek dan sekitarnya.
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
            <h2 className="text-4xl font-bold mb-8">Proses Pemesanan Pintu Sliding Aluminium</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-left">
              
              {/* Gambar dan Paragraf */}
                <div className="text-center md:text-left">
                  <img
                    src={pesananimg}
                    alt="Konsultasi pemesanan pintu sliding aluminium"
                    className="rounded-lg shadow-lg mb-6 mx-auto w-[85%] max-w-xs md:max-w-[400px] h-auto"
                  />

                  <p className="text-gray-600 leading-relaxed mb-4">
                    Kami memberikan <span className="font-semibold">layanan konsultasi, survey, hingga pemasangan pintu sliding aluminium</span> dengan proses yang transparan dan profesional. Cocok untuk rumah minimalis maupun bangunan komersial.
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
      FAQ Pintu Sliding Aluminium
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
            question: "Apa kelebihan pintu sliding aluminium dibandingkan dengan pintu kayu?", 
            answer: "Pintu sliding aluminium lebih tahan terhadap cuaca, tidak dimakan rayap, dan tampilannya lebih modern. Selain itu, aluminium juga tidak memerlukan perawatan seperti pengecatan ulang, berbeda dengan pintu kayu yang bisa melengkung atau lapuk." 
          },
          { 
            question: "Berapa lama proses pengerjaan dan pemasangan?", 
            answer: "Waktu pengerjaan dan pemasangan pintu sliding aluminium umumnya memakan waktu 5–10 hari kerja, tergantung jumlah unit dan lokasi proyek. Proses bisa lebih cepat jika ukuran sudah pasti sejak awal." 
          },
          { 
            question: "Apakah bisa custom ukuran dan warna?", 
            answer: "Ya, pintu aluminium bisa dipesan sesuai ukuran dan warna yang kamu inginkan. Tersedia pilihan finishing seperti hitam doff, silver, putih, hingga motif kayu untuk menyesuaikan desain rumah." 
          },
          { 
            question: "Apakah mudah dibersihkan?", 
            answer: "Sangat mudah. Cukup dilap dengan kain lembap, tanpa perlu cairan khusus. Aluminium tidak menyerap air, tidak berkarat, dan tahan noda, sehingga ideal untuk area luar maupun dalam ruangan." 
          },
          { 
            question: "Berapa harga per meter?", 
            answer: "Harga bervariasi tergantung spesifikasi. Harga pintu sliding aluminium standar mulai dari Rp2.500.000 per daun, sudah termasuk kusen, kaca, dan aksesoris. Untuk ukuran custom atau tambahan fitur, biaya akan disesuaikan." 
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
            <h2 className="text-3xl md:text-5xl font-bold">Siap Memulai Pemasangan Pintu Sliding Aluminium di Rumah Anda?</h2>
            <p className="mt-4 text-lg md:text-xl font-semibold">Dapatkan layanan konsultasi gratis dari Zen Workshop untuk pemasangan pintu aluminium sliding minimalis, modern, dan tahan lama. Cocok untuk rumah, apartemen, atau kantor Anda.</p>
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
