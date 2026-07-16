export const App = () => {
  let count = 0;
  const BtnClick = () => {
    console.log("Button is clicked");

    count++;

    document.getElementById("countDisp").textContent = `${count}`;
  };

  return (
    <div>
      <h1>Hellooo</h1>
      <input
        onChange={(elem) => {
          // console.log(elem.target.value);
          const val = elem.target.value;
          console.log(val);
          let passCheck = 6;

          if (val.length === passCheck) {
            console.log("Password is Correct");
            document.getElementById("passDisp").textContent =
              `Password is of 6 digit`;
          } else {
            console.log("please enter 6 digit password");
            document.getElementById("passDisp").textContent =
              `please enter 6 digit password`;
          }
        }}
        type="password"
        placeholder="Enter Password"
      />

      <p id="passDisp"></p>

      <button onClick={BtnClick}>Counter</button>
    </div>
  );
};
