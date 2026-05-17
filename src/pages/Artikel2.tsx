import React from 'react';
import { useState } from 'react';
import Footer from '../components/Footer';
import { FaPlus, FaHandHoldingUsd, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Partisi from '../assets/partisi.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi1 from '../assets/pk/pk19.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi2 from '../assets/pk/pk11.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi3 from '../assets/pk/pk13.jpg'; // Ganti sesuai nama file yang sesuai
import Partisi4 from '../assets/pk/pk9.jpg'; // Ganti sesuai nama file yang sesuai
import jendelaa from '../assets/jendelaa.jpg'; // Ganti sesuai nama file yang sesuai
import Kaca from '../assets/jsw6.jpg'; // Ganti sesuai nama file yang sesuai
import logo from '../assets/LOGOZBIRU.png'; // Ganti sesuai nama file yang sesuai
import proyek30 from "../assets/floorhinge.jpg";
import proyek31 from "../assets/ak/ak2.jpg";
import proyek32 from "../assets/pintusliding1.jpg";
import proyek33 from "../assets/pl/pl2.jpg";
import proyek34 from "../assets/pf/pf4.jpg";
import proyek35 from "../assets/pintukaca.jpg";
import proyek20 from "../assets/sb/sb2.jpg";
import { FaTiktok, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";


export default function Artikel2() {
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
        <span className="text-[#0d2c40] font-medium">Partisi Aluminium: Solusi Ideal untuk Ruang yang Modern dan Fungsional</span>
      </nav>

      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Partisi Aluminium: Solusi Ideal untuk Ruang yang Modern dan Fungsional
            </h1>

                        <img
                            src={Partisi}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi)}
                        />

            <p className="text-gray-700 text-lg space-y-4">
                <span>
                Memiliki ruang yang terorganisir dan estetik adalah impian setiap pemilik rumah maupun pebisnis. Salah satu cara
                efektif untuk mencapai hal tersebut adalah dengan menggunakan <span className="text-[#0d2c40] font-bold">partisi
                aluminium. Partisi aluminium</span> tidak hanya memberikan tampilan yang modern dan elegan, tetapi juga
                menawarkan fleksibilitas dan keawetan yang luar biasa. Di pasar Indonesia,
                <span className="text-[#0d2c40] font-bold">Aluminium</span> telah menjadi pilihan utama bagi banyak orang yang
                mencari solusi <span className="text-[#0d2c40] font-bold">partisi aluminium</span> berkualitas tinggi.
                Artikel ini akan membahas secara mendalam mengenai <span className="text-[#0d2c40] font-bold">partisi aluminium</span>,
                mulai dari keunggulan, desain yang ditawarkan, proses pemasangan, hingga layanan purna jual yang mereka sediakan.
                </span>
                
                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Keunggulan Partisi Kaca Aluminium
                </h1>
                <br />


                <span>
                <span className="text-[#0d2c40] font-bold">Partisi aluminium</span> menawarkan berbagai keunggulan yang
                menjadikannya pilihan ideal untuk berbagai jenis ruangan. Salah satu keunggulan utama adalah material <span className="text-[#0d2c40] font-bold">aluminium</span> yang digunakan. <span className="text-[#0d2c40] font-bold">Aluminium</span> dikenal karena sifatnya yang ringan namun kuat,
                sehingga memudahkan proses pemasangan tanpa mengorbankan
                kestabilan dan keawetan. Selain itu, <span className="text-[#0d2c40] font-bold">aluminium</span> tahan terhadap
                korosi dan cuaca, membuat partisi ini cocok untuk penggunaan jangka panjang baik di dalam maupun luar ruangan.
                </span>

                <br />
                <br />

                <span>
                Selain materialnya yang unggul, <span className="text-[#0d2c40] font-bold">partisi aluminium</span> juga
                menawarkan fleksibilitas dalam desain. Dengan berbagai pilihan warna dan finishing, Anda dapat menyesuaikan
                partisi dengan tema dan estetika ruangan Anda. Baik Anda menginginkan tampilan yang minimalis, modern, ataupun
                industrial, tersedia solusi yang sesuai. Keberagaman desain ini memungkinkan pengguna untuk berkreasi tanpa
                batas, menciptakan ruang yang tidak hanya fungsional tetapi juga menarik secara visual.    
                </span>

                        <img
                            src={Partisi1}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi1)}
                        />

                <br />

                <span>
                Keamanan juga menjadi prioritas utama dalam produk <span className="text-[#0d2c40] font-bold">partisi aluminium.</span>
                Dengan konstruksi yang kokoh dan sistem pengunci yang aman, partisi ini memberikan perlindungan ekstra terhadap
                akses yang tidak diinginkan. Ini sangat penting terutama bagi ruang-ruang yang memerlukan tingkat privasi dan
                keamanan tinggi, seperti kantor, laboratorium, atau ruang server.    
                </span>
                <br />
                <br />

                <span>
                Selain itu, <span className="text-[#0d2c40] font-bold">partisi aluminium</span> terkenal dengan kemudahan
                perawatan. Permukaan <span className="text-[#0d2c40] font-bold">aluminium</span> yang halus memudahkan
                pembersihan dari debu dan kotoran, sehingga partisi selalu terlihat baru dan terawat dengan minimal usaha.
                Ini menjadikan <span className="text-[#0d2c40] font-bold">partisi aluminium</span> pilihan yang ekonomis dalam
                jangka panjang, mengingat biaya perawatan yang rendah namun tetap mempertahankan kualitas dan estetika.
                </span>
                <br />
                <br />

                <span>
                Dengan semua keunggulan tersebut, tidak heran jika <span className="text-[#0d2c40] font-bold">partisi aluminium</span> menjadi pilihan favorit bagi banyak orang yang mencari solusi partisi yang modern, fungsional, dan tahan lama.
                </span><br /><br />

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Berbagai Desain Partisi Aluminium yang ditawarkan
                </h1>
                <br />


                <span>
                Memahami bahwa setiap ruangan memiliki kebutuhan dan estetika yang berbeda. Oleh karena itu, mereka menawarkan
                berbagai desain <span className="text-[#0d2c40] font-bold">partisi aluminium</span> yang dapat disesuaikan dengan
                preferensi pelanggan. Mulai dari desain minimalis hingga yang lebih kompleks, tersedia solusi yang memenuhi
                berbagai kebutuhan desain interior.
                </span>

                <br />
                <br />

                <span>
                Salah satu desain populer yang ditawarkan adalah <span className="text-[#0d2c40] font-bold">partisi aluminium</span> dengan panel kaca. Kombinasi <span className="text-[#0d2c40] font-bold">aluminium</span> dan kaca menciptakan
                tampilan yang elegan dan modern, memungkinkan cahaya alami masuk ke dalam ruangan sambil tetap mempertahankan
                privasi. Panel kaca ini juga dapat dilengkapi dengan berbagai teknologi, seperti kaca tempered atau kaca frosted,
                yang meningkatkan fungsi dan estetika partisi.
                </span>

                <br />
                <br />

                <span>
                Untuk ruangan yang mengutamakan fleksibilitas, tersedia desain partisi lipat atau geser. Partisi jenis ini
                memungkinkan perubahan tata letak ruang secara mudah sesuai kebutuhan, misalnya untuk pembagian ruang kerja yang
                dinamis atau menciptakan ruang pertemuan yang lebih besar saat diperlukan. Fitur-fitur ini sangat berguna
                di lingkungan kantor yang selalu berubah dan membutuhkan adaptasi cepat.
                </span>

                <br />

                <Link 
                    to="/artikel/mengenal-jendela-aluminium-dan-keunggulannya-dibanding-material-lainnya" 
                    className="bg-[#e5eff4] text-[#0d2c40] px-4 py-2 w-full block"
                    >
                    <span className="text-[#0d2c40] font-light">baca juga:</span> <span className="text-[#0d2c40] font-bold">Mengenal Jendela Aluminium dan Keunggulannya Dibanding Material Lain</span>
                </Link>
                <img
                            src={Partisi2}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi2)}
                        />

                <br />


                <span>
                Desain <span className="text-[#0d2c40] font-bold">partisi aluminium</span> juga tersedia dalam berbagai warna dan
                finishing. Pilihan warna netral seperti putih, hitam, atau abu-abu sering menjadi favorit karena mudah dipadukan
                dengan berbagai jenis furnitur dan dekorasi. Namun, bagi yang berani bereksperimen, juga ditawarkan warna-warna
                bold seperti merah, biru, atau hijau yang dapat menjadi titik fokus di dalam ruangan.
                </span>

                <br />
                <br />

                <span>
                Selain itu, juga ditawarkan <span className="text-[#0d2c40] font-bold">partisi aluminium</span> dengan motif atau
                ukiran khusus. Desain ini memberikan elemen artistik yang dapat memperkaya tampilan ruangan, membuatnya tidak
                hanya fungsional tetapi juga memiliki nilai estetika yang tinggi. Motif-motif ini bisa disesuaikan dengan tema
                dekorasi ruangan, baik itu modern, klasik, atau industrial.
                </span>

                <br />
                <br />

                <span>
                Dengan beragam pilihan desain ini, <span className="text-[#0d2c40] font-bold">partisi aluminium</span> memungkinkan setiap
                pelanggan untuk menemukan solusi yang paling sesuai dengan kebutuhan dan gaya mereka,
                menciptakan ruang yang tidak hanya praktis tetapi juga indah dipandang.
                </span>

                <img
                            src={Partisi3}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi3)}
                        />
                <br />

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Proses Pemasangan Partisi Kaca Aluminium
                </h1>
                <br />


                <span>
                Proses pemasangan <span className="text-[#0d2c40] font-bold">partisi aluminium</span> dirancang untuk memastikan
                kualitas dan kepuasan pelanggan. Tim profesional yang berpengalaman menangani pemasangan <span className="text-[#0d2c40] font-bold">partisi aluminium</span>, mulai
                dari tahap persiapan hingga penyelesaian akhir. Proses ini melibatkan beberapa langkah penting yang memastikan
                instalasi berjalan lancar dan hasilnya maksimal.
                </span>

                <br />
                <br />

                <span>
                Tahap pertama dalam pemasangan adalah konsultasi dan pengukuran. Tim akan berkunjung ke lokasi untuk memahami
                kebutuhan spesifik pelanggan dan melakukan pengukuran yang akurat. Hal ini penting untuk memastikan partisi yang
                dipasang sesuai dengan dimensi ruangan dan memenuhi fungsinya. Konsultasi ini juga mencakup pemilihan desain dan
                bahan yang paling sesuai dengan estetika dan kebutuhan fungsional ruangan.
                </span>

                <img
                            src={Partisi4}
                            alt="Partisi Kaca"
                            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                            onClick={() => handleImageClick(Partisi4)}
                        />


                <br />

                <span>
                Setelah konsultasi, tahap selanjutnya adalah produksi <span className="text-[#0d2c40] font-bold">partisi aluminium</span>.
                Menggunakan mesin modern dan teknologi terkini untuk memastikan setiap bagian diproduksi dengan presisi tinggi.
                Material <span className="text-[#0d2c40] font-bold">aluminium</span> yang digunakan dipilih dengan cermat untuk
                memastikan kekuatan, keawetan, dan tampilan yang diinginkan. Kustomisasi desain juga dilakukan sesuai dengan
                permintaan pelanggan, baik itu warna, finishing, atau motif khusus.
                </span>

                <br />
                <br />

                <span>
                Proses pemasangan sendiri dilakukan oleh tim yang sudah terlatih dan memiliki keahlian khusus dalam menginstal <span className="text-[#0d2c40] font-bold">partisi aluminium</span>. Mereka
                memastikan setiap bagian terpasang
                dengan benar dan kokoh, sehingga partisi dapat berfungsi dengan optimal dan tahan lama. Tim pemasangan juga
                memperhatikan detail-detail kecil, seperti penyambungan antar bagian, pemasangan kunci atau mekanisme geser,
                serta pengecekan keseluruhan instalasi.
                </span>

                <br />
                <br />

                <span>
                Setelah pemasangan selesai, dilakukan inspeksi akhir untuk memastikan semuanya sesuai dengan standar kualitas
                yang telah ditetapkan. Mereka juga memberikan panduan kepada pelanggan mengenai cara perawatan dan pemeliharaan <span className="text-[#0d2c40] font-bold">partisi aluminium</span> agar
                tetap dalam kondisi terbaik. Jika
                diperlukan, tim siap untuk memberikan dukungan teknis atau melakukan penyesuaian jika ada masalah yang timbul
                setelah pemasangan.
                </span><br /><br />

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Kesimpulan
                </h1>
                <br />


                <span>
                <span className="text-[#0d2c40] font-bold">Partisi aluminium</span> merupakan solusi terbaik bagi siapa saja yang
                mencari partisi yang tidak hanya fungsional tetapi juga estetik dan tahan lama. Dengan keunggulan material <span className="text-[#0d2c40] font-bold">aluminium</span> yang
                kuat, berbagai desain yang fleksibel, proses
                pemasangan profesional, serta layanan purna jual yang komprehensif, memastikan bahwa setiap pelanggan mendapatkan
                produk berkualitas tinggi yang memenuhi kebutuhan spesifik mereka. Baik untuk penggunaan di kantor, rumah, toko,
                maupun ruang publik, <span className="text-[#0d2c40] font-bold">partisi aluminium</span> dapat diandalkan untuk
                menciptakan ruang yang terorganisir, menarik, dan nyaman. Investasi dalam <span className="text-[#0d2c40] font-bold">partisi aluminium</span> berarti
                memilih kualitas, keamanan, dan
                keawetan untuk memperindah dan memaksimalkan fungsi setiap ruangan.
                </span><br /><br />

                <h1 className="text-2xl md:text-3xl font-bold text-[#0d2c40]">
                Faq
                </h1>
                <br />


               <span>
                    1. <strong>Apakah Partisi Aluminium cocok untuk penggunaan outdoor?</strong> Ya, partisi aluminium dirancang
                    untuk tahan terhadap korosi dan cuaca, sehingga sangat cocok untuk
                    penggunaan di luar ruangan.

                    <br /><br />

                    2. <strong>Berapa lama proses pemasangan partisi aluminium?</strong> Waktu pemasangan tergantung pada
                    ukuran dan kompleksitas proyek, namun tim bekerja secara efisien untuk
                    menyelesaikan pemasangan dalam waktu secepat mungkin tanpa mengorbankan kualitas.

                    <br /><br />

                    3. <strong>Apakah ada opsi kustomisasi warna dan desain untuk partisi aluminium?</strong> Ya, tersedia
                    berbagai pilihan warna dan desain yang dapat disesuaikan dengan kebutuhan dan preferensi
                    estetika pelanggan.

                    <br /><br />

                    4. <strong>Bagaimana cara merawat partisi aluminium agar tetap awet dan tampak baru?</strong> Partisi
                    aluminium mudah dirawat; cukup bersihkan secara rutin dengan kain lembab dan hindari penggunaan
                    bahan kimia yang keras untuk menjaga permukaan tetap mulus dan bebas dari kerusakan.

                    <br /><br />

                    {/* Navigasi Post */}
                    <div className="flex justify-between items-center mt-8">
                        {/* Tombol Previous Post */}
                            <Link 
                            to="/artikel/rincian-pemasangan-pintu-kaca" 
                            className="flex items-center space-x-3 hover:opacity-80 transition-transform hover:scale-105"
                            aria-label="Previous article"
                            >
                            <div className="bg-[#001F5B] p-3 rounded-md text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <span className="text-[#001F5B] font-semibold tracking-wide">Previous Post</span>
                            </Link>

                            {/* Tombol Next Post */}
                            <Link 
                            to="/artikel/kaca-tempered-kamar-mandi" 
                            className="flex items-center space-x-3 hover:opacity-80 transition-transform hover:scale-105"
                            aria-label="Next article"
                            >
                            <span className="text-[#001F5B] font-semibold tracking-wide">Next Post</span>
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

                        {/* Kartu 2 */}
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

                        {/* Kartu 3 */}
                        <Link 
                            to="/artikel/tips-merawat-partisi" 
                            className="border rounded-lg shadow-md overflow-hidden block hover:shadow-lg transition-transform transform hover:scale-105"
                        >
                            <img
                                src={proyek32}
                                alt="Tips Merawat Partisi"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="font-semibold text-lg text-[#001F5B]">Pintu Sliding Aluminium: Elegan, Praktis, Dan Fungsional</h2>
                                <p className="text-sm text-gray-700 mt-2">
                                    Pintu sliding aluminium atau pintu geser yang menggunakan bahan aluminium
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
                            <h2 className="text-2xl font-bold text-[#001F5B] mt-10 text-center">Tertarik pasang Partisi Aluminium?</h2>
                            <p className="text-lg text-gray-600">Biar ruanganmu tampil modern, rapi, dan tetap fungsional.</p>
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
                    { link: "/artikel/kelebihan-pintu-lipat-aluminium-rumah-minimalis-modern", img: proyek33, title: "Kelebihan Pintu Lipat Aluminium untuk Rumah Minimalis Modern" },
                    { link: "/artikel/tips-memilih-floor-hinge-tepat-dan-nyaman", img: proyek34, title: "Simak 6 Tips Memilih Floor Hinge yang Tepat dan Nyaman" },
                    { link: "/artikel/rincian-pemasangan-pintu-kaca", img: proyek35, title: "Bagaimana Rincian Pemasangan untuk Pintu Kaca" },
                    { link: "/artikel/kaca-tempered-kamar-mandi", img: proyek20, title: "Kaca Tempered Kamar Mandi: Pilihan Tepat untuk Kesan Mewah & Aman" },
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
