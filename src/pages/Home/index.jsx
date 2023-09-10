import { Carousel } from "@trendyol-js/react-carousel";
import Banner from "../../components/Banner/Banner";
import CardGroup from "../../components/CardGroup/CardGroup";
import CommentCarouselItem from "../../components/CommentCarouselItem";
import Layout from "../../layouts/Layout";
import HotelCarouselItem from "../../components/HotelCarouselItem";

const RigtArrow = () => {
  return (
    <div className="text-[50px] text-black hover:cursor-pointer relative top-[36%]">
      {">"}
    </div>
  );
};

const LeftArrow = () => {
  return (
    <div className="text-[50px] text-black hover:cursor-pointer relative top-[36%]">
      {"<"}
    </div>
  );
};

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
        <h1 className="text-center mb-[5%]">CARRUSEL DE HOTELES</h1>
        <Carousel
        className="px-[3%]"
          show={2}
          swiping={true}
          slide={1}
          transition={0.5}
          responsive={true}
          leftArrow={<LeftArrow />}
          rightArrow={<RigtArrow />}
        >
          <HotelCarouselItem />
          <HotelCarouselItem />
          <HotelCarouselItem />
          <HotelCarouselItem />
        </Carousel>
      </section>
      <section className="py-[10%]">
        <h1 className="text-center mb-[5%]">REFERENCIAS DE PERSONAS</h1>
          <Carousel
          className="px-[3%] "
            show={3}
            swiping={true}
            slide={1}
            transition={0.5}
            responsive={true}
            leftArrow={<LeftArrow />}
            rightArrow={<RigtArrow />}
          >
            <CommentCarouselItem />
            <CommentCarouselItem />
            <CommentCarouselItem />
            <CommentCarouselItem />
          </Carousel>
      </section>
    </Layout>
  );
};

export default Home;
