import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";
import Button from "./Button";

const NavbarItems = () => {
  const [theme] = useContext(ThemeDataContext);
  console.log(theme);

  return (
    <div className="navItems">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Login</li>
        <li>
          <Button />
        </li>
      </ul>
    </div>
  );
};

export default NavbarItems;
