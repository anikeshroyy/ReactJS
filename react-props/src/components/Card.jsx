const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.user} />
      <h1>{props.user}</h1>
      <p id="company-desc">
        I'm Softwere Developer in {props.company} Company!!
      </p>
      <p>I'm {props.age} years old</p>
    </div>
  );
};

export default Card;
