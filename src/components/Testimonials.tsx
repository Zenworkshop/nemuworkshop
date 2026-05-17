"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const testimonials = [
  {
    name: "Jessy Monisva",
    review: "Luar biasa prosess pengerjaan profesional,tim nya keren hasilnya juga bagus bagett dongg,harganya bersaing,gak salah pake vendor kalian..thankss yaa,",
    stars: 5,
  },
  {
    name: "pengusaha berkah",
    review: "Pemasangan rapih dan cepat .. good job 👍👍 …",
    stars: 5,
  },
  {
    name: "Sultan Gifari Alfath",
    review: "Kerenn..hasil nya lumayan baguss banget..gakk raguuu ,kualitas keseluruhan luar biasa..ripitt order lagi nii",
    stars: 5,
  },
  {
    name: "irpianda Aziz",
    review: "Sayaa sangat senang dengan hasil nyaa..tim nya sangat profesional dan ramah..harga sangat baik, hasilnya pun baikk..nanti order lagi yaa",
    stars: 5,
  },
  {
    name: "Prokopton",
    review: "Bagus hasilnya, tepat waktu juga pengerjaannya, kualitas gak diragukan lagi, pokoknya suka banget pasang kaca jendela",
    stars: 5,
  },
  {
    name: "Devrizza Ramadhanu",
    review: "kerjaannya rapihh suka banget, pada ramah2 juga pelayanannya, tukang sama adminnya",
    stars: 5,
  },
];

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

export default function Testimonials() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariant}
        className="text-center"
      >
        <h3 className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Testimonial</h3>
        <h2 className="text-4xl font-bold text-gray-800 mt-2">Apa kata klien kami?</h2>
      </motion.div>

      {/* Testimonial Carousel */}
      <motion.div
        className="relative mt-10"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Panah kiri */}
        <button
          onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hidden md:block z-10"
        >
          &#8592;
        </button>

        {/* Panah kanan */}
        <button
          onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hidden md:block z-10"
        >
          &#8594;
        </button>

        <div
          ref={scrollRef}
          className="overflow-x-auto flex gap-4 md:grid md:grid-cols-3 scroll-smooth snap-x snap-mandatory"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[85%] md:min-w-0 md:w-auto snap-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border"
              variants={itemVariant}
            >
              <div className="flex items-center mb-4">
                <motion.div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <MessageSquare className="text-gray-600" size={20} />
                </motion.div>
                <h3 className="ml-3 text-lg font-semibold text-gray-800">{item.name}</h3>
              </div>
              <p className="text-gray-600">{item.review}</p>
              <div className="flex items-center mt-3">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-yellow-500" size={18} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Button Review Google */}
      <motion.div
        className="flex justify-center mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariant}
      >
        <motion.a
          href="https://maps.app.goo.gl/kKFFpca4TbKUL34t9"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-[#1e3a5f] text-white rounded-lg shadow-md flex items-center gap-2"
        >
          <Star size={20} />
          Lihat Testimoni Kami di Google
        </motion.a>
      </motion.div>

      {/* CTA Konsultasi */}
      <motion.div
        className="mt-16 bg-[#1e3a5f] text-white py-12 px-6 md:px-20 rounded-lg text-center shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariant}
      >
        <motion.h2 className="text-3xl font-bold">
          Ingin bekerjasama dengan kami?
        </motion.h2>
        <p className="mt-3 text-lg md:text-xl font-semibold text-white leading-relaxed">
          Hubungi tim kami untuk konsultasi gratis seputar produk aluminium terbaik.
          Kami siap membantu mewujudkan kebutuhan proyek Anda dengan layanan profesional dan terpercaya.
        </p>

        <div className="mt-6 flex justify-center">
          <motion.a
            href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-fit px-6 py-3 bg-[#25D366] hover:bg-green-500 text-white rounded-lg shadow-md font-semibold flex items-center gap-2"
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
            Konsultasi Sekarang
          </motion.a>

        </div>
      </motion.div>
    </section>
  );
}
