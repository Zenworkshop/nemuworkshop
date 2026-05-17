import { FaWhatsapp } from "react-icons/fa"; // ✅ Import icon WhatsApp

export default function SocialButtons() {
  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 9999,
    }}>
      <a
        href="https://wa.me/6281244997748?text=Halo%2C%20saya%20tertarik%20produk%20aluminium%20setelah%20melihat%20website%20Zen%20Workshop.%20Boleh%20saya%20konsultasi%3F"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: 'white',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          textDecoration: 'none',
          fontSize: '28px', // Tambah ukuran biar iconnya proporsional
        }}
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
