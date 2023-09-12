import Socials from "../Socials";

const Footer = () => {
  return (
    <footer className="bg-blue-950 px-[10%] py-[1%] flex justify-between text-white">
      <div className="flex flex-col justify-around">
        <Socials />
        <div className="text-emerald-300">
          <ul className="flex gap-2">
            <li className="hover:cursor-pointer hover:text-emerald-100">
              Acerca de Nosotros
            </li>
            <li className="hover:cursor-pointer hover:text-emerald-100">
              Términos y Condiciones
            </li>
            <li className="hover:cursor-pointer hover:text-emerald-100">
              Política de Privacidad
            </li>
            <li className="hover:cursor-pointer hover:text-emerald-100">
              Contacto
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-[40%] gap-[5%]">
        <section>
          <h4 className="text-emerald-300 mb-2 font-bold">Ayuda</h4>
          <ul>
            <li className="hover:cursor-pointer hover:opacity-[0.7]">
              Atención al cliente
            </li>
            <li className="hover:cursor-pointer hover:opacity-[0.7]">
              Información COVID
            </li>
            <li className="hover:cursor-pointer hover:opacity-[0.7]">
              FAQ
            </li>
            <li className="hover:cursor-pointer hover:opacity-[0.7]">
              Sucursales
            </li>
          </ul>
        </section>
        <section>
          <h4 className="text-emerald-300 mb-2 font-bold">Contáctanos</h4>
          <ul>
            <li className="hover:cursor-pointer hover:opacity-[0.7]">
              +52 55 5555 5555
            </li>
            <li className="hover:cursor-pointer hover:opacity-[0.7]">
              WhatsApp
            </li>
            <li className="hover:cursor-pointer hover:opacity-[0.7]">
            Horario: L - V: 09:00 - 18:00
            </li>
            <li className="hover:cursor-pointer hover:opacity-[0.7]">
            contacto@happytravel.com.mx
            </li>
          </ul>
        </section>
        <section>
          <h4 className="text-emerald-300 mb-2 font-bold">Ejemplo 3</h4>
          <ul>
          <li className="hover:cursor-pointer hover:opacity-[0.7]">
              ejemplos
            </li>
            <li className="hover:cursor-pointer hover:opacity-[0.7]">
              ejemplos
            </li>
            <li className="hover:cursor-pointer hover:opacity-[0.7]">
              ejemplos
            </li>
            <li className="hover:cursor-pointer hover:opacity-[0.7]">
              ejemplos
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
