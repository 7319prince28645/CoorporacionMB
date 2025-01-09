import Logo from "../assets/logocoorporacion.png";
import ContactUs from "./Redes";

function Footer() {
  // Función para manejar el scroll hacia la sección correspondiente
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100; // Ajuste el valor de este offset si es necesario.
      const startPosition = window.pageYOffset;
      const endPosition = section.offsetTop - offset;
      const distance = endPosition - startPosition;
      const duration = 800; // Duración en milisegundos
  
      let startTime: number | null = null;
  
      // Función para el desplazamiento suave
      const smoothScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Asegura que el progreso no se pase de 1
        const scrollTo = startPosition + distance * progress;
  
        window.scrollTo(0, scrollTo);
  
        if (timeElapsed < duration) {
          requestAnimationFrame(smoothScroll); // Continúa la animación si no ha terminado
        }
      };
  
      requestAnimationFrame(smoothScroll); // Inicia la animación
    }
  };
  

  return (
    <div id="contactos" className="section mt-8 w-full py-16 px-32 bg-[#263238] justify-between gap-[125px] inline-flex">
      <div className="flex-col justify-start items-start gap-10 inline-flex overflow-hidden">
        <div className="justify-start items-center gap-[9.89px] inline-flex">
          <img src={Logo} alt="" className="w-96 h-24" />
        </div>
        <div className="flex-col justify-start items-center gap-2 flex overflow-hidden">
          <div className="w-[350px] text-[#f5f7f9] text-sm font-normal font-['Inter'] leading-tight">
            Copyright © 2025 Digital Maiden.
          </div>
          <div className="w-[350px] text-[#f5f7f9] text-sm font-normal font-['Inter'] leading-tight">
            Todos los derechos reservados.
          </div>
        </div>
      </div>
      <div className="justify-start items-start gap-[30px] flex overflow-hidden">
        <div className="flex-col gap-6 inline-flex overflow-hidden">
          <div className="text-white text-center text-xl font-semibold font-['Inter'] leading-7">
            Empresa
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-2 justify-items-center items-center" style={{ width: "fit-content" }}>
            <div 
              className="w-40 text-[#f5f7f9] text-sm font-normal font-['Inter'] leading-tight cursor-pointer"
              onClick={() => handleScrollToSection('clientes')}
            >
              Nuestros clientes
            </div>
            <div 
              className="w-40 text-[#f5f7f9] text-sm font-normal font-['Inter'] leading-tight cursor-pointer"
              onClick={() => handleScrollToSection('servicios')}
            >
              Nuestros Servicios
            </div>
            <div 
              className="w-40 text-[#f5f7f9] text-sm font-normal font-['Inter'] leading-tight cursor-pointer"
              onClick={() => handleScrollToSection('caracteristicas')}
            >
              Caracteristicas
            </div>
            <div 
              className="w-40 text-[#f5f7f9] text-sm font-normal font-['Inter'] leading-tight cursor-pointer"
              onClick={() => handleScrollToSection('nosotros')}
            >
              Sobre Nosotros
            </div>
            <div 
              className="w-40 text-[#f5f7f9] text-sm font-normal font-['Inter'] leading-tight cursor-pointer"
              onClick={() => handleScrollToSection('ubicacion')}
            >
              Ubicación
            </div>
            <a
              href="https://coorporacionmonicaybeto.digitalmaiden.ibu.pe/ecommerce"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5f7f9] w-40"
            >
              Visitar Tienda
            </a>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}

export default Footer;
