import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Gandu from "../pages/Gandu";

const Navbar = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/" element={About} />
        <Route path="/" element={Contact} />
        <Route path="/" element={Login} />
        <Route path="/" element={Gandu} />
      </Routes>
      <div className="bg-gray-400">
        <ul className="flex item-center justify-center gap-10  p-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <a href="/Login">Login</a>
          </li>
          <li>
            <a href="/Gandu">Gandu</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
