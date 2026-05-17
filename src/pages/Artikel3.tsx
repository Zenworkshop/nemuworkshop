import React from 'react';
import { useState } from 'react';
import Footer from '../components/Footer';
import { FaPlus, FaHandHoldingUsd, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Partisi from '../assets/sb/sb1.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi1 from '../assets/sb/sb2.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi2 from '../assets/sb/sb3.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi3 from '../assets/sb/sb4.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi4 from '../assets/sb/sb5.jpg'; // Ganti sesuai nama file yang sesuai
import jendelaa from '../assets/jendelaa.jpg'; // Ganti sesuai nama file yang sesuai
import Kaca from '../assets/jsw6.jpg'; // Ganti sesuai nama file yang sesuai
import logo from '../assets/LOGOZBIRU.png'; // Ganti sesuai nama file yang sesuai
import proyek31 from "../assets/ak/ak2.jpg";
import proyek32 from "../assets/pintusliding1.jpg";
import proyek33 from "../assets/pl/pl2.jpg";
import proyek17 from "../assets/jsw/jsw5.jpg";
import proyek34 from "../assets/pf/pf4.jpg";
import proyek35 from "../assets/pintukaca.jpg";
import { FaTiktok, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";


export default function Artikel3() {
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
        <span className="text-[#0d2c40] font-medium">Kaca Tempered Kamar Mandi: Pilihan Tepat untuk Kesan Mewah & Aman</span>
      </nav>

      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Kaca Tempered Kamar Mandi: Pilihan Tepat untuk Kesan Mewah & Aman
            </h1>

                        <img
                            src={Partisi}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi)}
                        />

            <p className="text-gray-700 text-lg space-y-4">
                <span>
                <span className="text-[#0d2c40] font-bold">Kaca Tempered</span> merupakan salah satu material yang paling banyak digunakan dalam desain interior modern, terutama
                untuk <span className="text-[#0d2c40] font-bold">kamar mandi.</span> Dengan kekuatannya yang tinggi dan keamanan yang lebih baik dibandingkan kaca biasa, <span className="text-[#0d2c40] font-bold">Kaca Tempered</span> menjadi
                pilihan utama bagi banyak orang. Jika Anda sedang mencari <span className="text-[#0d2c40] font-bold">Kaca Tempered</span> untuk kamar mandi,
                penting untuk mengetahui harga <span className="text-[#0d2c40] font-bold">Kaca Tempered</span> per meter yang mulai dari 950.000, serta berbagai spesifikasi dan
                aplikasinya.
                </span><br /><br />
                
                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Apa itu kaca Tempered?
                </h1>
                <br />


                <span>
                Kaca tempered adalah jenis kaca yang telah
                diproses melalui pemanasan dan pendinginan cepat untuk meningkatkan kekuatannya. Proses ini membuat kaca tempered
                lebih kuat dan lebih tahan terhadap benturan serta perubahan suhu yang ekstrem. Kaca ini juga memiliki sifat
                keamanan yang lebih baik, karena jika pecah, ia akan hancur menjadi serpihan kecil yang tidak tajam.
                </span>

                <br />
                <br />

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Kelebihan Kaca Tempered
                </h1>
                <br />

                <span>
                    1. <strong>Keamanan</strong>  
                     : Kaca Tempered tidak akan patah menjadi potongan tajam.

                    <br />

                    2. <strong>Ketahanan</strong>  
                     : Mampu menahan suhu ekstrem dan tekanan

                    <br />

                    3. <strong>Estetika</strong>  
                     : Memberikan tampilan modern dan bersih di ruang kamar mandi

                    <br />

                    4. <strong>mudah dibersihkan</strong>  
                     : Permukaan kaca yang halus membuatnya mudah untuk dibersihkan dari noda air dan sabun.
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
                Mengapa memilih Kaca Tempered untuk kamar mandi?
                </h1>
                <br />

                <span>
                <span className="text-[#0d2c40] font-bold">Kaca Tempered</span> menawarkan berbagai keuntungan yang membuatnya menjadi pilihan yang logis untuk interior kamar
                mandi. Berikut adalah beberapa alasan mengapa Anda harus mempertimbangkan menggunakan kaca tempered:
            
                </span><br /><br />

                <span>
                    <strong>1. Keamanan dan Ketahanan</strong>
                    <br />
                     Kaca tempered dirancang untuk bertahan dalam kondisi yang keras, sehingga Anda tidak perlu khawatir tentang
                     keselamatan saat menggunakan produk ini. Ini sangat penting terutama di area yang sering basah seperti kamar
                     mandi.

                    <br /><br />

                    <strong>2. Desain minimalis dan Modern</strong>
                    <br />  
                    Kaca tempered memberikan kesan ruang yang lebih luas dan terang, menjadikannya pilihan yang ideal untuk
                    desain kamar mandi minimalis. Dengan kepersihan dan kejelasan yang ditawarkannya, kaca ini dapat menciptakan
                    tampilan yang elegan.

                    <br /><br />

                    <strong>3. Perawatan yang mudah</strong>
                    <br />    
                    Kaca tempered sangat mudah dirawat. Karena permukaannya yang halus, Anda hanya perlu menggunakan pembersih
                    kaca untuk menjaga kebersihannya. Ini akan menghemat waktu dan usaha dalam merawat kamar mandi Anda.

                    <br />

                    
                </span>

                                <Link 
                                    to="/artikel/keunggulan-kaca-tempered" 
                                    className="bg-[#e5eff4] text-[#0d2c40] px-4 py-2 w-full block"
                                    >
                                    <span className="text-[#0d2c40] font-light">baca juga:</span> <span className="text-[#0d2c40] font-bold">Keunggulan Kaca Tempered atau Tempered Glass</span>
                                </Link>

                
                <img
                            src={Partisi2}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi2)}
                        />

            
                <br />

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Aplikasi kaca Tempered dalam desain kamar mandi
                </h1>
                <br />

                <span>
                Kaca tempered dapat digunakan dalam berbagai aplikasi di kamar mandi. Berikut adalah beberapa ide penggunaannya:
                </span><br /><br />

                <span>
                    <strong>1. Sekat Kaca Kamar Mandi</strong>
                    <br />
                     Kaca tempered dirancang untuk bertahan dalam kondisi yang keras, sehingga Anda tidak perlu khawatir
                     tentang keselamatan saat menggunakan produk ini. Ini sangat penting terutama di area yang sering basah
                     seperti kamar mandi.

                    <br /><br />

                    <strong>2. Pintu Kamar Mandi</strong>
                    <br />  
                    Kaca tempered memberikan kesan ruang yang lebih luas dan terang, menjadikannya pilihan yang ideal untuk
                    desain kamar mandi minimalis. Dengan kepersihan dan kejelasan yang ditawarkannya, kaca ini dapat menciptakan
                    tampilan yang elegan.

                    <br /><br />

                    <strong>3. Panel Shower</strong>
                    <br />    
                    Kaca tempered sangat mudah dirawat. Karena permukaannya yang halus, Anda hanya perlu menggunakan pembersih
                    kaca untuk menjaga kebersihannya. Ini akan menghemat waktu dan usaha dalam merawat kamar mandi Anda.

                    <br /><br />

                    <strong>4. Cermin Kaca Tempered</strong>
                    <br />  
                    Kaca tempered memberikan kesan ruang yang lebih luas dan terang, menjadikannya pilihan yang ideal untuk
                    desain kamar mandi minimalis. Dengan kepersihan dan kejelasan yang ditawarkannya, kaca ini dapat menciptakan
                    tampilan yang elegan.

                    <br /><br />
                </span>
                <img
                            src={Partisi3}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi3)}
                        />
                <br />

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Pertimbangan dalam memilih kaca Tempered
                </h1>
                <br />


                <span>
                Sebelum memutuskan kaca tempered mana yang akan anda pilih, ada beberapa faktor yang perlu dipertimbangkan
                </span>

                <br />
                <br />


                 <span>
                    <strong>1. Ukuran Kamar Mandi</strong>
                    <br />
                     Pastikan untuk mengukur ruang yang tersedia utuk menentukan ukuran kaca yang diperlukan. ini akan
                     mempengaruhi total biaya.
                    <br /><br />

                    <strong>2. Budget</strong>
                    <br />  
                    Kaca tempered memberikan kesan ruang yang lebih luas dan terang, menjadikannya pilihan yang ideal untuk
                    desain kamar mandi minimalis. Dengan kepersihan dan kejelasan yang ditawarkannya, kaca ini dapat menciptakan
                    tampilan yang elegan.

                    <br /><br />

                    <strong>3. Panel Shower</strong>
                    <br />    
                    Kaca tempered sangat mudah dirawat. Karena permukaannya yang halus, Anda hanya perlu menggunakan pembersih
                    kaca untuk menjaga kebersihannya. Ini akan menghemat waktu dan usaha dalam merawat kamar mandi Anda.

                    <br /><br />

                    <strong>4. Cermin Kaca Tempered</strong>
                    <br />  
                    Kaca tempered memberikan kesan ruang yang lebih luas dan terang, menjadikannya pilihan yang ideal untuk
                    desain kamar mandi minimalis. Dengan kepersihan dan kejelasan yang ditawarkannya, kaca ini dapat menciptakan
                    tampilan yang elegan.

                    <br /><br />

                    
                </span>



                <img
                            src={Partisi4}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi4)}
                        />


                <br />

                

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Kelebihan Kaca Tempered
                </h1>
                <br />


               <span>
                    1. <strong>Keamanan</strong>  
                     : Kaca Tempered tidak akan patah menjadi potongan tajam.

                    <br /><br />

                    2. <strong>Ketahanan</strong>  
                     : Mampu menahan suhu ekstrem dan tekanan

                    <br /><br />

                    3. <strong>Estetika</strong>  
                     : Memberikan tampilan modern dan bersih di ruang kamar mandi

                    <br /><br />

                    4. <strong>mudah dibersihkan</strong>  
                     : Permukaan kaca yang halus membuatnya mudah untuk dibersihkan dari noda air dan sabun.

                    <br /><br />

                    {/* Navigasi Post */}
                    <div className="flex justify-between items-center mt-8">
                        {/* Tombol Previous Post */}
                        <Link to="/artikel/partisi-aluminium-modern" className="flex items-center space-x-3 hover:opacity-80">
                            <div className="bg-[#001F5B] p-3 rounded-md text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <span className="text-[#001F5B] font-bold tracking-wide">Previous Post</span>
                        </Link>


                        {/* Tombol Next Post */}
                        <Link to="/artikel/mengenal-jendela-aluminium-dan-keunggulannya-dibanding-material-lainnya" className="flex items-center space-x-3 hover:opacity-80">
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
                            to="/artikel/skylight-rumah-interior-terang-estetik" 
                            className="border rounded-lg shadow-md overflow-hidden block hover:shadow-lg transition-transform transform hover:scale-105"
                        >
                            <img
                                src={proyek31}
                                alt="Skylight Rumah: Cara Efektif Bikin Interior Lebih Terang & Estetik"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="font-semibold text-lg text-[#001F5B]">Skylight Rumah: Cara Efektif Bikin Interior Lebih Terang & Estetik</h2>
                                <p className="text-sm text-gray-700 mt-2">
                                    Salah satu cara terbaik untuk memanfaatkan cahaya alami di dalam rumah adalah dengan menggunakan.
                                </p>
                            </div>
                        </Link>

                        {/* Kartu 2 */}
                        <Link 
                            to="/artikel/pintu-sliding-aluminium-elegan-praktis-fungsional" 
                            className="border rounded-lg shadow-md overflow-hidden block hover:shadow-lg transition-transform transform hover:scale-105"
                        >
                            <img
                                src={proyek32}
                                alt="Pintu Sliding Aluminium: Elegan, Praktis, Dan Fungsional"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="font-semibold text-lg text-[#001F5B]">Pintu Sliding Aluminium: Elegan, Praktis, Dan Fungsional</h2>
                                <p className="text-sm text-gray-700 mt-2">
                                    Pintu sliding aluminium atau pintu geser yang menggunakan bahan aluminium
                                </p>
                            </div>
                        </Link>

                        {/* Kartu 3 */}
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
                            <h2 className="text-2xl font-bold text-[#001F5B] mt-10 text-center">Ingin Pasang Kaca Tempered di Kamar Mandi Anda?</h2>
                            <p className="text-lg text-gray-600">Percayakan pada Zen Workshop untuk
                                pemasangan <span className="font-semibold">kaca tempered berkualitas</span> yang
                                aman, elegan, dan tahan lama. Konsultasikan desain kamar mandi impian Anda dengan tim profesional kami!</p>
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
                    { link: "/artikel/tips-memilih-floor-hinge-tepat-dan-nyaman", img: proyek34, title: "Simak 6 Tips Memilih Floor Hinge yang Tepat dan Nyaman" },
                    { link: "/artikel/rincian-pemasangan-pintu-kaca", img: proyek35, title: "Bagaimana Rincian Pemasangan untuk Pintu Kaca" },
                    { link: "/artikel/partisi-aluminium-modern", img: Partisi, title: "Partisi Aluminium: Solusi Ideal untuk Ruang yang Modern dan Fungsional" },
                    { link: "/artikel/mengenal-jendela-aluminium-dan-keunggulannya-dibanding-material-lainnya", img: proyek17, title: "Mengenal Jendela Aluminium dan Keunggulannya Dibanding Material Lain" },
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
