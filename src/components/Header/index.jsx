import Logo from "../Logo";
import Navbar from "../Navbar";
import Socials from "../Socials";

const Header = () => {
  return (
    <header className="">
      <div className="bg-blue-950 px-[10%] flex justify-between items-center h-[60px]">
        <div className="flex gap-3 text-emerald-600">
            <p>Iniciar Sesión</p>
        </div>
        <Socials />
      </div>
      <div className="bg-slate-300 text-center flex justify-between px-[10%] pb-[1%] items-end">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
