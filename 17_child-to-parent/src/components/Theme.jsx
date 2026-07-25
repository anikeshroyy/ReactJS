const Theme = (props) => {
  console.log(props.theme);

  return (
    <div>
      <h1>Theme is {props.theme}</h1>
    </div>
  );
};

export default Theme;
