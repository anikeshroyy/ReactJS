import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);
  return (
    <div>
      <button
        onClick={() => {
          setTheme(theme === "Dark" ? "Light" : "Dark");
        }}
      >{theme}
      </button>
    </div>
  );
};

export default Button;
