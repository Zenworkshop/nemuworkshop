import { useEffect } from 'react';
import Footer from '../components/Footer';
import PintuFloorhinge1 from '../components/PintuFloorhinge1';

export default function PintuFloorhinge() {
  useEffect(() => {
    // Masukkan script Meta Pixel
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', '581908744465259');
    fbq('track', 'PageView');
  }, []);

  return (
    <div className="min-h-screen pt-24">
      <PintuFloorhinge1 />
      <Footer />
    </div>
  );
}
