"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { CheckCircle } from "lucide-react";

import proyek1 from "../assets/alperon.jpg";
import proyek2 from "../assets/alperon10.jpg";
import proyek3 from "../assets/alperon11.jpg";
import proyek4 from "../assets/alperon12.webp";
import proyek5 from "../assets/alperon13.jpeg";
import proyek6 from "../assets/alperon14.jpeg";
import proyek7 from "../assets/alperon15.jpeg";
import proyek8 from "../assets/alperon16.jpeg";
import proyek9 from "../assets/alperon17.jpeg";
import proyek10 from "../assets/alperon18.jpeg";
import proyek11 from "../assets/alperon19.jpeg";
import proyek12 from "../assets/alperon20.jpg";
import proyek13 from "../assets/alperon21.jpeg";
import proyek14 from "../assets/alperon22.jpg";
import proyek15 from "../assets/alperon23.jpg";
import proyek16 from "../assets/alperon9.jpg";
import proyek17 from "../assets/alperon8.jpg";
import proyek18 from "../assets/alperon7.jpg";
import proyek19 from "../assets/alperon6.jpg";
import proyek20 from "../assets/alperon5.jpg";
import proyek21 from "../assets/alperon4.jpg";
import proyek22 from "../assets/alperon3.jpg";
import proyek23 from "../assets/alperon2.jpeg";
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
      
     {/* HERO SECTION: Jasa Pembuatan Alferon */}
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
                Jasa Pembuatan Pagar & Railing Alferon Custom yang Elegan dan Berkelas
              </h1>

          
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Percantik rumah, villa, maupun bangunan komersial Anda dengan
            <strong> ornamen Alferon custom </strong>
            yang mewah dan tahan lama. Cocok untuk pagar, balkon, railing tangga,
            gerbang, hingga berbagai elemen dekoratif dengan desain klasik maupun modern.
          </p>

          <a
            href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20jasa%20pembuatan%20Alferon.%20Boleh%20saya%20konsultasi%3F"
            onClick={() => {
              fbq('track', 'Contact');
              return gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20jasa%20pembuatan%20Alferon.%20Boleh%20saya%20konsultasi%3F');
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition"
          >
            <FaWhatsapp size={24} /> Konsultasi Gratis Sekarang
          </a>
          

            </div>
          </motion.section>






    {/* SECTION: Kenapa Pilih Alferon */}

        <section className="bg-white py-24 px-4 md:px-8 text-gray-900">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Kenapa Memilih Ornamen Alferon?
            </motion.h2>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          Ornamen Alferon menjadi pilihan favorit untuk mempercantik pagar, railing tangga, balkon, dan gerbang rumah. Desainnya yang elegan mampu memberikan kesan mewah tanpa harus menggunakan material yang mahal dan berat.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {[
            {
              icon: "✨",
              title: "Tampilan Mewah & Elegan",
              desc: "Motif dekoratif Alferon membuat rumah terlihat lebih berkelas dan memiliki nilai estetika yang tinggi.",
            },
            {
              icon: "🛡️",
              title: "Tahan Karat & Awet",
              desc: "Material aluminium cor memiliki ketahanan yang baik terhadap cuaca sehingga cocok untuk penggunaan outdoor.",
            },
            {
              icon: "🎨",
              title: "Bisa Custom Sesuai Desain",
              desc: "Tersedia berbagai pilihan model, ukuran, warna, dan kombinasi material sesuai konsep bangunan Anda.",
            },
            {
              icon: "🏡",
              title: "Cocok untuk Berbagai Bangunan",
              desc: "Ideal digunakan pada rumah tinggal, villa, ruko, kantor, hingga bangunan komersial lainnya.",
            },
            {
              icon: "⚙️",
              title: "Bisa Dikombinasikan",
              desc: "Dapat dipadukan dengan besi hollow, stainless steel, kaca, maupun material dekoratif lainnya.",
            },
            {
              icon: "💰",
              title: "Investasi Jangka Panjang",
              desc: "Selain mempercantik bangunan, Alferon juga membantu meningkatkan nilai visual dan daya tarik properti.",
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


    {/* SECTION: Cocok untuk Aplikasi Apa? */}
        <section className="bg-gradient-to-br from-[#0D2C40] to-[#1A4365] py-24 px-4 md:px-8 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Cocok untuk Berbagai Kebutuhan Bangunan
            </motion.h2>

            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12">
              Alperon dikenal kuat, tahan cuaca, dan memiliki tampilan modern sehingga cocok digunakan untuk berbagai kebutuhan rumah tinggal maupun bangunan komersial.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: "Kanopi Rumah",
                  desc: "Melindungi area teras dan carport dengan tampilan yang lebih modern dan rapi.",
                },
                {
                  title: "Kanopi Ruko",
                  desc: "Cocok untuk area depan toko agar terlihat profesional dan tahan lama.",
                },
                {
                  title: "Area Parkir",
                  desc: "Memberikan perlindungan kendaraan dari panas dan hujan sepanjang tahun.",
                },
                {
                  title: "Gudang & Workshop",
                  desc: "Material kuat yang cocok digunakan untuk area kerja dan penyimpanan.",
                },
                {
                  title: "Cafe & Restoran",
                  desc: "Memberikan kesan industrial modern sekaligus perlindungan area outdoor.",
                },
                {
                  title: "Bangunan Komersial",
                  desc: "Ideal untuk kantor, showroom, dan berbagai bangunan usaha lainnya.",
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
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/90">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      {/* Galeri */}
        <motion.section className="py-16 px-4 md:px-8 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
             Galeri Proyek Pembuatan Alperon
          </h2>
          <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-12">
            Lihat berbagai hasil proyek <strong>Alperon custom</strong> yang telah dikerjakan oleh <strong>Nemu Workshop</strong>. Cocok untuk kanopi, pagar, railing, area komersial, hingga berbagai kebutuhan konstruksi dan dekoratif dengan desain yang bisa disesuaikan.
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

        {/* SECTION: Pilihan Aplikasi Alperon */}
        <section className="bg-gradient-to-br from-[#0D2C40] to-[#1A4365] py-24 px-4 md:px-8 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pilihan Aplikasi & Kustomisasi Alperon
            </h2>

            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Nemu Workshop melayani pembuatan <strong>Alperon custom</strong> untuk berbagai kebutuhan bangunan. Ukuran, motif, ketebalan material, hingga finishing dapat disesuaikan dengan desain dan kebutuhan proyek Anda.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white/10 border border-white/20 text-left shadow-md rounded-xl overflow-hidden backdrop-blur-sm">
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold border-b border-white/20">
                      Aplikasi
                    </th>
                    <th className="px-6 py-4 font-semibold border-b border-white/20">
                      Material
                    </th>
                    <th className="px-6 py-4 font-semibold border-b border-white/20">
                      Finishing
                    </th>
                    <th className="px-6 py-4 font-semibold border-b border-white/20">
                      Kustomisasi
                    </th>
                  </tr>
                </thead>

                <tbody className="text-white/90">
                  {[
                    {
                      aplikasi: "Kanopi Alperon",
                      material: "Besi Hollow",
                      finishing: "Cat Duco / Powder Coating",
                      custom: "Ukuran & Motif",
                    },
                    {
                      aplikasi: "Pagar Alperon",
                      material: "Besi Hollow",
                      finishing: "Powder Coating",
                      custom: "Motif & Warna",
                    },
                    {
                      aplikasi: "Railing Tangga",
                      material: "Besi & Stainless",
                      finishing: "Glossy / Doff",
                      custom: "Model Modern",
                    },
                    {
                      aplikasi: "Balkon",
                      material: "Besi Hollow",
                      finishing: "Anti Karat",
                      custom: "Desain Custom",
                    },
                    {
                      aplikasi: "Partisi Dekoratif",
                      material: "Besi Laser Cut",
                      finishing: "Cat Premium",
                      custom: "Motif Custom",
                    },
                    {
                      aplikasi: "Fasad Bangunan",
                      material: "Alperon Besi",
                      finishing: "Outdoor Coating",
                      custom: "Ukuran Proyek",
                    },
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-white/10">
                      <td className="px-6 py-4 font-medium">{row.aplikasi}</td>
                      <td className="px-6 py-4">{row.material}</td>
                      <td className="px-6 py-4">{row.finishing}</td>
                      <td className="px-6 py-4">{row.custom}</td>
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
            Proses Pemesanan Alperon Besi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-left">

            {/* Gambar dan Paragraf */}
            <div>
              <img
                src={pesananimg}
                alt="Konsultasi pembuatan alperon besi"
                className="rounded-lg shadow-lg mb-6 mx-auto md:mx-0 md:max-w-[400px] w-full h-auto"
              />

              <p className="text-gray-700 leading-relaxed mb-4">
                Kami melayani konsultasi, survey, desain, hingga pemasangan
                <span className="font-semibold text-gray-900"> alperon besi custom</span>
                dengan proses yang profesional dan transparan. Cocok untuk rumah,
                ruko, kantor, gudang, maupun bangunan komersial lainnya.
              </p>

              <a
                href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20jasa%20pembuatan%20alperon%20besi.%20Boleh%20saya%20konsultasi%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white px-6 py-3 rounded-lg text-base font-semibold transition"
              >
                <FaWhatsapp size={20} /> Konsultasi Sekarang
              </a>
            </div>

            {/* Langkah */}
            <div className="grid gap-6">
              {[
                {
                  id: "01",
                  title: "Hubungi Kami",
                  desc: "Diskusikan kebutuhan alperon besi melalui WhatsApp atau telepon.",
                },
                {
                  id: "02",
                  title: "Survey & Pengukuran",
                  desc: "Tim kami melakukan survey lokasi dan pengukuran secara akurat.",
                },
                {
                  id: "03",
                  title: "Penawaran Harga",
                  desc: "Kami kirimkan rincian biaya sesuai ukuran, model, dan spesifikasi material.",
                },
                {
                  id: "04",
                  title: "DP & Jadwal Produksi",
                  desc: "Setelah deal, produksi akan dijadwalkan sesuai timeline proyek.",
                },
                {
                  id: "05",
                  title: "Produksi & Pemasangan",
                  desc: "Alperon besi dikerjakan oleh tim berpengalaman dan dipasang dengan rapi.",
                },
              ].map((step) => (
                <div
                  key={step.id}
                  className="bg-gray-100 border border-gray-200 rounded-xl p-5 shadow-sm"
                >
                  <h3 className="text-xl font-semibold flex items-center gap-3">
                    <span className="bg-[#0D2C40] text-white font-bold px-3 py-1 rounded-full">
                      {step.id}
                    </span>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-700">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Testimoni Klien */}
      <section className="bg-white py-20 px-4 md:px-8 text-gray-900">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Testimoni Klien Pembuatan Alperon Besi
          </h2>

          <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4">
            {[
              {
                name: "Hendra Saputra",
                job: "Pemilik Rumah, Tangerang",
                message:
                  "Alperon besi dari Nemu Workshop bikin tampilan rumah lebih mewah. Hasil las rapi dan kokoh.",
              },
              {
                name: "Yusuf Maulana",
                job: "Pemilik Ruko, Jakarta Barat",
                message:
                  "Desainnya sesuai request dan pengerjaannya cepat. Sangat puas dengan hasilnya.",
              },
              {
                name: "Andi Kurniawan",
                job: "Kontraktor",
                message:
                  "Sudah beberapa kali kerja sama. Kualitas material dan finishing selalu bagus.",
              },
              {
                name: "Fajar Nugroho",
                job: "Pemilik Gudang",
                message:
                  "Alperon yang dibuat sangat kuat dan cocok untuk area dengan aktivitas tinggi.",
              },
              {
                name: "Maya Putri",
                job: "Pemilik Rumah Minimalis",
                message:
                  "Modelnya modern dan bisa custom sesuai konsep rumah kami.",
              },
              {
                name: "Rizki Firmansyah",
                job: "Developer Perumahan",
                message:
                  "Pemasangan cepat dan hasilnya presisi. Recommended untuk proyek skala besar.",
              },
            ].map((testi, index) => (
              <div
                key={index}
                className="snap-center shrink-0 w-[300px] bg-white p-6 rounded-xl shadow-md"
              >
                <p className="text-yellow-500 mb-2">★★★★★</p>
                <p className="italic mb-4">“{testi.message}”</p>
                <div className="font-semibold text-[#0D2C40]">{testi.name}</div>
                <div className="text-sm text-gray-500">{testi.job}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0D2C40] py-20 px-4 md:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            FAQ Pembuatan Alperon Besi
          </h2>

          <div className="space-y-6 text-left">
            {[
              {
                question: "Apa itu alperon besi?",
                answer:
                  "Alperon besi adalah konstruksi besi dekoratif yang berfungsi sebagai elemen estetika sekaligus pelindung area tertentu pada bangunan.",
              },
              {
                question: "Apakah desain alperon bisa custom?",
                answer:
                  "Ya. Kami melayani desain custom sesuai ukuran, model, motif, dan konsep bangunan Anda.",
              },
              {
                question: "Material apa yang digunakan?",
                answer:
                  "Kami menggunakan besi berkualitas dengan finishing yang dapat disesuaikan, seperti cat duco, powder coating, maupun finishing lainnya.",
              },
              {
                question: "Berapa lama proses pengerjaan?",
                answer:
                  "Umumnya 7–14 hari kerja tergantung ukuran, tingkat kerumitan desain, dan volume pekerjaan.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {item.question}
                </h3>
                <p className="text-white/90">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

     {/* CTA Akhir */}
        <section className="bg-white text-gray-900 py-20 px-4 md:px-8 text-center">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Siap Buat Alperon Besi yang Kokoh & Estetik?
            </h2>

            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Wujudkan tampilan bangunan yang lebih elegan dengan
              <strong> alperon besi custom dari Nemu Workshop</strong>.
              Bisa disesuaikan dengan ukuran, model, dan konsep bangunan Anda.
            </p>

            <a
              href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20jasa%20pembuatan%20alperon%20besi.%20Boleh%20saya%20konsultasi%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
            >
              <FaWhatsapp size={24} />
              Konsultasi Gratis via WhatsApp
            </a>

          </div>
        </section>








    </>
  );
}
