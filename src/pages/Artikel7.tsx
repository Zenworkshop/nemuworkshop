import React from 'react';
import { useState } from 'react';
import Footer from '../components/Footer';
import { FaPlus, FaHandHoldingUsd, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Partisi from '../assets/ak/ak1.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi1 from '../assets/ak/ak2.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi2 from '../assets/ak/ak3.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi3 from '../assets/partisi.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi4 from '../assets/pk/pk9.jpg'; // Ganti sesuai nama file yang sesuai
import jendelaa from '../assets/jendelaa.jpg'; // Ganti sesuai nama file yang sesuai
import Kaca from '../assets/jsw6.jpg'; // Ganti sesuai nama file yang sesuai
import logo from '../assets/LOGOZBIRU.png'; // Ganti sesuai nama file yang sesuai
import proyek34 from "../assets/pf/pf4.jpg";
import proyek35 from "../assets/pintukaca.jpg";
import proyek20 from "../assets/sb/sb2.jpg";
import proyek17 from "../assets/jsw/jsw5.jpg";
import proyek30 from "../assets/floorhinge.jpg";
import proyek32 from "../assets/pintusliding1.jpg";
import { FaTiktok, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";


export default function Artikel7() {
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
        <span className="text-[#0d2c40] font-medium">Skylight Rumah: Cara Efektif Bikin Interior Lebih Terang & Estetik</span>
      </nav>

      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-6">
            

                        <img
                            src={Partisi}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi)}
                        />

            <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Skylight Rumah: Cara Efektif Bikin Interior Lebih Terang & Estetik
            </h1>            

            <p className="text-gray-700 text-lg space-y-4">
                <span>
                Temukan cara <span className="text-[#0d2c40] font-bold">skylight</span> yang efektif untuk meningkatkan
                pencahayaan dan estetika ruang anda. Pelajari lebih lanjut tentang manfaat, jenis, dan tips perawatan
                skylight di artikel ini.
                </span><br /><br />
                
                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Cara Skylight untuk rumah.
                </h1>
                <br />


                <span>
                Salah satu cara terbaik untuk memanfaatkan
                cahaya alami di dalam rumah adalah dengan menggunakan Cara (Skylight). Instalasi <span className="text-[#0d2c40] font-bold">skylight</span> dapat membuat ruang
                lebih hidup dan cerah, menciptakan suasana yang menyenangkan. Banyak arsitek dan pemilik rumah kini beralih
                ke penggunaan skylight karena kemampuannya untuk meningkatkan kualitas cahaya di dalam ruangan tanpa harus
                bergantung pada lampu listrik. Menurut data terbaru, penggunaan <span className="text-[#0d2c40] font-bold">skylight</span> di rumah-rumah modern meningkat hingga
                35% dalam lima tahun terakhir, menunjukkan tren positif terhadap pengaplikasian desain yang lebih ramah lingkungan.
                </span>

                <br />
                <br />
                        <img
                            src={Partisi1}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi1)}
                        />
                <br />
                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Apa yang dimaksud dengan Skylight?
                </h1>
                <br />


                <span>
                <span className="text-[#0d2c40] font-bold">skylight</span> adalah elemen arsitektur yang
                berfungsi untuk membawa cahaya alami ke dalam suatu ruangan melalui atap. Biasanya berbentuk jendela atau panel
                yang terbuat dari kaca atau bahan transparan lainnya, skylight dipasang pada posisi mendatar atau miring di atap
                bangunan. Keberadaan skylight tidak hanya menambah estetika ruangan tetapi juga dapat membantu mengurangi
                penggunaan listrik di siang hari karena memanfaatkan cahaya matahari secara maksimal. Selain itu, <span className="text-[#0d2c40] font-bold">skylight</span> dapat
                meningkatkan sirkulasi udara jika dirancang dengan baik, menciptakan suasana yang lebih segar dan nyaman di dalam
                ruangan.
                </span>

                <br />
                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Skylight pakai bahan apa?
                </h1>
                <br />


                <span>
                <span className="text-[#0d2c40] font-bold">skylight</span> Umumnya terbuat dari beberapa jenis bahan,
                dengan pilihan yang paling umum adalah kaca, akrilik, dan polycarbonate. Kaca, terutama yang diperkuat dengan
                lapisan pelindung UV, adalah pilihan populer karena kemampuannya untuk menyalurkan cahaya dengan baik dan
                memberikan tampilan yang elegan. Akrilik lebih ringan dan lebih mudah dipasang, namun memiliki ketahanan yang
                lebih rendah dibandingkan kaca. Sementara itu, polycarbonate merupakan bahan yang sangat kuat dan tahan benturan,
                sehingga cocok untuk area dengan kemungkinan risiko kerusakan. Pilihan bahan tergantung pada kebutuhan spesifik
                proyek dan preferensi desain.
                </span>

                <br />
                            <Link 
                               to="/artikel/kelebihan-pintu-lipat-aluminium-rumah-minimalis-modern" 
                               className="bg-[#e5eff4] text-[#0d2c40] px-4 py-2 w-full block"
                               >
                               <span className="text-[#0d2c40] font-light">baca juga:</span> <span className="text-[#0d2c40] font-bold">Kelebihan Pintu Lipat Aluminium untuk Rumah Minimalis Modern</span>
                            </Link>          
                <img
                            src={Partisi2}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi2)}
                        />

                <br />
                <br />
                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Skylight Pakai Kaca Apa?
                </h1>
                <br />


                <span>
                Kaca yang digunakan untuk <span className="text-[#0d2c40] font-bold">skylight</span> biasanya
                adalah kaca tempered atau kaca laminasi. Kaca tempered adalah kaca yang telah diproses dengan cara pemanasan dan
                pendinginan yang cepat, sehingga menjadi lebih kuat dan tahan terhadap perubahan suhu. Sementara itu, kaca
                laminasi terdiri dari dua atau lebih lapisan kaca yang diikat dengan lapisan plastik, memberikan ketahanan
                terhadap pecahan dan meningkatkan keselamatan. Ada juga kaca dengan lapisan reflektif atau kaca Low-E yang
                membantu menghalau panas dan UV, sehingga menjaga suhu ruangan tetap nyaman. Pemilihan jenis kaca yang tepat
                sangat penting untuk memastikan keawetan dan efisiensi energi skylight.
                </span>
                <br />
                <br />

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Desain Skylight Modern
                </h1>
                <br />


                <span>
                Desain <span className="text-[#0d2c40] font-bold">skylight</span> modern menawarkan berbagai
                bentuk dan ukuran. Dari sky light datar hingga atap yang lebih melengkung, pilihan ini memberikan fleksibilitas
                untuk disesuaikan dengan arsitektur rumah Anda. Dengan bahan kaca tempered yang kuat dan tahan lama, desain sky
                light kini tidak hanya berfungsi sebagai sumber pencahayaan, tetapi juga sebagai elemen estetika yang menambah
                nilai visual pada rumah.
                </span>
                <br />
                <br />
               <span>
                    

                    {/* Navigasi Post */}
                    <div className="flex justify-between items-center mt-8">
                        {/* Tombol Previous Post */}
                        <Link to="artikel/keunggulan-kaca-tempered" className="flex items-center space-x-3 hover:opacity-80">
                            <div className="bg-[#001F5B] p-3 rounded-md text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <span className="text-[#001F5B] font-bold tracking-wide">Previous Post</span>
                        </Link>


                        {/* Tombol Next Post */}
                        <Link to="/artikel/pintu-sliding-aluminium-elegan-praktis-fungsional" className="flex items-center space-x-3 hover:opacity-80">
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

                        {/* Kartu 2 */}
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

                        {/* Kartu 3 */}
                        <Link 
                            to="/artikel/partisi-aluminium-modern" 
                            className="border rounded-lg shadow-md overflow-hidden block hover:shadow-lg transition-transform transform hover:scale-105"
                        >
                            <img
                                src={Partisi3}
                                alt="Partisi Aluminium: Solusi Ideal untuk Ruang yang Modern dan Fungsional"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="font-semibold text-lg text-[#001F5B]">Partisi Aluminium: Solusi Ideal untuk Ruang yang Modern dan Fungsional</h2>
                                <p className="text-sm text-gray-700 mt-2">
                                    Memiliki ruang yang terorganisir dan estetik adalah impian setiap pemilik rumah maupun pebisnis.
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
                            <h2 className="text-2xl font-bold text-[#001F5B] mt-10 text-center">Mau Pasang Skylight agar Rumah Lebih Terang?</h2>
                            <p className="text-lg text-gray-600">Skylight bisa mengubah suasana rumah Anda menjadi lebih cerah, estetik, dan hemat energi.  
    Konsultasikan desain skylight terbaik bersama <span className="font-semibold">Zen Workshop</span>.</p>
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
                    { link: "/artikel/kaca-tempered-kamar-mandi", img: proyek20, title: "Kaca Tempered Kamar Mandi: Pilihan Tepat untuk Kesan Mewah & Aman" },
                    { link: "/artikel/mengenal-jendela-aluminium-dan-keunggulannya-dibanding-material-lainnya", img: proyek17, title: "Mengenal Jendela Aluminium dan Keunggulannya Dibanding Material Lain" },
                    { link: "/artikel/keunggulan-kaca-tempered", img: proyek30, title: "Keunggulan Kaca Tempered atau Tempered Glass" },
                    { link: "/artikel/pintu-sliding-aluminium-elegan-praktis-fungsional", img: proyek32, title: "Pintu Sliding Aluminium: Elegan, Praktis, Dan Fungsional" },
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
