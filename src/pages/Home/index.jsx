import Banner from "../../components/Banner/Banner";
import CardGroup from "../../components/CardGroup/CardGroup";
import CommentCarouselItem from "../../components/CommentCarouselItem";
import Layout from "../../layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="bg-desktop text-center py-[10%] bg-cover max-h-[500px]">
        <Banner />
      </section>
      <section className="focus:outline-none mt-44">
        <h1 className="text-center">PAQUETES DE VIAJES</h1>
        <CardGroup />
      </section>
      <section>
        <h1 className="text-center">CARRUSEL DE HOTELES</h1>
      </section>
      <section>
        <h1 className="text-center">REFERENCIAS DE PERSONAS</h1>
        <CommentCarouselItem />
        <CommentCarouselItem />
      </section>
    </Layout>
  );
};

export default Home;
