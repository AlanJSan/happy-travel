const Banner = () => {
  return (
    <>
      <div className="max-w-[350px] mx-auto flex flex-col items-center gap-3">
        <h1>Titulo 1</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto
          impedit iure omnis hic sed amet consectetur in aliquam sapiente ab earum
          laudantium ex, aut quidem officia voluptatum veritatis voluptatibus.
        </p>
        <button className="bg-emerald-500 rounded-full w-[150px] h-[40px]">Contáctanos</button>
      </div>
      <div className="flex gap-[7%] justify-center relative top-[13vh]">
        <div className="w-[250px] aspect-video rounded-lg bg-blue-950">o</div>
        <div className="w-[250px] aspect-video rounded-lg bg-blue-950">o</div>
        <div className="w-[250px] aspect-video rounded-lg bg-blue-950">o</div>
      </div>
    </>
  );
};

export default Banner;
