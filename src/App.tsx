import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import SocialButtons from './components/SocialButtons';
import ReactPixel from 'react-facebook-pixel';
import JenisJendela from './pages/JenisJendela';
import Slidingdoor from './pages/Slidingdoor';
import Partisikaca from './pages/PartisiKaca';
import PintuLipatAluminium from './pages/PintuLipatAluminium';
import PintuFloorhinge from './pages/PintuFloorhinge';
import KanopiKaca from './pages/KanopiKaca';
import KitchensetAluminium from './pages/KitchensetAluminium';
import KandangKucing from './pages/KandangKucing';
import Artikel from "./pages/Artikel";
import Berita from "./pages/Berita";
import Artikel2 from "./pages/Artikel2";
import Artikel3 from "./pages/Artikel3";
import Artikel4 from "./pages/Artikel4";
import Artikel5 from "./pages/Artikel5";
import Artikel6 from "./pages/Artikel6";
import Artikel7 from "./pages/Artikel7";
import Artikel8 from "./pages/Artikel8";
import Artikel9 from "./pages/Artikel9";
import Artikel10 from "./pages/Artikel10";


function App() {
  useEffect(() => {
    const options = {
      autoConfig: true,
      debug: false,
    };

    // ReactPixel.init('YOUR_PIXEL_ID', undefined, options); // 'undefined' gantiin null di TS
    // ReactPixel.pageView(); // Track page view
  }, []);

  

  return (
    <Router>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jenis-jendela" element={<JenisJendela />} />
          <Route path="/partisi-kaca" element={<Partisikaca />} />
          <Route path="/sliding-door" element={<Slidingdoor />} />
          <Route path="/pintulipat-aluminium" element={<PintuLipatAluminium />} />
          <Route path="/pintu-floorhinge" element={<PintuFloorhinge />} />
          <Route path="/kanopi-kaca" element={<KanopiKaca />} />
          <Route path="/kitchenset-aluminium" element={<KitchensetAluminium />} />
          <Route path="/kandang-Kucing" element={<KandangKucing />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/artikel/partisi-aluminium-modern" element={<Artikel2 />} />
          <Route path="/artikel/kaca-tempered-kamar-mandi" element={<Artikel3 />} />
          <Route path="/artikel/mengenal-jendela-aluminium-dan-keunggulannya-dibanding-material-lainnya" element={<Artikel4 />} />
          <Route path="/artikel/keunggulan-kaca-tempered" element={<Artikel5 />} />
          <Route path="/artikel/rincian-pemasangan-pintu-kaca" element={<Artikel6 />} />
          <Route path="/artikel/skylight-rumah-interior-terang-estetik" element={<Artikel7 />} />
          <Route path="/artikel/pintu-sliding-aluminium-elegan-praktis-fungsional" element={<Artikel8 />} />
          <Route path="/artikel/kelebihan-pintu-lipat-aluminium-rumah-minimalis-modern" element={<Artikel9 />} />
          <Route path="/artikel/tips-memilih-floor-hinge-tepat-dan-nyaman" element={<Artikel10 />} />
        </Routes>
        <SocialButtons />
      </div>
    </Router>
  );
}

export default App;