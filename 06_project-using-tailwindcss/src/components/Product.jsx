import Button from "./Button";

const Product = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.prodImg})`,
      }}
      className="bg-cover bg-center h-100 w-180 p-4 rounded-3xl flex flex-col justify-between gap-20 shadow-[inset_0_-230px_60px_-10px_rgba(0,0,0,0.7)]"
    >
      <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
        <span className="text-black font-semibold">{props.index + 1}</span>
      </div>
      <div className="flex flex-col justify-between gap-5">
        <p className="text-amber-50">{props.prodDescription}</p>
        <Button text={props.prodCTA}/>
      </div>
    </div>
  );
};

export default Product;
