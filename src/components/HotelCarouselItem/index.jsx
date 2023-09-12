import Img from "../../assets/hotel1.jpg"
const HotelCarouselItem = () => {
    return (
        <div className="relative px-[1%] hover:scale-[1.03] hover:opacity-90 transition duration-200 ease-in-out">
            <img src={Img} alt="Hotel" className="rounded-md" />
            <div className="absolute bottom-[5%] left-[6%]">
                <h1>TITULO</h1>
                <p>Descripción</p>
                <p>Precio</p>
            </div>
        </div>
    );
}

export default HotelCarouselItem;