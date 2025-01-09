import Mapas from "./Map";

function Customers() {
  return (
    <div id="ubicacion" className="section -z-40 flex">
      {/* Espacio vacío en el lado izquierdo */}
      <div className="w-[30%]" />

      {/* Contenido principal */}
      <div className="w-full px-36 py-16 bg-[#f5f7f9] flex justify-between items-center">
        {/* Información textual */}
        <div className="w-[540px] flex-col justify-start items-start gap-6">
          <h2 className="text-[#4d4d4d] text-4xl font-semibold font-['Inter'] leading-[44px]">
            Nuestra Plastiquería
          </h2>
          <h2 className="text-[#07296E] text-4xl font-semibold font-['Inter'] leading-[44px]">
            Está ubicada en
          </h2>
          <p>AV. BELLAVISTA NRO. 1208</p>
          <p>A.H. 9 DE OCTUBRE</p>
          <p>Departamento de Ucayali</p>
          <p>Provincia de Coronel Portillo</p>
          <p>Distrito de Callería</p>
        </div>

        {/* Mapa de Google */}
        <div className="w-[500px] h-[400px] rounded-lg overflow-hidden shadow-lg -z-0">
          <Mapas />
        </div>
      </div>
    </div>
  );
}

export default Customers;
