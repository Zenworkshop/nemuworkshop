import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  { 
    title: "Rapi & Presisi", 
    desc: "Kami memastikan setiap pemasangan aluminium dikerjakan dengan detail dan presisi tinggi, menghasilkan hasil akhir yang sempurna dan rapi untuk proyek Anda." 
  },
  { 
    title: "Respon Cepat", 
    desc: "Layanan pemasangan aluminium dengan respon cepat, memastikan kebutuhan proyek Anda ditangani tanpa penundaan." 
  },
  { 
    title: "Proyek Bergaransi", 
    desc: "Kami memberikan garansi resmi 6 bulan untuk pemasangan aluminium, termasuk aksesori dan silen, demi memastikan kualitas layanan terbaik." 
  },
  { 
    title: "Berkualitas Tinggi", 
    desc: "Menggunakan material aluminium terbaik dan tahan lama, kami menjamin proyek Anda mendapatkan hasil berkualitas tinggi dengan standar premium." 
  },
  { 
    title: "Jaminan Kebersihan", 
    desc: "Setelah proses pemasangan aluminium selesai, tim kami akan memastikan lokasi proyek tetap bersih dan nyaman tanpa biaya tambahan." 
  },
  { 
    title: "Proyek skala besar", 
    desc: "Kami telah menangani berbagai proyek aluminium untuk rumah tinggal, perkantoran, hingga bangunan komersial berskala besar." 
  },
  { 
    title: "Akad Jelas", 
    desc: "Setiap proyek pemasangan aluminium dilakukan berdasarkan kesepakatan transparan dan tertulis untuk kenyamanan kedua belah pihak." 
  },
  { 
    title: "Pelayanan Ramah", 
    desc: "Tim kami selalu memberikan pelayanan ramah dan komunikatif dalam setiap proses konsultasi, survei, hingga pemasangan aluminium." 
  },
  { 
    title: "Gratis Konsultasi", 
    desc: "Kami menyediakan layanan konsultasi gratis untuk membantu Anda menentukan kebutuhan aluminium terbaik sebelum memulai proyek." 
  },
  { 
    title: "Gratis Biaya Survei", 
    desc: "Kami memberikan layanan survei lokasi gratis untuk memastikan perencanaan pemasangan aluminium Anda lebih akurat dan efisien." 
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