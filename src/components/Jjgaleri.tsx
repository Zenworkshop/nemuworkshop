import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import proyek1 from "../assets/js6.jpg";
import proyek2 from "../assets/js7.jpg";
import proyek3 from "../assets/jendelaa.jpg";
import proyek4 from "../assets/jsw1.jpg";
import proyek5 from "../assets/pivot.jpg";
import proyek6 from "../assets/jsw2.jpg";
import proyek15 from "../assets/jsdecky.jpg";
import proyek16 from "../assets/pivotdecky.jpg";
import proyek17 from "../assets/ribbenhariono.jpg";
import proyek18 from "../assets/jshariono.jpg";
import proyek20 from "../assets/jjaldo.jpg";
import proyek21 from "../assets/jkmtitah.jpg";
import proyek24 from "../assets/jkmfahri.jpg";
import proyek25 from "../assets/jofahri.jpg";
import proyek26 from "../assets/pivotfahri.jpg";
import proyek27 from "../assets/rumahfahri.jpg";

const images = [
  proyek1, proyek2, proyek3, proyek4, proyek5, proyek6,
  proyek15, proyek16, proyek17, proyek18, proyek20, proyek21,
  proyek24, proyek25, proyek26, proyek27
];

export default function Jjgaleri() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  const nextImage = () => setActiveIndex((activeIndex + 1) % images.length);
  const prevImage = () => setActiveIndex((activeIndex - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Galeri Proyek Jendela Aluminium
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Lihat dokumentasi hasil pengerjaan jendela aluminium kami di berbagai proyek rumah tinggal dan bangunan komersial. Temukan inspirasi desain dan kualitas pemasangan langsung dari proyek nyata.
        </p>

        <div className="columns-2 md:columns-3 gap-4 space-y-4 mb-16">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-lg shadow hover:shadow-xl cursor-pointer break-inside-avoid"
              onClick={() => openModal(index)}
            >
              <img
                src={src}
                alt={`Proyek jendela aluminium ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Modal Preview */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <div className="relative max-w-5xl mx-auto" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-4 right-6 text-white text-3xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
                onClick={prevImage}
              >
                &#10094;
              </button>
              <img
                src={images[activeIndex]}
                alt={`Preview proyek jendela ${activeIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
              />
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
                onClick={nextImage}
              >
                &#10095;
              </button>
            </div>
          </div>
        )}
      </section>

      {/* CTA Konsultasi */}
      <section className="w-full bg-[#1e3a5f] text-white py-28 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold">
          Konsultasi Gratis Jasa Pembuatan & Pemasangan Jendela Aluminium
        </h2>
        <p className="mt-3 text-lg md:text-xl font-semibold leading-relaxed max-w-3xl mx-auto">
          Butuh jendela aluminium untuk rumah atau bangunan komersial Anda?
          Tim Zen Workshop siap membantu Anda mulai dari perencanaan hingga pemasangan. Kami melayani dengan profesionalisme tinggi dan hasil berkualitas.
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof fbq !== 'undefined') fbq('track', 'Contact');
              gtag_report_conversion('https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F');
            }}
            className="w-fit px-6 py-3 bg-[#25D366] hover:bg-green-500 text-white rounded-lg shadow-md font-semibold flex items-center gap-2 transition"
          >
            <FaWhatsapp size={24} />
            Konsultasi Sekarang
          </a>

        </div>
      </section>
    </>
  );
}
