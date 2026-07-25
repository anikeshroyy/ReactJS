const Navbar = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.setTheme(props.theme === "Light" ? "Dark" : "Light");
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Navbar;
