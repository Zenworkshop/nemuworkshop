import React from 'react';
import { useState } from 'react';
import Footer from '../components/Footer';
import { FaPlus, FaHandHoldingUsd, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Partisi from '../assets/pf/pf1.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi1 from '../assets/pf/pf2.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi2 from '../assets/pf/pf3.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi3 from '../assets/pf/pf4.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi4 from '../assets/pk/pk9.jpg'; // Ganti sesuai nama file yang sesuai
import jendelaa from '../assets/jendelaa.jpg'; // Ganti sesuai nama file yang sesuai
import Kaca from '../assets/jsw6.jpg'; // Ganti sesuai nama file yang sesuai
import logo from '../assets/LOGOZBIRU.png'; // Ganti sesuai nama file yang sesuai
import proyek20 from "../assets/sb/sb2.jpg";
import proyek17 from "../assets/jsw/jsw5.jpg";
import proyek30 from "../assets/floorhinge.jpg";
import proyek31 from "../assets/ak/ak2.jpg";
import proyek32 from "../assets/pintusliding1.jpg";
import proyek33 from "../assets/pl/pl2.jpg";
import proyek35 from "../assets/pintukaca.jpg";
import { FaTiktok, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";


export default function Artikel10() {
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
        <span className="text-[#0d2c40] font-medium">Simak 6 Tips Memilih Floor Hinge yang Tepat dan Nyaman</span>
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
                Simak 6 Tips Memilih Floor Hinge yang Tepat dan Nyaman
            </h1>            

            <p className="text-gray-700 text-lg space-y-4">
                <span>
                Salah satu alat bantu untuk
                menjaga keseimbangan dan kekuatan dari daun pintu kaca adalah <span className="text-[#0d2c40] font-bold">floor hinge</span>. Sekarang, hampir
                seluruh rumah di Indonesia, termasuk smart home telah menggunakan floor hinge. Penempatannya terletak di bawah atau dalam
                lantai sehingga sejajar dengan permukaan lantai.
                </span><br /><br />

                <span>
                <span className="text-[#0d2c40] font-bold">floor hinge</span> atau yang sering
                disebut dengan floor spring (engsel lantai) adalah salah satu jenis engsel pintu suatu bangunan. Engsel ini adalah
                mesin berpegas yang memiliki tenaga hidrolik. Bentuknya persegi yang terletak di bawah pintu dan dipasang di bawah
                permukaan lantai.
                </span><br /><br />

                <span>
                Untuk mengenal lebih jauh
                tentang <span className="text-[#0d2c40] font-bold">floor hinge</span>, artikel di bawah ini akan menjelaskan lebih lanjut mengenai pengertian, fungsi, manfaat,
                tips memilihnya, hingga rekomendasi terbaik. Simak hingga tuntas, ya. 
                </span><br /><br />
                
                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Pengertian Floor Hinge
                </h1>
                <br />
                <span>
                Seperti yang telah
                dijelaskan di atas bahwa <span className="text-[#0d2c40] font-bold">floor hinge</span> adalah semacam hardware yang berfungsi untuk menghubungkan pintu dengan
                lantai dan membuat pintu membuka dan menutup secara otomatis. 
                </span><br /><br />

                <span>
                Engsel lantai biasanya
                ditempatkan pada pintu kaca yang berat dan besar. Beberapa gedung yang menggunakannya biasanya adalah gedung
                perkantoran atau pusat perbelanjaan. 
                </span><br /><br />

                <span>
                Ada beberapa komponen dalam
                engsel lantai yaitu bodi utama, penahan pintu, dan mekanisme kunci yang membuat Anda mudah untuk mengunci pintu
                dalam posisi terbuka atau tertutup. 
                </span><br /><br />

                <span>
                Satu hal yang menarik dari
                engsel lantai adalah mampu menyesuaikan kecepatan dan gaya pintu saat membuka dan menutup. Maka dari itu, pintu
                kaca akan terlihat lebih modern dan elegan namun tetap mempertahankan keamanan dan fungsionalitas.
                </span><br /><br />

                        <img
                            src={Partisi1}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi1)}
                        />

                <br />

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Fungsi Floor Hinge
                </h1>
                <br />
                
                <span>
                Ada beberapa fungsi
                mengenai engsel pintu yang perlu Anda ketahui. Engsel ini tidak hanya menghubungkan pintu kaca dengan lantai,
                melainkan juga pintu otomatis. Selain itu, floor hinge memiliki beberapa fungsi lainnya, di antaranya:
                </span><br />

                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                    1. Meningkatkan Keamanan
                </h2>
                <br />

                <span>
                Fungsi pertama yang perlu
                diketahui secara umum adalah mampu meningkatkan keamanan rumah, kantor, atau pusat perbelanjaan. Sebab, mampu
                mengunci pintu secara otomatis baik membuka atau menutup. 
                </span><br /><br />

                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                    2. Meningkatkan Estetika 
                </h2>
                <br />

                <span>
                Kehadiran engsel lantai
                membuat tampilan pintu Anda terlihat lebih menarik dan estetik. Hal ini disebabkan komponen engsel hanya terlihat
                dari dalam dan membuat pintu kaca tampak lebih ramping.
                </span><br /><br />

                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                    3. Memudahkan Akses  
                </h2>
                <br />

                <span>
                Fungsi ketiga adalah
                kemudahan akses terutama bagi tamu atau Anda yang membawa barang dalam jumlah banyak atau berukuran besar. 
                </span><br /><br />

                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                    4. Mengurangi Kebisingan  
                </h2>
                <br />

                <span>
                Anda tentu akan kesal
                apabila ada suara berisik ketika membuka atau menutup pintu. Maka dari itu, kehadiran engsel lantai akan
                mengurangi kebisingan karena mampu mengontrol gaya pintu dan kecepatan. 
                </span><br /><br />

                <span>
                Itulah empat fungsi dari
                <span className="text-[#0d2c40] font-bold">floor hinge</span> yang menjadikan solusi bagi pintu di bangunan yang Anda miliki. 
                </span><br /><br />

                                            <Link 
                                               to="/artikel/partisi-aluminium-modern" 
                                               className="bg-[#e5eff4] text-[#0d2c40] px-4 py-2 w-full block"
                                               >
                                               <span className="text-[#0d2c40] font-light">baca juga:</span> <span className="text-[#0d2c40] font-bold">Partisi Aluminium: Solusi Ideal untuk Ruang yang Modern dan Fungsional</span>
                                            </Link>

                <img
                            src={Partisi2}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi2)}
                        />

                <br />

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Manfaat Floor Hinge
                </h1>
                <br />
                
                <span>
                Setelah memahami fungsinya,
                Anda perlu mengetahui apa saja manfaatnya yaitu: 
                </span><br />

                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                    1. Menghemat Ruang 
                </h2>
                <br />

                <span>
                Manfaat pertama dari engsel
                lantai adalah mampu menghemat ruang. Hal ini disebabkan pintunya yang membuka ke luar ruangan sehingga tidak
                mengambil banyak ruang. 
                </span><br /><br />

                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                    2. Meningkatkan Kenyamanan
                </h2>
                <br />

                <span>
                Manfaat kedua adalah Anda
                tidak perlu menyibukkan diri dengan membuka atau menutup pintu secara manual sebab segalanya otomatis sehingga
                menghadirkan kenyamanan.
                </span><br /><br />

                

                <img
                            src={Partisi3}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi3)}
                        />
                <br /><br />

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Tips Memilih Floor Hinge
                </h1>
                <br />
                
                <span>
                Selanjutnya adalah beberapa
                tips yang dapat membantu Anda memilih <span className="text-[#0d2c40] font-bold">floor hinge</span> yang tepat untuk pintu kaca Anda yaitu:
                </span><br />

                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                    1. Pertimbangkan Ukuran dan Berat Pintu Kaca
                </h2>
                <br />

                <span>
                Hal pertama yang perlu Anda
                ketahui adalah setiap engsel memiliki kapasitas beban yang berbeda. Maka dari itu, perlu melakukan pertimbangan
                terkait ukuran berat pintu kaca. Yang jelas, sesuaikan dengan kebutuhan Anda. 
                </span><br /><br />

                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                    2. Ketahui Jenis Pintu Kaca
                </h2>
                <br />

                <span>
                Ada banyak jenis pintu kaca
                di antaranya pintu kaca geser, pintu kaca tunggal, dan pintu kaca lipat. Maka dari itu, Anda harus perhatikan mana
                yang sesuai dengan kebutuhan. 
                </span><br /><br />

                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                    3. Perhatikan Kualitas dan Keamanan
                </h2>
                <br />

                <span>
                Ketiga, cari dan pilih
                piranti yang memiliki bahan berkualitas dan mudah digunakan sehingga aman untuk diterapkan di pintu.
                </span><br /><br />

                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                    4. Pertimbangkan Gaya dan Desain
                </h2>
                <br />

                <span>
                Banyak engsel yang hadir
                bagi kebutuhan rumah, kantor, atau pusat perbelanjaan. Namun, hanya Zen Workshop yang mampu membuat tampilannya lebih
                modern dan estetik. 
                </span><br /><br />

                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                    5. Perhatikan Kemudahan Penggunaan dan Perawatan
                </h2>
                <br />

                <span>
                Hal cukup penting dari
                engsel lantai adalah memastikan yang mampu dirawat dengan mudah sehingga tidak butuh penggantian dalam jangka
                waktu pendek. 
                </span><br /><br />

                <h2 className="text-xl md:text-2xl font-bold text-[#0d2c40]">
                    6. Cek Review dan Rekomendasi
                </h2>
                <br />

                <span>
                Terakhir, sebelum memutuskan
                untuk membelinya, Anda harus mengetahui review dari merek tersebut. Tak lupa, belilah yang sesuai rekomendasi
                bagus dari pengguna lain. Dengan mempertimbangkan faktor-faktor di atas, Anda dapat memilih floor hinge yang
                tepat dan sesuai dengan kebutuhan Anda.
                </span><br /><br />


               <span>
                    

                    {/* Navigasi Post */}
                    <div className="flex justify-between items-center mt-8">
                        {/* Tombol Previous Post */}
                        <Link to="/artikel/kelebihan-pintu-lipat-aluminium-rumah-minimalis-modern" className="flex items-center space-x-3 hover:opacity-80">
                            <div className="bg-[#001F5B] p-3 rounded-md text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <span className="text-[#001F5B] font-bold tracking-wide">Previous Post</span>
                        </Link>


                        {/* Tombol Next Post */}
                        <Link to="/artikel/rincian-pemasangan-pintu-kaca" className="flex items-center space-x-3 hover:opacity-80">
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
                            to="/artikel/kaca-tempered-kamar-mandi" 
                            className="border rounded-lg shadow-md overflow-hidden block hover:shadow-lg transition-transform transform hover:scale-105"
                        >
                            <img
                                src={proyek20}
                                alt="Kaca Tempered Kamar Mandi: Pilihan Tepat untuk Kesan Mewah & Aman"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="font-semibold text-lg text-[#001F5B]">Kaca Tempered Kamar Mandi: Pilihan Tepat untuk Kesan Mewah & Aman</h2>
                                <p className="text-sm text-gray-700 mt-2">
                                    Kaca Tempered merupakan salah satu material yang paling banyak digunakan dalam desain
                                </p>
                            </div>
                        </Link>

                        {/* Kartu 2 */}
                        <Link 
                            to="/artikel/mengenal-jendela-aluminium-dan-keunggulannya-dibanding-material-lainnya" 
                            className="border rounded-lg shadow-md overflow-hidden block hover:shadow-lg transition-transform transform hover:scale-105"
                        >
                            <img
                                src={proyek17}
                                alt="Mengenal Jendela Aluminium dan Keunggulannya Dibanding Material Lain"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="font-semibold text-lg text-[#001F5B]">Mengenal Jendela Aluminium dan Keunggulannya Dibanding Material Lain</h2>
                                <p className="text-sm text-gray-700 mt-2">
                                    Jendela aluminium sudah dikenal dan dimanfaatkan puluhan tahun sejak maraknya desain bergaya modern.
                                </p>
                            </div>
                        </Link>

                        {/* Kartu 3 */}
                        <Link 
                            to="/artikel/keunggulan-kaca-tempered" 
                            className="border rounded-lg shadow-md overflow-hidden block hover:shadow-lg transition-transform transform hover:scale-105"
                        >
                            <img
                                src={proyek30}
                                alt="Keunggulan Kaca Tempered atau Tempered Glass"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="font-semibold text-lg text-[#001F5B]">Keunggulan Kaca Tempered atau Tempered Glass</h2>
                                <p className="text-sm text-gray-700 mt-2">
                                    Kaca Tempered atau kaca yang telah diproses dengan pemasangan dan pendinginan cepat ini memiliki kekuatan
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
                            <h2 className="text-2xl font-bold text-[#001F5B] mt-10 text-center">Bingung Memilih Floor Hinge yang Tepat?</h2>
                            <p className="text-lg text-gray-600">Konsultasikan kebutuhan <span className="font-semibold">pintu kaca & floor hinge</span> Anda dengan tim ahli Zen Workshop.  
    Kami siap memberikan rekomendasi terbaik sesuai desain dan budget Anda.</p>
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
                    { link: "/artikel/skylight-rumah-interior-terang-estetik", img: proyek31, title: "Skylight Rumah: Cara Efektif Bikin Interior Lebih Terang & Estetik" },
                    { link: "/artikel/pintu-sliding-aluminium-elegan-praktis-fungsional", img: proyek32, title: "Pintu Sliding Aluminium: Elegan, Praktis, Dan Fungsional" },
                    { link: "/artikel/kelebihan-pintu-lipat-aluminium-rumah-minimalis-modern", img: proyek33, title: "Kelebihan Pintu Lipat Aluminium untuk Rumah Minimalis Modern" },
                    { link: "/artikel/rincian-pemasangan-pintu-kaca", img: proyek35, title: "Bagaimana Rincian Pemasangan untuk Pintu Kaca" },
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
