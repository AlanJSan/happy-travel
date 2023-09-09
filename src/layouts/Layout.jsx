import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ( {children} ) => {
  return (
    <>
      <Header />
      <main className="bg-slate-300">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
