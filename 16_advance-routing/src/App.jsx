import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Error404 from "./pages/Error404";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";

export const App = () => {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/product" element={<Product />}>
          {/* <Route index element={<Men />} /> */}
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  );
};
