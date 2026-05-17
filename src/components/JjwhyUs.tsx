import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import showcaseImg from "../assets/jendela-showcase.jpg"; // Ganti sesuai nama file gambar yang dipakai

const features = [
  { 
    title: "Rapi & Presisi", 
    desc: "Kami memastikan setiap pemasangan aluminium dikerjakan dengan detail dan presisi tinggi, menghasilkan hasil akhir yang sempurna dan rapi untuk proyek Anda." 
  },
  { 
    title: "Proyek Bergaransi", 
    desc: "Kami memberikan garansi resmi 6 bulan untuk pemasangan aluminium, termasuk aksesori dan silen, demi memastikan kualitas layanan terbaik." 
  },
  { 
    title: "Gratis Konsultasi", 
    desc: "Kami menyediakan layanan konsultasi gratis untuk membantu Anda menentukan kebutuhan aluminium terbaik sebelum memulai proyek." 
  },
];

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function WhyUs() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Kiri - Fitur Keunggulan */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
        >
          <h3 className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
            Keunggulan Kami
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-8">
            Kenapa pilih Zen Workshop?
          </h2>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-blue-500 flex-shrink-0">
                  <CheckCircle size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Kanan - Gambar Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <img 
            src={showcaseImg} 
            alt="Proyek Jendela Aluminium" 
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
