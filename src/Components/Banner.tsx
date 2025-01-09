import Logistic from "../assets/Logistic.png";

function Banner() {
  return (
    <section id="home" className="section w-full self-stretch px-36 pt-16 bg-[#f5f7f9] justify-start items-center gap-[120px] inline-flex">
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch">
            <h2 className="text-[#4d4d4d] text-[64px] font-semibold font-['Inter'] leading-[76px]">
              Con más de 10 años en el mundo de la
            </h2>
            <h1 className="text-[#07296E] text-[64px] font-semibold font-['Inter'] leading-[76px]">
            Plastiqueria
            </h1>
          </div>
          <div className="self-stretch text-[#717171] text-base font-normal font-['Inter'] leading-normal">
          ¿Dónde hacer crecer tu negocio y conseguir lo que necesites?
          </div>
          <h2 className="self-stretch leading-normal">
            Plastiqueria Cooporacion Monica y Beto S.A.C. es una empresa dedicada a la venta de por mayor y menor de productos plásticos, con más de 10 años de experiencia en el mercado, ofreciendo productos de calidad y con la mejor atención al cliente.
          </h2>
        </div>
        <button className="px-8 py-3.5 bg-[#07296E] text-[#ebebeb] rounded justify-center items-center gap-2.5 inline-flex">
            Contactanos
        </button>
      </div>
      <div className="w-[540px] h-[540px] relative">
        <img src={Logistic} alt="sadas" className="w-full h-full object-cover filter drop-shadow-2xl" />
      </div>
      
    </section>
  );
}

export default Banner;
