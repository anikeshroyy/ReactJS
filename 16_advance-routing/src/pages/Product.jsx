import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="heading">
      <h2>Product Page</h2>

      <div className="product-item">
        <Link className="linkl" to="/product/men">
          Men
        </Link>
        <Link className="linkl" to="/product/women">
          Women
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Product;
