import React from 'react';
import { useState } from 'react';
import Footer from '../components/Footer';
import { FaPlus, FaHandHoldingUsd, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Partisi from '../assets/floorhinge.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi1 from '../assets/kacatempered.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi2 from '../assets/kacalaminated.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi3 from '../assets/pk/pk13.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi4 from '../assets/pk/pk9.jpg'; // Ganti sesuai nama file yang sesuai
import jendelaa from '../assets/jendelaa.jpg'; // Ganti sesuai nama file yang sesuai
import Kaca from '../assets/jsw6.jpg'; // Ganti sesuai nama file yang sesuai
import logo from '../assets/LOGOZBIRU.png'; // Ganti sesuai nama file yang sesuai
import proyek33 from "../assets/pl/pl2.jpg";
import proyek34 from "../assets/pf/pf4.jpg";
import proyek35 from "../assets/pintukaca.jpg";
import proyek20 from "../assets/sb/sb2.jpg";
import proyek17 from "../assets/jsw/jsw5.jpg";
import proyek31 from "../assets/ak/ak2.jpg";
import { FaTiktok, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";


export default function Artikel5() {
    const [showFullImage, setShowFullImage] = useState('');

    const handleImageClick = (src) => {
        setShowFullImage(src);
    };

  return (
    <>
    <section className="pt-[80px] md:pt-[140px] px-4 md:px-8 pb-16 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6 text-gray-600 flex items-center gap-2">
        <Link to="/" className="text-[#0d2c40] hover:underline flex items-center gap-1">
          <FaHome className="inline-block" />
        </Link>
        <span className="text-gray-400">/</span>
        <Link to="/artikel" className="text-gray-500">Artikel
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-[#0d2c40] font-medium">Keunggulan Kaca Tempered atau Tempered Glass</span>
      </nav>

      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Keunggulan Kaca Tempered atau Tempered Glass
            </h1>

                        <img
                            src={Partisi}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi)}
                        />

            <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Solusi cerdas untuk Desain Modern
                </h1>            

            <p className="text-gray-700 text-lg space-y-4">
                <span>
                Temukan keunggulan <span className="text-[#0d2c40] font-bold">Kaca Tempered</span> atau Tempered Glass yang
                menjadikannya pilihan terbaik untuk berbagai aplikasi. Baca lebih lanjut tentang kelebihan, dan tips perawatan.
                </span><br /><br />
                
                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Apa itu Kaca Tempered?
                </h1>
                <br />


                <span>
                <span className="text-[#0d2c40] font-bold">Kaca Tempered</span> atau kaca yang telah diproses dengan pemanasan
                dan pendinginan cepat ini memiliki kekuatan yang jauh lebih tinggi dibandingkan kaca biasa. Proses tersebut
                membuatnya lebih tahan terhadap tekanan dan benturan, menjadikannya pilihan ideal untuk banyak aplikasi, mulai
                dari jendela rumah hingga panel shower.
                </span>

                <br />

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Keunggulan Kaca Tempered
                </h1>
                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                1. Kekuatan Tinggi
                </h2>
                <br />
                <span>
                Salah satu Keunggulan <span className="text-[#0d2c40] font-bold">Kaca Tempered</span> atau Tempered Glass yang
                paling mencolok adalah kekuatannya. Kaca ini dapat menahan beban yang lebih berat dan memiliki ketahanan terhadap
                benturan yang lebih baik dibandingkan dengan kaca biasa. Menurut statistik, kaca tempered dapat memiliki kekuatan
                sekitar 4-5 kali lipat dibandingkan kaca annealed yang setebal sama.
                </span>
                <br />
                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                2. Keamanan
                </h2>
                <br />
                <span>
                Ketika pecah, <span className="text-[#0d2c40] font-bold">Kaca Tempered</span> tidak akan pecah menjadi serpihan
                tajam yang berbahaya. Sebaliknya, kaca ini akan hancur menjadi butiran kecil yang lebih aman, mengurangi risiko
                cedera. Ini adalah salah satu alasan utama mengapa banyak proyek konstruksi, baik residensial maupun komersial,
                memilih kaca tempered.
                </span>
                <br />
                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                3. Tahan terhadap Perubahan Suhu
                </h2>
                <br />
                <span>
                <span className="text-[#0d2c40] font-bold">Kaca Tempered</span> dirancang untuk tahan terhadap perubahan suhu
                yang ekstrem, menjadikannya pilihan yang ideal untuk area yang terkena sinar matahari langsung atau perubahan
                suhu yang drastis.
                </span>
                <br />
                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                4. Estetika
                </h2>
                <br />
                <span>
                <span className="text-[#0d2c40] font-bold">Kaca Tempered</span> tersedia dalam berbagai ukuran dan ketebalan,
                termasuk kaca tempered 8mm, kaca tempered 10mm, dan kaca tempered 12 mm. Ini memungkinkan arsitek dan kontraktor
                untuk menciptakan desain yang menarik dan modern. Kaca ini juga dapat diproses lebih lanjut dengan berbagai
                finishing untuk meningkatkan estetika.
                </span>
                <br />

                        <img
                            src={Partisi1}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi1)}
                        />

                <br />
                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Aplikasi Kaca Tempered
                </h1>
                <br />
                <span>
                Kaca Tempered memiliki berbagai aplikasi, termasuk:
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                1. Jendela dan Pintu
                </h2>
                <br />
                <span>
                Kaca tempered digunakan untuk jendela dan pintu karena keamanannya yang tinggi dan kemampuannya untuk menahan tekanan angin.
                </span>
                <br />
                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                2. Pembatas Ruangan
                </h2>
                <br />
                <span>
                Kaca ini sering digunakan sebagai partisi di kantor dan rumah, memberikan kesan modern dan terbuka.
                </span>
                <br />
                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                3. Panel Shower
                </h2>
                <br />
                <span>
                Kaca tempered ini merupakan pilihan utama untuk panel shower karena tahan terhadap uap dan perubahan suhu.
                </span>
                <br />
                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                4. Furnitur
                </h2>
                <br />
                <span>
                Penggunaan kaca tempered pada meja dan rak memberikan tampilan yang elegan dan modern.
                </span>
                <br />

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Spesifikasi Rangka Aluminium
                </h1>
                <br />
                <span>
                Rangka aluminium yang digunakan untuk <span className="text-[#0d2c40] font-bold">Kaca Tempered</span> biasanya memiliki spesifikasi yang kuat dengan ukuran yang bervariasi. Umumnya, dimensi rangka adalah 1,5 mm hingga 3 mm. Rangka ini mendukung kekuatan kaca dan memberikan tampilan yang rapi.
                </span>

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Ciri-ciri kaca Tempered
                </h1>
                <br />
                <span>
                Beberapa ciri-ciri dari <span className="text-[#0d2c40] font-bold">Kaca Tempered</span> antara lain:
                </span>
                <br />
                <span>
                1. Terdapat label atau stiker yang menyatakan bahwa kaca tersebut tempered.
                </span>
                <br />
                <span>
                2. Ketebalan yang seragam dan tidak ada pori-pori.
                </span>
                <br />
                <span>
                3. Ketahanan terhadap benturan dan panas.
                </span>
                <br />

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Kaca Laminated adalah
                </h1>
                <br />
                

                <span>
                Kaca laminated adalah jenis kaca yang terdiri dari dua atau lebih lapisan kaca yang disatukan dengan lapisan interlayer. Ini memberikan keamanan tambahan karena jika pecah, pecahan kaca akan tetap tertahan di dalam lapisan interlayer.
                </span>

                <br />
                <br />
                    <Link 
                       to="/artikel/pintu-sliding-aluminium-elegan-praktis-fungsional" 
                       className="bg-[#e5eff4] text-[#0d2c40] px-4 py-2 w-full block"
                       >
                       <span className="text-[#0d2c40] font-light">baca juga:</span> <span className="text-[#0d2c40] font-bold">Pintu Sliding Aluminium: Elegan, Praktis, Dan Fungsional</span>
                    </Link>            
                <img
                            src={Partisi2}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi2)}
                        />

                <br />
                

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Faq tentang Keunggulan kaca Tempered atau Tempered Glass
                </h1>
                <br />
            
               <span>
                    <strong>Q : Apa bedanya kaca tempered dan kaca laminated?</strong><br />  
                    A : Kaca tempered lebih kuat dan pecah menjadi butiran kecil, sedangkan kaca laminated memiliki lapisan yang menahan pecahan agar tidak terbang. Keduanya memiliki aplikasi yang berbeda tergantung pada kebutuhan keamanan dan desain.

                    <br /><br />

                    <strong>Q : Bagaimana cara memasang kaca tempered?</strong><br />  
                    A : Pemasangan kaca tempered harus dilakukan oleh profesional untuk memastikan keamanan dan stabilitas. Pastikan rangka aluminium terpasang dengan kuat dan kaca terpasang dengan tepat.

                    <br /><br />

                    <strong>Q : Apakah kaca tempered mudah pecah?</strong><br />  
                    A : Kaca tempered dirancang untuk tahan terhadap benturan dan tekanan. Namun, jika terkena pukulan yang sangat keras atau titik tekanan yang tidak merata, kaca tetap dapat pecah.

                    <br /><br />

                    <strong>Q : Apa yang harus dilakukan jika kaca tempered pecah?</strong><br />  
                    A : Segera hubungi profesional untuk membersihkan pecahan kaca dan mengganti dengan yang baru. Hindari menyentuh pecahan untuk mencegah cedera.

                    <br /><br />

                    <strong>Q: Dapatkah kaca tempered digunakan untuk area luar ruangan?</strong><br />  
                    A: Ya, kaca tempered sangat cocok untuk area luar ruangan karena tahan terhadap cuaca dan perubahan suhu. Pastikan kaca terpasang dengan benar pada rangka yang kokoh.

                    <br /><br />

                    Untuk informasi lebih lanjut tentang Keunggulan Kaca Tempered atau Tempered Glass, hubungi Trideko Interior Aplikator yang siap membantu Anda dalam memilih dan memasang kaca tempered sesuai dengan kebutuhan desain dan keamanan.

                    {/* Navigasi Post */}
                    <div className="flex justify-between items-center mt-8">
                        {/* Tombol Previous Post */}
                        <Link to="/artikel/mengenal-jendela-aluminium-dan-keunggulannya-dibanding-material-lainnya" className="flex items-center space-x-3 hover:opacity-80">
                            <div className="bg-[#001F5B] p-3 rounded-md text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <span className="text-[#001F5B] font-bold tracking-wide">Previous Post</span>
                        </Link>


                        {/* Tombol Next Post */}
                        <Link to="/artikel/skylight-rumah-interior-terang-estetik" className="flex items-center space-x-3 hover:opacity-80">
                            <span className="text-[#001F5B] font-bold tracking-wide">Next Post</span>
                            <div className="bg-[#001F5B] p-3 rounded-md text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    </div>

                    {/* Tambahan Judul */}
                    <h1 className="text-2xl font-bold text-[#001F5B] mt-10 text-center">Artikel Lainnya</h1>

                    {/* Kartu Artikel */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Kartu 1 */}
                        <Link 
                            to="/artikel/kelebihan-pintu-lipat-aluminium-rumah-minimalis-modern" 
                            className="border rounded-lg shadow-md overflow-hidden block hover:shadow-lg transition-transform transform hover:scale-105"
                        >
                            <img
                                src={proyek33}
                                alt="Kelebihan Pintu Lipat Aluminium untuk Rumah Minimalis Modern"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="font-semibold text-lg text-[#001F5B]">Kelebihan Pintu Lipat Aluminium untuk Rumah Minimalis Modern</h2>
                                <p className="text-sm text-gray-700 mt-2">
                                    Pintu lipat aluminium kaca merupakan salah satu jenis pintu yang semakin populer digunakan saat ini
                                </p>
                            </div>
                        </Link>

                        {/* Kartu 2 */}
                        <Link 
                            to="/artikel/tips-memilih-floor-hinge-tepat-dan-nyaman" 
                            className="border rounded-lg shadow-md overflow-hidden block hover:shadow-lg transition-transform transform hover:scale-105"
                        >
                            <img
                                src={proyek34}
                                alt="Simak 6 Tips Memilih Floor Hinge yang Tepat dan Nyaman"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="font-semibold text-lg text-[#001F5B]">Simak 6 Tips Memilih Floor Hinge yang Tepat dan Nyaman</h2>
                                <p className="text-sm text-gray-700 mt-2">
                                    Salah satu alat bantu untuk menjaga keseimbangan dan kekuatan dari daun pintu kaca adalah floor hinge
                                </p>
                            </div>
                        </Link>

                        {/* Kartu 3 */}
                        <Link 
                            to="/artikel/rincian-pemasangan-pintu-kaca" 
                            className="border rounded-lg shadow-md overflow-hidden block hover:shadow-lg transition-transform transform hover:scale-105"
                        >
                            <img
                                src={proyek35}
                                alt="Bagaimana Rincian Pemasangan untuk Pintu Kaca"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="font-semibold text-lg text-[#001F5B]">Bagaimana Rincian Pemasangan untuk Pintu Kaca</h2>
                                <p className="text-sm text-gray-700 mt-2">
                                    Pintu kaca telah menjadi pilihan populer dalam desain interior dan eksterior bangunan.
                                </p>
                            </div>
                        </Link>
                    </div>

                    <br /><br />

                    {/* Social Media */}
                          <div className="text-center mt-8">
                            <h2 className="text-2xl font-bold text-[#001F5B] mt-10 text-center">Ikuti kami</h2>
                        
                            
                            <div className="flex justify-center space-x-4 mt-4">
                                <a
                                    href="https://www.tiktok.com/@zenworkshop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTiktok className="w-10 h-10 text-black hover:scale-110 transition" />
                                </a>
                                <a
                                    href="https://instagram.com/zenworkshopid"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram className="w-10 h-10 text-[#E1306C] hover:scale-110 transition" />
                                </a>
                                <a
                                    href="https://www.youtube.com/@zenworkshop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaYoutube className="w-10 h-10 text-[#FF0000] hover:scale-110 transition" />
                                </a>
                                <a
                                    href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp className="w-10 h-10 text-[#25D366] hover:scale-110 transition" />
                                </a>
                            </div>
                                <br />

                            <div className="mt-8 text-center  border-gray-200 py-6 rounded-lg shadow space-y-3">
                            <h2 className="text-2xl font-bold text-[#001F5B] mt-10 text-center">Ingin Pasang Kaca Tempered yang Aman & Elegan?</h2>
                            <p className="text-lg text-gray-600">Percayakan pada <span className="font-semibold">Zen Workshop</span> untuk solusi kaca tempered berkualitas tinggi.  
                            Dengan desain modern, keamanan terbaik, dan pemasangan profesional, kami siap wujudkan ruang mewah Anda.</p>
                            <a
                                href="https://wa.me/6281244997748?text=Halo%20Zen%20Workshop,%20saya%20tertarik%20dengan%20partisi%20aluminium%20yang%20sudah%20dijelaskan%20di%20artikel.%20Boleh%20saya%20konsultasi%20lebih%20lanjut?"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#25D366] text-white font-medium px-4 py-2 rounded-md shadow hover:bg-blue-500 transition text-sm"
                            >
                                Konsultasi Sekarang
                            </a>
                            </div>
                        </div>
                </span>
            </p>
        </div>

        {/* Right Box */}
        <div className="hidden md:block bg-white rounded-xl shadow-md p-6 space-y-6 border border-gray-100">
            <img
                src={logo}
                alt="Ilustrasi Zakat Penghasilan"
                className="w-full max-w-[250px] mx-auto h-auto rounded-lg"
            />

          <h2 className="text-xl font-bold text-gray-800">Zen Workshop</h2>
          <p className="text-gray-600 text-[16px] leading-relaxed">
            Kontraktor Spesialis Aluminium dan Kaca di Jabodetabek – Jasa Pembuatan Pintu, Jendela, dan Kusen Aluminium Berkualitas & Terlengkap
          </p>

          <br />
          <br />

          <h2 className="text-xl font-bold text-gray-800">Layanan Zen Workshop</h2>

          <p className="text-gray-600 text-[16px] leading-relaxed space-y-2">
            <Link
                to="/jenis-jendela"
                className="block hover:text-[#3bb5fe] transform transition duration-300 hover:scale-105 hover:translate-x-1"
            >
                Jasa Jendela Aluminium
            </Link>

            <Link
                to="/sliding-door"
                className="block hover:text-[#3bb5fe] transform transition duration-300 hover:scale-105 hover:translate-x-1"
            >
                Jasa Pintu Sliding Aluminium
            </Link>

            <Link
                to="/partisi-kaca"
                className="block hover:text-[#3bb5fe] transform transition duration-300 hover:scale-105 hover:translate-x-1"
            >
                Jasa Pintu Kaca Aluminium
            </Link>

            <Link
                to="/partisi-kaca"
                className="block hover:text-[#3bb5fe] transform transition duration-300 hover:scale-105 hover:translate-x-1"
            >
                Jasa Partisi Kaca Aluminium
            </Link>

            <Link
                to="/pintulipat-aluminium"
                className="block hover:text-[#3bb5fe] transform transition duration-300 hover:scale-105 hover:translate-x-1"
            >
                Jasa Pintu Lipat Aluminium
            </Link>

            <Link
                to="/pintu-floorhinge"
                className="block hover:text-[#3bb5fe] transform transition duration-300 hover:scale-105 hover:translate-x-1"
            >
                Jasa Pintu Floorhinge
            </Link>

            <Link
                to="/kanopi-kaca"
                className="block hover:text-[#3bb5fe] transform transition duration-300 hover:scale-105 hover:translate-x-1"
            >
                Jasa Kanopi Kaca
            </Link>

            <Link
                to="/kanopi-kaca"
                className="block hover:text-[#3bb5fe] transform transition duration-300 hover:scale-105 hover:translate-x-1"
            >
                Jasa Atap Kaca Skylight
            </Link>

            <Link
                to="/kitchenset-aluminium"
                className="block hover:text-[#3bb5fe] transform transition duration-300 hover:scale-105 hover:translate-x-1"
            >
                Jasa Kitchen Set Aluminium
            </Link>

            <Link
                to="/kandang-kucing"
                className="block hover:text-[#3bb5fe] transform transition duration-300 hover:scale-105 hover:translate-x-1"
            >
                Jasa Kandang Kucing Aluminium
            </Link>
            </p>

            <br />
            <br />


            <h2 className="text-xl font-bold text-gray-800 mb-4">Artikel Lainnya</h2>

            <div className="space-y-4">
                {[
                    { link: "/artikel/partisi-aluminium-modern", img: Partisi, title: "Partisi Aluminium: Solusi Ideal untuk Ruang yang Modern dan Fungsional" },
                    { link: "/artikel/kaca-tempered-kamar-mandi", img: proyek20, title: "Kaca Tempered Kamar Mandi: Pilihan Tepat untuk Kesan Mewah & Aman" },
                    { link: "/artikel/mengenal-jendela-aluminium-dan-keunggulannya-dibanding-material-lainnya", img: proyek17, title: "Mengenal Jendela Aluminium dan Keunggulannya Dibanding Material Lain" },
                    { link: "/artikel/skylight-rumah-interior-terang-estetik", img: proyek31, title: "Skylight Rumah: Cara Efektif Bikin Interior Lebih Terang & Estetik" },
                ].map((item, index) => (
                    <Link
                    key={index}
                    to={item.link}
                    className="flex items-center space-x-4 bg-white rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition transform duration-300 p-2 group"
                    >
                    <img
                        src={item.img}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-lg group-hover:opacity-80 transition"
                    />
                    <span className="text-[#0D2C40] text-lg font-bold transition">
                        {item.title}
                    </span>
                    </Link>
                ))}
            </div>


            <br />
            <br />


            <h2 className="text-xl font-bold text-gray-800">Quick Link</h2>

          <p className="text-gray-600 text-[16px] leading-relaxed space-y-2">
            <Link
                to="/about"
                className="block hover:text-[#3bb5fe] transform transition duration-300 hover:scale-105 hover:translate-x-1"
            >
                Profil
            </Link>

            <Link
                to="/gallery"
                className="block hover:text-[#3bb5fe] transform transition duration-300 hover:scale-105 hover:translate-x-1"
            >
                Portofolio
            </Link>

            <Link
                to="/artikel"
                className="block hover:text-[#3bb5fe] transform transition duration-300 hover:scale-105 hover:translate-x-1"
            >
                Artikel
            </Link>

            <Link
                to="/Contact"
                className="block hover:text-[#3bb5fe] transform transition duration-300 hover:scale-105 hover:translate-x-1"
            >
                Kontak
            </Link>

            
            </p>



           

            <br />
            <br />

            <h2 className="text-xl font-bold text-gray-800">Kontak Kami</h2>

            <p className="text-gray-600 text-[16px] leading-relaxed space-y-2">
                <a
                    href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-[#3bb5fe] transform hover:scale-105 hover:translate-x-1 transition duration-300 ease-in-out"
                >
                    <Phone className="w-5 h-5 mr-2" />
                    +62 812-4499-7748
                </a>

                <a
                    href="mailto:zenworkshopid@gmail.com"
                    className="flex items-center text-gray-400 hover:text-[#3bb5fe] transform hover:scale-105 hover:translate-x-1 transition duration-300 ease-in-out"
                >
                    <Mail className="w-5 h-5 mr-2" />
                    zenworkshopid@gmail.com
                </a>

                <a
                    href="https://maps.app.goo.gl/kKFFpca4TbKUL34t9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-[#3bb5fe] transform hover:scale-105 hover:translate-x-1 transition duration-300 ease-in-out"
                >
                    <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                    QM2Q+85 Pd. Kacang Tim., Kota Tangerang Selatan, Banten
                </a>
                </p>
                <br />
                 <br />

                {/* Social Media */}
                          <div>
                            <h2 className="text-xl font-bold text-gray-800">Follow Us</h2>
                                <br />
                            <div className="flex space-x-4">
                              <a
                                href="https://www.tiktok.com/@zenworkshop"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#3bb5fe]"
                              >
                                <FaTiktok className="w-6 h-6" />
                              </a>
                              <a
                                href="https://instagram.com/zenworkshopid"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#3bb5fe]"
                              >
                                <FaInstagram className="w-6 h-6" />
                              </a>
                              <a
                                href="https://www.youtube.com/@zenworkshop"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#3bb5fe]"
                              >
                                <FaYoutube className="w-6 h-6" />
                              </a>
                              <a
                                href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#3bb5fe]"
                              >
                                <FaWhatsapp className="w-6 h-6" />
                              </a>
                            </div>
                          </div>

        </div>
      </div>
    </section>

    {showFullImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                    onClick={() => setShowFullImage('')}
                >
                    <img
                        src={showFullImage}
                        alt="Full Size"
                        className="max-w-[90%] max-h-[90%] rounded shadow-lg"
                    />
                </div>
            )}
    <Footer />
    </>
  );
}
