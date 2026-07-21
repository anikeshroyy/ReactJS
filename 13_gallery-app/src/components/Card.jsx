const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <div className="border rounded-xl border-white p-2 text-center">
          <img
            src={props.elem.download_url}
            alt=""
            className="h-40 w-60 transition delay-50 duration-200 ease-in-out hover:scale-95 rounded-xl"
          />
          <h2>{props.elem.author}</h2>
        </div>
      </a>
    </div>
  );
};

export default Card;
