import React from 'react';
import { motion } from 'framer-motion';
import jendelaIcon from '../assets/jendela.png';
import kacaIcon from '../assets/kaca.png';
import pintuIcon from '../assets/pintu.png';
import pengalamanImg from "../assets/pagarduma2.jpeg";

export default function Welcome() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const serviceItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center">
        {/* Left - Image */}
        <div className="w-full md:basis-4/12 relative mb-6 md:mb-0">
          <div className="w-full max-w-xs md:max-w-[28rem] mx-auto">
            <img
              src={pengalamanImg}
              alt="Foto pengalaman Zen Aluminium"
              className="w-full md:h-auto rounded-xl object-cover md:object-contain"
            />
          </div>

          {/* Responsive Badge */}
          <div className="absolute bottom-4 right-4 md:bottom-0 md:left-[-16px] md:right-auto bg-[#0D2C40] text-white p-4 rounded-lg shadow-md">
            <div className="text-4xl font-bold">6<sup>+</sup></div>
            <div className="text-sm md:text-base">Tahun Pengalaman</div>
          </div>
        </div>

        {/* Right - Content */}
        <div className="w-full md:basis-8/12 md:pl-12 text-center md:text-left">
          <div>
            <div className="text-orange-400 mb-1 mt-[-28px] md:mt-0">SELAMAT DATANG DI</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nemu Workshop</h2>
            <p className="text-gray-600 mb-8">
              NEMU Workshop adalah mitra terpercaya dalam penyediaan jasa bengkel las, konstruksi besi, stainless, dan baja ringan berkualitas untuk berbagai kebutuhan — mulai dari rumah tinggal, ruko, gedung perkantoran, hingga proyek komersial berskala besar. Dengan pengalaman di bidang fabrikasi dan konstruksi, 
              <strong> kami menghadirkan layanan profesional, pengerjaan rapi, desain modern, serta komitmen tinggi terhadap kepuasan pelanggan.</strong>
            </p>

            <p className="text-xl font-bold text-gray-700 mt-4 mb-6">
              Produk dan Layanan kami
            </p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[{
                icon: jendelaIcon,
                title: "Pagar dan Kanopi",
                desc: "Pembuatan pagar minimalis, pagar tralis, pintu pagar, kanopi besi, kanopi baja ringan, dan berbagai kebutuhan eksterior rumah lainnya."
              }, {
                icon: kacaIcon,
                title: "Pintu & Folding Gate",
                desc: "Pembuatan pintu besi, pintu garasi, folding gate, pintu custom, dan berbagai model pintu sesuai kebutuhan bangunan."
              }, {
                icon: pintuIcon,
                title: "Railing & Tangga",
                desc: "Pembuatan railing balkon, railing tangga, tangga layang, tangga putar, stainless railing, dan konstruksi tangga modern."
              }, {
                icon: kacaIcon,
                title: "Produk Lainnya",
                desc: "Mejanin, alperon, tempa klasik, stainless custom, baja ringan, dan berbagai kebutuhan workshop & konstruksi lainnya."
              }].map((item, idx) => (
                <motion.div key={idx} className="flex flex-row items-start gap-4" variants={serviceItem}>
                  <div className="border p-2 rounded shrink-0">
                    <img src={item.icon} alt={`${item.title} Icon`} className="w-16 h-16" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
