import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/CartSlice";
import serviceImage from "../../assets/serviceImage.png";
import { Parallax } from "react-scroll-parallax";

const DesignProducts = [
  {
    name: "UI / UX page ( 1 page )",
    price: 2500,
    description: "Design One Page UI / UX.",
  },
  {
    name: "Account Design Direction",
    price: 8180,
    description: "Design Your Account Direction.",
  },
  {
    name: "Motion Graphic ( 30 sec )",
    price: 9200,
    description: "Design 30 Sec Motion Grahpic.",
  },
  {
    name: "Video montage",
    price: 1600,
    description: "1 Minute Video montage.",
  },
  {
    name: "Logo 3 Models",
    price: 10500,
    description: "Design Your Logo ( 3 Models ).",
  },
  {
    name: "10 Design Social Media",
    price: 4100,
    description: "10 Design For Your Social Media.",
  },
  {
    name: "ProdCasting Graphic ( 1 Platform )",
    price: 20000,
    description: "Design ProdCasting Graphic.",
  },
  {
    name: "After Effect Promo ( 1 Minute )",
    price: 1500,
    description: "Make Your Promo For One Minute.",
  },
  {
    name: "Logo Motion",
    price: 5000,
    description: "Make For You Logo Motion.",
  },
  {
    name: "Business Branding Identity ( Medium )",
    price: 20000,
    description: "Make Your Business Branding Identity ( Medium ).",
  },
  {
    name: "Business Branding Identity ( Large )",
    price: 45000,
    description: "Make Your Business Branding Identity ( Large ).",
  },
  {
    name: "Package Design",
    price: 15000,
    description: "Design Your Package.",
  },
];

const DesignServices = () => {
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (DesignProduct) => {
    dispatch(addToCart(DesignProduct));
    setShowToast(true); // Set state to true to show the toast
    setTimeout(() => setShowToast(false), 3000); // Hide the toast after 3 seconds
  };

  return (
    <div className="services-box design-box bg-white dark:bg-[#0F75BD] border-2 border-solid border-[#1e1e1e] rounded-lg p-4">
      <ul className="box flex justify-start items-start flex-wrap gap-4">
        {DesignProducts.map((DesignProduct) => (
          <li
            key={DesignProduct.name}
            className="flex flex-col justify-center items-start bg-white border-2 border-solid border-[#1e1e1e] rounded-lg p-4 md:w-fit md:h-[400px]"
          >
            <div className="content">
              <Parallax translateY={["10px", "-60px"]}>
                <img src={serviceImage} alt="service image" />
              </Parallax>
              <h2 className="text-xl font-bold">{DesignProduct.name}</h2>
              <p>{DesignProduct.description}</p>
              <p className="text-[#0f75bd] text-xl font-bold">
                {Math.floor(DesignProduct.price).toLocaleString("en-EG", {
                  style: "currency",
                  currency: "EGP",
                  minimumFractionDigits: 0,
                })}
              </p>
              <button
                onClick={() => handleAddToCart(DesignProduct)}
                className="bg-[#ffcc00] text-[#1e1e1e] font-bold rounded-md p-2 mt-6 w-fit flex items-center"
              >
                <svg
                  width={30}
                  height={30}
                  fill="#1e1e1e"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-4"
                >
                  <path d="M2.88 3.72a.6.6 0 0 1 .6-.6h1.8a.6.6 0 0 1 .582.455l.486 1.945H20.28a.6.6 0 0 1 .59.71l-1.8 9.6a.6.6 0 0 1-.59.49H7.68a.6.6 0 0 1-.59-.49L5.293 6.25l-.48-1.929H3.48a.6.6 0 0 1-.6-.6Zm6 12.6a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm8.4 0a2.4 2.4 0 1 0 0 4.801 2.4 2.4 0 0 0 0-4.8Zm-8.4 1.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Zm8.4 0a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      {/* Render the toast message conditionally */}
      {showToast && (
        <div className="toast">
          <div className="alert alert-success">
            <div>
              <span className="text-white">
                Added To Your Cart Successfully!
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignServices;
