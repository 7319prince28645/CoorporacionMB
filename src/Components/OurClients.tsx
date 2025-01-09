import {
  BateriaCarBajal,
  CienciasSalud,
  Benhur,
  MiPollo,
  Naysha,
  Shulita,
  Socopur,
  Tropical,
} from "../assets/clientecoor";

function OurClients() {
  const clients = [
    {
      name: "Bateria CarBajal",
      image: BateriaCarBajal,
    },
    {
      name: "Ciencias de la Salud",
      image: CienciasSalud,
    },
    {
      name: "Benhur",
      image: Benhur,
    },
    {
      name: "Mi Pollo",
      image: MiPollo,
    },
    {
      name: "Naysha",
      image: Naysha,
    },
    {
      name: "Shulita",
      image: Shulita,
    },
    {
      name: "Socopur",
      image: Socopur,
    },
    {
      name: "Tropical",
      image: Tropical,
    },
  ];

  return (
    <section
      id="clientes"
      className="section px-36 py-8 flex-col justify-start items-center gap-4 flex"
    >
      <div className="h-[76px] flex-col justify-start items-center gap-2 flex">
        <div className="self-stretch text-center text-[#4d4d4d] text-4xl font-semibold font-['Inter'] leading-[44px]">
          Nuestros Clientes
        </div>
        <div className="self-stretch text-center text-[#717171] text-base font-normal font-['Inter'] leading-normal">
          Algunos de nuestros clientes que confian en nosotros.
        </div>
      </div>
      <div className="self-stretch h-[98px] py-16 justify-between items-center inline-flex">
        {clients.map((client, index) => (
          <div key={index} className="w-24 h-24 relative rounded-lg">
            <img
              src={client.image}
              alt="sadsads"
              className="filter drop-shadow-lg w-28 h-24 left-[4px] top-[4px] absolute  overflow-hidden rounded-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurClients;
