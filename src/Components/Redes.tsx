import { FaWhatsapp, FaFacebook, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function ContactUs() {
  return (
    <div className=" flex flex-col items-center gap-16">
      <h2 className="text-xl font-semibold text-white">Nuestros Contactos</h2>
      <div className="flex items-center gap-8">
        {/* WhatsApp */}
        <a
          href="https://wa.me/944186747" // Cambia el número
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#25D366] text-3xl hover:text-[#1ebc5b] transition"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=100004212376154" // Cambia por tu página de Facebook
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4267B2] text-3xl hover:text-[#365899] transition"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>

        {/* Teléfono */}
        <a
          href="tel:+51944186747" // Cambia el número
          className="text-[#4CAF50] text-3xl hover:text-[#43a047] transition"
          aria-label="Llamar"
        >
          <FaPhoneAlt />
        </a>

        {/* Correo */}
        <a
          href="mailto:gerencia@coorporacionmb.com" // Cambia el correo
          className="text-[#F44336] text-3xl hover:text-[#d32f2f] transition"
          aria-label="Correo"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
