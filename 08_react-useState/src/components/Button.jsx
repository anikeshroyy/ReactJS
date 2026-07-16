const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onclick}
        className="bg-white text-black py-2 px-4 text-lg rounded-full cursor-pointer"
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
