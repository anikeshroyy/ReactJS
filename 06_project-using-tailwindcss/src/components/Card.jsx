import Product from "./Product";
import { ArrowUpRight } from "lucide-react";

const Card = () => {
  const productArr = [
    {
      prodImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNedKQIv1PVFoBFhJ542kQbaUlKoWQo6a_SLtbFURw3w&s=10",
      prodDescription:
        "Helping customers achieve financial freedom with trusted banking services, smart investments, and secure digital transactions.",
      prodCTA: "Buy Now",
    },
    {
      prodImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgPyDlBRjp7DRPjbZTeFbKYPDeJHRG2V7-mTsJKowyg&s=10",
      prodDescription:
        "Explore premium products crafted with quality, innovation, and exceptional performance to meet your everyday needs.",
      prodCTA: "Call Now",
    },
    {
      prodImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIPsFumiC7gjuTim0Mvfe7RbeC-HYA8A7P4EIYsCDNg&s=10",
      prodDescription:
        "Modern digital banking platform designed to simplify financial services with secure, fast, and seamless user experiences.",
      prodCTA: "Book Now",
    },
  ];

  return (
    <div className="bg-white p-6 m-10 w-6xl rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <p className="bg-gray-800 text-amber-50 rounded-full px-4 py-2">
          Target Audience
        </p>
        <p className="bg-gray-300 text-amber-900 rounded-full px-4 py-2">Digital Banking Platform</p>
      </div>
      <div className="flex items-center justify-center gap-10">
        <div>
          <h1 className="text-4xl font-bold">
            Prospective Customer Segmentation
          </h1>
          <p className="text-2xl mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            expedita a odio dolorem ad iusto.
          </p>

          <div className="mt-16">
            <ArrowUpRight />
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 w-2xl">
          {productArr.map((product, index) => {
            return (
              <Product
                key={index}
                index={index}
                prodImg={product.prodImg}
                prodDescription={product.prodDescription}
                prodCTA={product.prodCTA}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
