const Banner = () => {
  return (
    <section className="bg-desktop text-center py-[10%] bg-cover max-h-[500px]">
      <div className="max-w-[350px] mx-auto flex flex-col items-center gap-3">
        <h1>Titulo 1</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto
          impedit iure omnis hic sed amet consectetur in aliquam sapiente ab earum
          laudantium ex, aut quidem officia voluptatum veritatis voluptatibus.
        </p>
        <button className="bg-emerald-500 rounded-full w-[150px] h-[40px]">Contáctanos</button>
      </div>
      <div className="flex gap-5 justify-center relative top-[20vh]">
        <div className="w-[100px] border-[1px] border-slate-900 bg-red-500">o</div>
        <div className="w-[100px] border-[1px] border-slate-900 bg-red-500">o</div>
        <div className="w-[100px] border-[1px] border-slate-900 bg-red-500">o</div>
      </div>
    </section>
  );
};

export default Banner;
