function Business() {
  return (
    <div id="caracteristicas" className="section flex">
      <div className="w-[1440px] px-36 py-16 bg-[#f5f7f9] justify-between items-center inline-flex">
        <div className="w-[540px] flex-col justify-start items-start gap-2 inline-flex overflow-hidden">
          <div className="flex-col justify-start items-start gap-2 flex overflow-hidden">
            <div className="w-[408px]">
              <span className="text-[#4d4d4d] text-4xl font-semibold font-['Inter'] leading-[44px]">
                Caracteristicas de nuestra
              </span>
              <h2 className="text-[#07296E] text-4xl font-semibold font-['Inter'] leading-[44px]">
                Plastiqueria
              </h2>
            </div>
          </div>
          <div className="self-stretch text-[#18191f] text-base font-normal font-['Inter'] leading-normal">
            Algunos numeros que nos respaldan.
          </div>
        </div>
        <div className="flex-col justify-center items-center gap-10 inline-flex overflow-hidden">
          <div className="justify-center items-center gap-[30px] inline-flex overflow-hidden">
            <div className="justify-center items-center gap-4 flex">
              <div className="flex-col justify-center items-center inline-flex overflow-hidden">
                <div className="w-[191px] text-[#4d4d4d] text-[28px] font-bold font-['Inter'] leading-9">
                  +2,245,341
                </div>
                <div className="w-[191px] text-[#717171] text-base font-normal font-['Inter'] leading-normal">
                  Clientes
                </div>
              </div>
            </div>
            <div className="justify-center items-center gap-4 flex">
              <div className="flex-col justify-start items-start inline-flex overflow-hidden">
                <div className="w-[191px] text-[#4d4d4d] text-[28px] font-bold font-['Inter'] leading-9">
                  +10
                </div>
                <div className="w-[191px] text-[#717171] text-base font-normal font-['Inter'] leading-normal">
                  Años de experiencia
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center items-center gap-[30px] inline-flex overflow-hidden">
            <div className="justify-start items-center gap-4 flex">
              <div className="flex-col justify-start items-start inline-flex overflow-hidden">
                <div className="w-[191px] text-[#4d4d4d] text-[28px] font-bold font-['Inter'] leading-9">
                  +800
                </div>
                <div className="w-[191px] text-[#717171] text-base font-normal font-['Inter'] leading-normal">
                  Productos
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-4 flex">
              <div className="flex-col justify-start items-start inline-flex overflow-hidden">
                <div className="w-[191px] text-[#4d4d4d] text-[28px] font-bold font-['Inter'] leading-9">
                  +3
                </div>
                <div className="w-[191px] text-[#717171] text-base font-normal font-['Inter'] leading-normal">
                  Establecimientos
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%]" />
        </div>
      </div>
    </div>
  );
}

export default Business;
