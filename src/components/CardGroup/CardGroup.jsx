import Card from "../Card";

const CardGroup = () => {
  return (
    <div className="px-[10%] m-0 py-8">
      <div className="flex flex-wrap items-center lg:justify-between justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardGroup;
