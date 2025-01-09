import { AlMayor,AlMenor,Distribuidor } from "../assets/ventas";

function Community() {
  const Servicios = [
    {
      title: "Ventas al Por Mayor",
      description:
        "En nuestra empresa ofrecemos una amplia variedad de productos plásticos al por mayor, ideales para empresas, mayoristas y distribuidores que buscan soluciones de alta calidad para sus proyectos. Trabajamos con materiales duraderos.",
      imagen: AlMayor,
      
    },
    {
      title: "Ventas al Por Menor",
      description:
        "También ofrecemos productos plásticos al por menor, diseñados para satisfacer las necesidades de nuestros clientes finales. Desde soluciones para el hogar hasta productos especializados, nos aseguramos de brindar opciones accesibles.",
      imagen: AlMenor,
    },
    {
      title: "Distribución de productos",
      description:
        "Como distribuidores oficiales de productos plásticos, nos encargamos de ofrecer a empresas de diferentes sectores soluciones eficientes y personalizadas. Nuestro enfoque está en proporcionar productos de calidad, con un servicio rápido y eficiente.",
      imagen: Distribuidor,
    },
  ];

  return (
    <section id="servicios" className="section flex-col justify-center items-center gap-4 flex">
      <div className="h-[120px] flex-col justify-center items-center gap-2 flex">
        <div className="w-[542px] text-center text-[#4d4d4d] text-4xl font-semibold font-['Inter'] leading-[44px]">
          Lo que ofrecemos
        </div>
        <div className="self-stretch text-center text-[#717171] text-base font-normal font-['Inter'] leading-normal">
          En nuestra corporación, ofrecemos una extensa gama de productos en
          plastiquería y áreas relacionadas.
        </div>
      </div>
      <div className="px-36 justify-between items-center inline-flex flex-wrap gap-6">
        {Servicios.map((servicio, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4 w-[368px]"
          >
            <div className="w-full h-[286px] rounded-lg overflow-hidden">
              <img
                src={servicio.imagen}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm w-full min-h-[250px] text-center flex flex-col ">
              <div className="text-lg font-semibold text-gray-700">
                {servicio.title}
              </div>
              <div className="text-sm text-gray-500 mt-2">
                {servicio.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Community;
