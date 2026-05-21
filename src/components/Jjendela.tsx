import React from 'react';
import { FaWhatsapp } from "react-icons/fa"; // pastikan ini ada di bagian atas file

export default function Jjendela() {
  return (
    <section className="bg-[#0D2C40] text-white">
      {/* Hero Section */}
      <div className="pt-24 md:pt-32 pb-16 px-4 md:px-8 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Jasa Pembuatan & Pemasangan Pagar Besi Rumah dan Bangunan Komersial di Jabodetabek.
        </h2>
        <p className="text-lg md:text-xl mb-10">
          NEMU Workshop adalah spesialis jasa pembuatan dan pemasangan pagar besi rumah dengan desain modern, minimalis, dan kokoh untuk hunian maupun bangunan komersial. Kami menggunakan material besi berkualitas tinggi dengan pengerjaan rapi, kuat, dan tahan lama sehingga memberikan keamanan sekaligus meningkatkan tampilan rumah Anda. Tersedia berbagai pilihan model pagar custom sesuai kebutuhan dan konsep bangunan Anda. Layanan kami tersedia untuk area Jabodetabek dan sekitarnya.
          <br /><br />
          <strong>Siap bikin rumah Anda tampil lebih mewah, aman, dan beda dari yang lain?</strong>
        </p>
       <a
          href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof fbq !== 'undefined') fbq('track', 'Contact');
            gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F');
          }}
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white px-5 py-3 text-base md:px-8 md:py-4 md:text-lg rounded-lg font-semibold transition"
        >
          <FaWhatsapp className="text-xl" />
          Hubungi via WhatsApp
        </a>



      </div>
    </section>
  );
}
