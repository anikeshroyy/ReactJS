import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Gandu from "../pages/Gandu";

const Navbar = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Gandu" element={<Gandu />} />
      </Routes>
      <div className="bg-gray-400 fixed w-full top-0">
        <ul className="flex item-center justify-center gap-10  p-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Gandu">Gandu</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
