"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import pesananimg from "../assets/sectionn.png";

const steps = [
  { 
    id: "01", 
    title: "Hubungi Kami", 
    desc: "Langkah pertama untuk memulai proyek Anda adalah menghubungi tim NEMU Workshop. Kami siap membantu konsultasi desain, model, dan kebutuhan konstruksi secara cepat dan ramah." 
  },
  { 
    id: "02", 
    title: "Survey Lokasi", 
    desc: "Tim kami akan melakukan survey lokasi untuk memastikan ukuran, kondisi lapangan, dan kebutuhan proyek agar pengerjaan lebih presisi dan sesuai rencana." 
  },
  { 
    id: "03", 
    title: "Kalkulasi Biaya", 
    desc: "Setelah survey selesai, kami akan membuat perhitungan biaya material dan jasa secara transparan agar Anda lebih nyaman dalam menentukan pilihan proyek.", 
    highlight: true 
  },
  { 
    id: "04", 
    title: "Kesepakatan Kerja", 
    desc: "Kami membuat kesepakatan kerja yang jelas meliputi desain, material, harga, dan estimasi pengerjaan demi kenyamanan kedua belah pihak." 
  },
  { 
    id: "05", 
    title: "Proses Produksi & Pemasangan", 
    desc: "Tim NEMU Workshop mulai proses produksi hingga pemasangan dengan fokus pada kualitas pengerjaan, ketepatan waktu, dan hasil yang rapi." 
  },
];



const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function OrderSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Judul */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariant}
          className="text-center"
        >
          <h3 className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
            Pemesanan
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Tahapan Pemesanan
          </h2>
        </motion.div>

        {/* Layout Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">

          {/* Gambar & Deskripsi */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-[70%] max-w-xs md:w-full md:max-w-md overflow-hidden rounded-lg shadow-lg mx-auto md:mx-0">
              <img 
                src={pesananimg} 
                alt="Konsultasi" 
                className="w-full h-auto object-cover" 
              />
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed text-center md:text-left">
              Kami selalu berkomitmen memberikan 
              <span className="font-semibold"> layanan pembuatan pagar dan konstruksi besi terbaik untuk rumah maupun bangunan Anda.</span>. 
              roses konsultasi dibuat nyaman dan mudah dipahami, sambil membantu Anda menemukan desain pagar, kanopi, railing, atau konstruksi besi yang paling sesuai dengan kebutuhan dan tampilan bangunan Anda.
            </p>

            {/* Tombol Kontak WA */}
            <div className="w-full flex justify-center md:justify-start">
              <a
                href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-green-500 text-white rounded-lg shadow-md transition"
                onClick={(e) => {
                  e.preventDefault();
                  const whatsappLink = "https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F";

                  fbq('track', 'Contact');
                  gtag('event', 'conversion', {
                    send_to: 'AW-17108704615/Njd_CLfTtswaEOe6iN4_',
                    value: 1.0,
                    currency: 'IDR',
                    transaction_id: '',
                  });

                  window.open(whatsappLink, '_blank');
                }}
              >
                <FaWhatsapp size={24} />
                Kontak Kami
              </a>

            </div>
          </div>

          {/* Langkah-langkah Pemesanan */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className={`p-5 border rounded-lg shadow-md transition-all duration-300 ${
                  step.highlight ? "bg-[#1e3a5f] text-white" : "bg-white hover:shadow-lg"
                }`}
                variants={itemVariant}
              >
                <h3 className={`text-xl font-semibold ${step.highlight ? "text-white" : "text-gray-800"}`}>
                  {step.id} {step.title}
                </h3>
                <p className={`mt-2 ${step.highlight ? "text-gray-200" : "text-gray-600"}`}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
