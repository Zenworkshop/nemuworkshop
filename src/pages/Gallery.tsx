"use client";

import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { projectImages } from './imageImports';

type ProjectCategory =
  | 'All'
  | 'Jendela Ornamen'
  | 'Jendela Sliding'
  | 'Pintu Lipat'
  | 'Pintu Sliding'
  | 'Jendela Swing'
  | 'Pintu Alumunium'
  | 'Pintu Floorhinge'
  | 'Partisi Kaca'
  | 'Shower Box'
  | 'Terbaru';

interface ProjectImage {
  id: number;
  src: string;
  alt: string;
  category: ProjectCategory[];
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<ProjectImage[]>([]);
  const [modalIndex, setModalIndex] = useState(0);

  const categories: ProjectCategory[] = [
    'All',
    'Jendela Ornamen',
    'Jendela Sliding',
    'Pintu Lipat',
    'Pintu Sliding',
    'Jendela Swing',
    'Pintu Alumunium',
    'Pintu Floorhinge',
    'Partisi Kaca',
    'Shower Box',
    'Terbaru'
  ];

  const secondaryCategories: ProjectCategory[] = [
    'Jendela Swing',
    'Pintu ACP',
    'Pintu Spanrel',
    'Tralis Expanda',
    'Terbaru'
  ];

  const filteredProjects = projectImages.filter(project =>
    activeFilter === 'All' || project.category.includes(activeFilter)
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const openModal = (index: number) => {
    setModalImages(filteredProjects);
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
  const nextImage = () => setModalIndex((modalIndex + 1) % modalImages.length);
  const prevImage = () => setModalIndex((modalIndex - 1 + modalImages.length) % modalImages.length);

  // ESC Close Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4 pb-12 font-sans">
        <div className="mb-12 mt-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-6"
          >
            Gallery Project
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-700"
          >
            Beberapa Project yang kami dokumentasikan, hanya untuk mewakili beberapa project yang telah kami kerjakan.
          </motion.p>
        </div>

        {/* Filter */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="mb-8">
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeFilter === category ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {secondaryCategories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeFilter === category ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4" variants={containerVariants} initial="hidden" animate="visible">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="break-inside-avoid overflow-hidden rounded-lg shadow-md cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 17 }}
              onClick={() => openModal(index)}
            >
              <img
                src={project.src}
                alt={project.alt}
                className="w-full object-cover rounded-md"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {isModalOpen && (
          <div onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-6 cursor-pointer">
            <div onClick={(e) => e.stopPropagation()} className="relative max-w-5xl w-full">
              <button onClick={closeModal} className="absolute top-4 right-4 text-white text-3xl">×</button>

              <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl">
                &#10094;
              </button>

              <img
                src={modalImages[modalIndex]?.src}
                alt={modalImages[modalIndex]?.alt}
                className="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
              />

              <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl">
                &#10095;
              </button>
            </div>
          </div>
        )}

        {/* Contact Button */}
        <motion.div className="fixed bottom-6 right-6 z-50" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}>
          <motion.button className="bg-white rounded-full shadow-lg p-4 text-blue-800 flex items-center justify-center hover:bg-blue-800 hover:text-white transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <MessageSquare size={24} />
          </motion.button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
