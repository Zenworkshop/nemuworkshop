import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";


const features = [
  { 
    title: "Rapi & Presisi", 
    desc: "Setiap pengerjaan pagar, kanopi, railing, dan konstruksi besi dikerjakan dengan detail serta presisi tinggi untuk hasil yang lebih kokoh dan estetik." 
  },
  { 
    title: "Respon Cepat", 
    desc: "Tim NEMU Workshop siap merespon kebutuhan dan konsultasi proyek Anda dengan cepat tanpa proses yang berbelit." 
  },
  { 
    title: "Proyek Bergaransi", 
    desc: "Kami memberikan garansi pengerjaan untuk memastikan hasil proyek tetap aman, kuat, dan sesuai standar kualitas." 
  },
  { 
    title: "Material Berkualitas", 
    desc: "Menggunakan material pilihan seperti besi, stainless, hollow galvanis, dan baja ringan berkualitas tinggi untuk hasil yang tahan lama." 
  },
  { 
    title: "Jaminan Kebersihan", 
    desc: "Setelah proses pengerjaan selesai, area kerja akan dibersihkan kembali agar tetap nyaman dan rapi." 
  },
  { 
    title: "Melayani Proyek Besar", 
    desc: "Kami berpengalaman menangani proyek rumah tinggal, ruko, kantor, hingga proyek komersial skala besar." 
  },
  { 
    title: "Akad & Harga Transparan", 
    desc: "Semua proses pengerjaan dilakukan dengan kesepakatan yang jelas dan transparan agar pelanggan merasa aman dan nyaman." 
  },
  { 
    title: "Pelayanan Ramah", 
    desc: "Kami selalu mengutamakan pelayanan yang ramah, komunikatif, dan profesional dari awal konsultasi hingga proyek selesai." 
  },
  { 
    title: "Gratis Konsultasi", 
    desc: "Bingung menentukan model atau material? Tim kami siap membantu konsultasi gratis sesuai kebutuhan bangunan Anda." 
  },
  { 
    title: "Gratis Survey Lokasi", 
    desc: "Kami menyediakan layanan survey lokasi gratis untuk membantu perencanaan proyek menjadi lebih akurat dan efisien." 
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
      <div className="max-w-6xl mx-auto">
        {/* Judul Section (Tetap ada animasi) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="text-center"
        >
          <h3 className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
            Keunggulan Kami
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Apa yang kami tawarkan?
          </h2>
        </motion.div>

        {/* Grid Keunggulan (Tanpa animasi) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
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
      </div>
    </section>
  );
} 