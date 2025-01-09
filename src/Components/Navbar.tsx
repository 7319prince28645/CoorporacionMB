import Logo from "../assets/logocoorporacion.png";
import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -30% 0px" }
    );

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const getLinkClass = (section: string) => {
    return activeSection === section
      ? "border-b-2 border-[#07296E] text-[#07296E] font-semibold"
      : "text-[#18191f] font-normal";
  };

  // Función para desplazarse a una sección específica
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100; // Ajuste el valor de este offset si es necesario
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
    <main className="sticky top-0 z-50 w-full h-[84px] bg-[#f5f7f9] flex items-center overflow-hidden shadow-md">
      <section className="w-full justify-evenly items-center gap-[50px] inline-flex overflow-hidden">
        <a href="/">
          <img src={Logo} alt="Logo" className="w-[160px] h-16" />
        </a>
        <article className="flex gap-16">
          <article
            className={`justify-start items-center gap-2.5 cursor-pointer flex ${getLinkClass(
              "home"
            )}`}
            onClick={() => handleScrollToSection("home")}
          >
            <div className="text-base font-medium font-['Inter'] leading-normal">
              Home
            </div>
          </article>
          <div
            className={`justify-start items-center gap-2.5 flex cursor-pointer ${getLinkClass(
              "clientes"
            )}`}
            onClick={() => handleScrollToSection("clientes")}
          >
            <div className="text-base font-normal font-['Inter'] leading-normal">
              Clientes
            </div>
          </div>
          <div
            className={`justify-start items-center gap-2.5 flex cursor-pointer ${getLinkClass(
              "servicios"
            )}`}
            onClick={() => handleScrollToSection("servicios")}
          >
            <div className="text-base font-normal font-['Inter'] leading-normal">
              Servicios
            </div>
          </div>
          <div
            className={`justify-start items-center gap-2.5 flex cursor-pointer ${getLinkClass(
              "caracteristicas"
            )}`}
            onClick={() => handleScrollToSection("caracteristicas")}
          >
            <div className="text-base font-normal font-['Inter'] leading-normal">
              Caracteristicas
            </div>
          </div>
          <div
            className={`justify-start items-center gap-2.5 flex cursor-pointer ${getLinkClass(
              "nosotros"
            )}`}
            onClick={() => handleScrollToSection("nosotros")}
          >
            <div className="text-base font-normal font-['Inter'] leading-normal">
              Nosotros
            </div>
          </div>
          <div
            className={`justify-start items-center gap-2.5 flex cursor-pointer ${getLinkClass(
              "ubicacion"
            )}`}
            onClick={() => handleScrollToSection("ubicacion")}
          >
            <div className="text-base font-normal font-['Inter'] leading-normal">
              Ubicacion
            </div>
          </div>
          <div
            className={`justify-start items-center gap-2.5 flex cursor-pointer ${getLinkClass(
              "contactos"
            )}`}
            onClick={() => handleScrollToSection("contactos")}
          >
            <div className="text-base font-normal font-['Inter'] leading-normal">
              Contactos
            </div>
          </div>
        </article>
        <a
          href="https://coorporacionmonicaybeto.digitalmaiden.ibu.pe/ecommerce"
          target="_blank"
          className="px-5 py-2.5 bg-[#07296E] rounded-md justify-start items-center gap-2.5 flex"
        >
          <p className="text-center text-[#ebebeb] text-sm font-medium font-['Inter'] leading-tight">
            Visitar Tienda
          </p>
        </a>
      </section>
    </main>
  );
}

export default Navbar;
