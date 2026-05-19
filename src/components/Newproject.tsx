import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import proyek1 from "../assets/kanopi5.jpeg";
import proyek2 from "../assets/kanopi8.jpeg";
import proyek3 from "../assets/pagar.jpeg";
import proyek4 from "../assets/pagar1.jpeg";
import proyek5 from "../assets/pagarduma.jpeg";
import proyek6 from "../assets/pagarkisikisi.jpeg";
import proyek7 from "../assets/railingtangga3.jpeg";
import proyek8 from "../assets/railingtangga5.jpeg";
import proyek9 from "../assets/railingtangga12.jpeg";
import proyek10 from "../assets/tangga5.jpeg";
import proyek11 from "../assets/kanopi1.jpg";
import proyek13 from "../assets/kanopikaca.jpeg";
import proyek14 from "../assets/kanopisliding.jpeg";
import proyek15 from "../assets/mezanin2.jpeg";
import proyek16 from "../assets/mezanin3.jpeg";
import proyek17 from "../assets/pagargrc.jpeg";
import proyek18 from "../assets/pagargrcwood.jpeg";
import proyek20 from "../assets/railingkaca.jpeg";
import proyek21 from "../assets/railingtangga.jpeg";
import proyek22 from "../assets/railingtangga13.jpeg";
import proyek23 from "../assets/tangga10.jpeg";
import proyek24 from "../assets/tangga9.jpeg";
import proyek25 from "../assets/tangga7.jpeg";
import proyek26 from "../assets/kanopi4.jpeg";
import proyek27 from "../assets/kanopialderon.jpeg";

const images = [
  proyek1, proyek2, proyek3, proyek4, proyek5, proyek6, proyek7, proyek8, proyek10, proyek9,
  proyek11, proyek13, proyek14, proyek15, proyek16, proyek17, proyek18, proyek20, proyek21, proyek22,
  proyek23, proyek24, proyek25, proyek26, proyek27
];

export default function Newproject() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  const nextImage = () => setActiveIndex((activeIndex + 1) % images.length);
  const prevImage = () =>
    setActiveIndex((activeIndex - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Proyek Terbaru</h2>

      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full overflow-hidden rounded-lg shadow hover:shadow-xl cursor-pointer break-inside-avoid"
            onClick={() => openModal(index)}
          >
            <img
              src={src}
              alt={`Proyek ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        ))}
      </div>

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
              alt={`Preview ${activeIndex + 1}`}
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

      <div className="text-center mt-10">
        <Link to="/gallery" className="inline-block bg-[#0D2C40] hover:bg-[#133C56] text-white px-6 py-3 rounded-lg text-base font-semibold transition">
          Lihat Semua Proyek Kami →
        </Link>
      </div>
    </section>
  );
}