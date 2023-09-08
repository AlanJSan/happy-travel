import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-blue-950 px-[3%] py-[1%] flex justify-around text-white">
      <div className="flex flex-col justify-around">
        <Socials />
        <div className="text-emerald-300">
          <ul className="flex gap-2">
            <li>ejemplos</li>
            <li>ejemplos</li>
            <li>ejemplos</li>
            <li>ejemplos</li>
          </ul>
        </div>
      </div>
      <div className="flex w-[40%] gap-[25%]">
        <section>
          <h4 className="text-emerald-300 mb-2">Ejemplo 1</h4>
          <ul>
            <li>ejemplos</li>
            <li>ejemplos</li>
            <li>ejemplos</li>
            <li>ejemplos</li>
          </ul>
        </section>
        <section>
          <h4 className="text-emerald-300 mb-2">Ejemplo 2</h4>
          <ul>
            <li>ejemplos</li>
            <li>ejemplos</li>
            <li>ejemplos</li>
            <li>ejemplos</li>
          </ul>
        </section>
        <section>
          <h4 className="text-emerald-300 mb-2">Ejemplo 3</h4>
          <ul>
            <li>ejemplos</li>
            <li>ejemplos</li>
            <li>ejemplos</li>
            <li>ejemplos</li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
