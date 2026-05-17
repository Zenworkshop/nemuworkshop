import React from 'react';
import { useState } from 'react';
import Footer from '../components/Footer';
import { FaPlus, FaHandHoldingUsd, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Partisi from '../assets/pintujendela.jpg'; // Ganti sesuai nama file yang sesuai
import Partisii from '../assets/partisi.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi1 from '../assets/pintukaca.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi2 from '../assets/pktitah.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi3 from '../assets/pk/pk13.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi4 from '../assets/pk/pk9.jpg'; // Ganti sesuai nama file yang sesuai
import jendelaa from '../assets/jendelaa.jpg'; // Ganti sesuai nama file yang sesuai
import Kaca from '../assets/jsw6.jpg'; // Ganti sesuai nama file yang sesuai
import logo from '../assets/LOGOZBIRU.png'; // Ganti sesuai nama file yang sesuai
import proyek17 from "../assets/jsw/jsw5.jpg";
import proyek30 from "../assets/floorhinge.jpg";
import proyek31 from "../assets/ak/ak2.jpg";
import proyek32 from "../assets/pintusliding1.jpg";
import proyek33 from "../assets/pl/pl2.jpg";
import proyek34 from "../assets/pf/pf4.jpg";
import { FaTiktok, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";


export default function Artikel6() {
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
        <span className="text-[#0d2c40] font-medium">Bagaimana Rincian Pemasangan untuk Pintu Kaca</span>
      </nav>

      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Bagaimana Rincian Pemasangan untuk Pintu Kaca
            </h1>

            <p className="text-gray-700 text-lg space-y-4">
                <span>
                <span className="text-[#0d2c40] font-bold">Pintu Kaca</span> telah menjadi pilihan populer dalam desain interior dan eksterior bangunan. Keberadaannya tidak hanya
                memberikan nilai estetika yang tinggi, tetapi juga mampu meningkatkan pencahayaan alami dan memberikan kesan ruang
                yang lebih terbuka. Namun, pemasangan pintu kaca memerlukan perhatian dan ketelitian.<br /><br />
                
                Artikel ini akan membahas
                secara mendalam tentang rincian pemasangan pintu kaca, mulai dari persiapan hingga langkah-langkah akhir. Kita akan
                menjelajahi berbagai aspek, termasuk jenis pintu kaca, alat dan bahan yang diperlukan, langkah-langkah pemasangan,
                serta tips dan trik untuk memastikan pintu kaca terpasang dengan sempurna.
                </span><br /><br />

                        <img
                            src={Partisi}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi)}
                        />

                
                
                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                1. Jenis Pintu Kaca dan Kegunaannya
                </h1>
                <br />
                <span>
                <span className="text-[#0d2c40] font-bold">Pintu Kaca</span> hadir dalam berbagai jenis, masing-masing dengan
                keunggulan dan kegunaan tersendiri. Ada beberapa jenis pintu kaca yang umum digunakan, seperti pintu kaca geser,
                pintu kaca swing, dan pintu kaca lipat. Pintu kaca geser, misalnya, sangat ideal untuk ruang yang terbatas karena
                tidak memerlukan ruang tambahan untuk membuka. Sementara itu, pintu kaca swing biasa digunakan di banyak hunian
                dan bangunan komersial, memberikan kemudahan akses dan tampilan yang elegan.
                </span>

                <br />
                <br />
                <span>
                <span className="text-[#0d2c40] font-bold">Pintu Kaca</span> lipat adalah pilihan menarik untuk menciptakan
                keterhubungan antara ruang indoor dan outdoor. Dengan membuka pintu lipat, Anda dapat mengubah suasana ruang,
                memungkinkan udara segar dan pemandangan luar masuk ke dalam ruangan. Jenis-jenis pintu kaca ini dapat dilengkapi
                dengan berbagai aksesoris dan fitur keamanan, seperti kunci otomatis dan sistem penguncian ganda, yang membuatnya
                tidak hanya estetis tetapi juga fungsional.
                </span>
                <br />
                        <img
                            src={Partisi1}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi1)}
                        />
                <br />

                
                <span>
                Memilih jenis <span className="text-[#0d2c40] font-bold">Pintu Kaca</span> yang tepat sangat penting untuk
                memastikan bahwa pintu tersebut sesuai dengan kebutuhan dan desain ruangan Anda. Pertimbangan seperti ukuran,
                kebutuhan ruang, dan tujuan penggunaan harus diperhatikan. Apakah Anda ingin menciptakan kesan terbuka di ruang
                tamu, atau mungkin ingin memberikan akses mudah antara dapur dan taman belakang? Mempertimbangkan semua aspek ini
                dapat membantu Anda membuat keputusan yang tepat.
                </span>

                <br />
                <br />
                <span>
                Selain itu, penggunaan kaca tempered atau laminated juga dapat meningkatkan keamanan dan daya
                tahan <span className="text-[#0d2c40] font-bold">Pintu Kaca</span> Anda. Kaca tempered lebih kuat dan lebih tahan
                terhadap benturan, sementara kaca laminated dapat memberikan perlindungan tambahan jika terjadi pecahan. Memahami
                karakteristik masing-masing jenis kaca ini akan membantu Anda dalam memilih pintu yang tidak hanya indah tetapi
                juga aman dan tahan lama.
                </span>
                <br />

                <br />

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                2. Alat dan Bahan yang diperlukan
                </h1>
                <br />


                <span>
                Sebelum memulai pemasangan <span className="text-[#0d2c40] font-bold">Pintu Kaca</span>, penting untuk
                mengumpulkan semua alat dan bahan yang diperlukan. Daftar alat dasar yang harus disiapkan antara lain: bor
                listrik, obeng, paku dan sekrup, pengukur, level, dan palu. Selain itu, Anda juga memerlukan alat pemotong kaca,
                penjepit kaca, dan gasket untuk menjaga agar kaca tetap aman dan tidak bergerak saat dipasang.
                </span>

                <br />
                <br />

                <span>
                Bahan yang diperlukan meliputi bingkai <span className="text-[#0d2c40] font-bold">Pintu Kaca</span>, kaca sesuai
                ukuran yang diinginkan, dan aksesoris seperti pegangan pintu, kunci, dan engsel. Pastikan untuk memilih bahan
                berkualitas tinggi agar pintu kaca Anda lebih tahan lama dan aman. Memilih bingkai yang tepat tidak hanya memberi
                dukungan pada kaca, tetapi juga dapat menambah daya tarik visual pintu.
                </span>

                <br />

                                                            <Link 
                                                               to="/artikel/kaca-tempered-kamar-mandi" 
                                                               className="bg-[#e5eff4] text-[#0d2c40] px-4 py-2 w-full block"
                                                               >
                                                               <span className="text-[#0d2c40] font-light">baca juga:</span> <span className="text-[#0d2c40] font-bold">Kaca Tempered Kamar Mandi: Pilihan Tepat untuk Kesan Mewah & Aman</span>
                                                            </Link>
                <img
                            src={Partisi2}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi2)}
                        />

                <br />
                <br />
                <span>
                Setiap jenis <span className="text-[#0d2c40] font-bold">Pintu Kaca</span> mungkin memerlukan
                alat dan bahan tambahan. Misalnya, jika Anda memilih pintu kaca geser, Anda akan memerlukan rel dan roda untuk
                memungkinkan pintu bergerak dengan lancar. Pastikan untuk membaca petunjuk pemasangan dari produsen dengan
                seksama untuk mengetahui alat dan bahan yang dibutuhkan untuk jenis pintu tertentu.
                </span>
                <br /><br />
                <span>
                Terakhir, jangan lupa untuk melengkapi diri
                Anda dengan alat pelindung diri seperti sarung tangan dan kacamata keselamatan.
                Pemasangan <span className="text-[#0d2c40] font-bold">Pintu Kaca</span> bisa
                berisiko jika tidak dilakukan dengan hati-hati, terutama saat menangani kaca yang berat. Memastikan keselamatan
                selama proses pemasangan sangatlah penting untuk menghindari cedera.
                </span>
                <br /><br />

                 <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                3. Langkah-langkah Pemasangan Pintu Kaca
                </h1>
                <br />
                <span>
                Setelah semua alat dan bahan siap,
                langkah pertama dalam pemasangan untuk <span className="text-[#0d2c40] font-bold">Pintu Kaca</span> adalah
                menyiapkan area pemasangan. Pastikan area tersebut
                bersih dan memiliki akses yang cukup untuk bergerak. Jika Anda mengganti pintu yang lama, lepaskan pintu
                tersebut dan bersihkan sisa-sisa bingkai yang mungkin masih ada. Gunakan level untuk memastikan bahwa
                permukaan tempat pintu akan dipasang rata dan tegak.
                </span>

                <br />
                <br />
                <span>
                Langkah selanjutnya adalah memasang bingkai
                pintu. Mulailah dengan menempatkan bingkai di tempat yang telah disiapkan, pastikan posisi bingkai benar dan rata.
                Menggunakan pengukur, pastikan bingkai terpasang dengan benar dan tidak miring. Pada tahap ini, gunakan sekrup
                untuk mengencangkan bingkai ke dinding. Pastikan bingkai sudah terpasang dengan kencang dan aman sebelum
                melanjutkan.
                </span>
                <br />
                <br />

                <span>
                Setelah bingkai terpasang, saatnya untuk
                memasukkan kaca. Jika Anda menggunakan kaca tempered, pastikan untuk memakai sarung tangan pelindung saat
                menangani kaca. Tempatkan gasket di dalam bingkai untuk memberikan perlindungan ekstra bagi kaca dan menghindari
                goresan. Dengan bantuan penjepit kaca, pasang kaca dengan hati-hati ke tempatnya. Pastikan kaca terpasang dengan
                baik dan tidak ada ruang antara kaca dan bingkai.
                </span>
                <br />
                <br />

                <span>
                Setelah kaca terpasang, langkah terakhir adalah
                memasang aksesoris seperti pegangan dan kunci. Pastikan semua bagian berfungsi dengan baik dan tidak ada bagian
                yang longgar. Terakhir, lakukan pengujian untuk memastikan pintu dapat dibuka dan ditutup dengan mudah tanpa
                masalah. Jika semuanya berjalan dengan baik, Anda sudah berhasil
                memasang <span className="text-[#0d2c40] font-bold">Pintu Kaca</span> dengan baik.
                </span>
                <br />
                <br />

                <img
                            src={Partisi3}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi3)}
                        />
                <br /><br />

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                4. Tips dan Trik untuk Pemasangan yang Sukses
                </h1>
                <br />
                <span>
                Pemasangan untuk <span className="text-[#0d2c40] font-bold">Pintu Kaca</span> memerlukan
                perhatian terhadap detail untuk memastikan hasil yang memuaskan. Salah satu tips pertama adalah selalu membaca
                petunjuk pemasangan dari produsen sebelum memulai. Setiap jenis pintu kaca mungkin memiliki instruksi khusus yang
                harus diikuti untuk memastikan keamanan dan kinerja yang optimal. Mengabaikan petunjuk ini dapat berakibat fatal
                dan menyebabkan kerusakan pada pintu atau bahkan cedera.
                </span>

                <br />
                <br />
                <span>
                Pastikan untuk bekerja dengan hati-hati dan
                tidak terburu-buru. Kaca adalah material yang rapuh dan bisa pecah jika tidak ditangani dengan benar. Luangkan
                waktu untuk mengukur dan menandai posisi dengan tepat sebelum memotong atau memasang. Kesalahan kecil dalam
                pengukuran dapat mengakibatkan masalah besar di kemudian hari, seperti pintu yang tidak pas atau tidak dapat
                dibuka dengan baik.
                </span>
                <br />
                <br />

                <span>
                Memanfaatkan bantuan orang lain juga bisa
                sangat berguna. Pemasangan untuk <span className="text-[#0d2c40] font-bold">Pintu Kaca</span>, terutama yang besar atau berat, bisa menjadi tugas yang sulit
                dilakukan sendiri. Memiliki seseorang untuk membantu memegang atau menstabilkan saat Anda memasang dapat membuat
                proses lebih mudah dan lebih aman. Selain itu, minta pendapat orang lain tentang estetika dan fungsionalitas
                hasil akhir dapat memberikan perspektif yang berharga.
                </span>
                <br />
                <br />

                <span>
                Akhirnya, jangan ragu untuk menginvestasikan
                lebih banyak uang untuk kualitas yang lebih baik. Pilihan bahan yang baik dan aksesoris yang tahan lama akan
                berpengaruh pada keawetan dan keamanan <span className="text-[#0d2c40] font-bold">Pintu Kaca</span> Anda. Dengan melakukan investasi yang tepat, Anda tidak hanya
                mendapatkan hasil yang lebih baik, tetapi juga menghemat biaya perbaikan atau penggantian di masa depan.
                </span>
                <br />
                <br />

                <img
                            src={Partisi4}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi4)}
                        />


                <br />

                

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Kesimpulan
                </h1>
                <br />


                <span>
                Pemasangan untuk <span className="text-[#0d2c40] font-bold">Pintu Kaca</span> adalah proses yang
                memerlukan ketelitian dan perhatian terhadap detail. Dengan memilih jenis pintu yang tepat, menyiapkan semua alat
                dan bahan yang diperlukan, mengikuti langkah-langkah pemasangan dengan hati-hati, serta menerapkan tips dan trik
                yang berguna, Anda dapat mencapai hasil yang memuaskan. Pintu kaca tidak hanya memberikan keindahan dan
                fungsionalitas, tetapi juga meningkatkan nilai estetika ruang Anda. Jangan ragu untuk mencoba pemasangan pintu
                kaca sendiri, namun jika merasa tidak yakin, selalu ada pilihan untuk memanggil tenaga profesional untuk
                membantu.</span><br /><br />

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Faq
                </h1>
                <br />


               <span>
                    <strong>1. Apakah saya perlu menggunakan alat khusus untuk memasang pintu kaca?</strong>  
                    Iya, Anda akan membutuhkan beberapa alat khusus seperti pemotong kaca, penjepit kaca, dan alat pengukur untuk
                    memastikan pemasangan yang aman dan akurat.

                    <br /><br />

                    <strong>2. Berapa lama waktu yang dibutuhkan untuk memasang pintu kaca?</strong>  
                    Waktu yang diperlukan bervariasi tergantung pada kompleksitas desain dan ukuran pintu, tetapi secara umum,
                    pemasangan dapat memakan waktu beberapa jam hingga satu hari.

                    <br /><br />

                    <strong>3. Apakah saya perlu izin pemasangan untuk pintu kaca di rumah?</strong>  
                    Tergantung pada lokasi dan jenis bangunan, Anda mungkin perlu memeriksa regulasi setempat atau meminta izin,
                    terutama jika ada perubahan pada struktur bangunan.

                    <br /><br />

                    <strong>4. Apa yang harus dilakukan jika pintu kaca tidak dapat dibuka atau ditutup dengan baik setelah
                    dipasang?</strong>  
                    Periksa kembali semua komponen pemasangan, termasuk bingkai dan engsel, untuk memastikan semuanya terpasang
                    dengan benar. Jika perlu, dapatkan bantuan profesional untuk mengevaluasi masalah tersebut.

                    <br /><br />

                    {/* Navigasi Post */}
                    <div className="flex justify-between items-center mt-8">
                        {/* Tombol Previous Post */}
                        <Link to="/artikel/tips-memilih-floor-hinge-tepat-dan-nyaman" className="flex items-center space-x-3 hover:opacity-80">
                            <div className="bg-[#001F5B] p-3 rounded-md text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <span className="text-[#001F5B] font-bold tracking-wide">Previous Post</span>
                        </Link>


                        {/* Tombol Next Post */}
                        <Link to="/artikel/partisi-aluminium-modern" className="flex items-center space-x-3 hover:opacity-80">
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

                        {/* Kartu 2 */}
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

                        {/* Kartu 3 */}
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
                            <h2 className="text-2xl font-bold text-[#001F5B] mt-10 text-center">Ingin Pintu Kaca Terpasang Rapi dan Presisi?</h2>
                            <p className="text-lg text-gray-600">Percayakan pemasangan <span className="font-semibold">pintu kaca berkualitas</span> kepada tim profesional Zen Workshop.  
    Kami siap memberikan hasil terbaik dengan standar keamanan tinggi dan desain modern.</p>
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
                    { link: "/artikel/pintu-sliding-aluminium-elegan-praktis-fungsional", img: proyek32, title: "Pintu Sliding Aluminium: Elegan, Praktis, Dan Fungsional" },
                    { link: "/artikel/kelebihan-pintu-lipat-aluminium-rumah-minimalis-modern", img: proyek33, title: "Kelebihan Pintu Lipat Aluminium untuk Rumah Minimalis Modern" },
                    { link: "/artikel/tips-memilih-floor-hinge-tepat-dan-nyaman", img: proyek34, title: "Simak 6 Tips Memilih Floor Hinge yang Tepat dan Nyaman" },
                    { link: "/artikel/partisi-aluminium-modern", img: Partisii, title: "Partisi Aluminium: Solusi Ideal untuk Ruang yang Modern dan Fungsional" },
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
