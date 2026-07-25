import { useContext } from "react";
import NavbarItems from "./NavbarItems";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar = () => {
  const [theme] = useContext(ThemeDataContext);

  return (
    <div className={theme}>
      <div>
        <h1>Anikesh</h1>
      </div>
      <NavbarItems />
    </div>
  );
};

export default Navbar;
