import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/CartSlice";
import serviceImage from "../../assets/serviceImage.png";
import { Parallax } from "react-scroll-parallax";

const MarktingServices = [
  {
    name: "Company Profile",
    price: 12900,
    description: "Make for you complete company profile.",
  },
  {
    name: "Markting Platform ( 1 )",
    price: 56500,
    description: "Markting one platform.",
  },
  {
    name: "Markting Platform ( 2 )",
    price: 127500,
    description: "Markting two platform.",
  },
  {
    name: "Markting Platform ( 3 )",
    price: 180000,
    description: "Markting three platform.",
  },
  {
    name: "Markting Platform ( 4 )",
    price: 237250,
    description: "Markting four platform.",
  },
  {
    name: "Digital Markting Plan",
    price: 16000,
    description: "Make complete digital markting plan.",
  },
];

const Markting = () => {
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (MarktingService) => {
    dispatch(addToCart(MarktingService));
    setShowToast(true); // Set state to true to show the toast
    setTimeout(() => setShowToast(false), 3000); // Hide the toast after 3 seconds
  };

  return (
    <div className="services-box markting-box bg-white dark:bg-[#0F75BD] border-2 border-solid border-[#1e1e1e] rounded-lg p-4">
      <ul className="box flex justify-start items-start flex-wrap gap-4">
        {MarktingServices.map((MarktingService) => (
          <li
            key={MarktingService.name}
            className="flex flex-col justify-center items-start bg-white border-2 border-solid border-[#1e1e1e] rounded-lg p-4 md:w-fit md:h-[400px]"
          >
            <div className="content">
              <Parallax translateY={["10px", "-60px"]}>
                <img src={serviceImage} alt="service image" />
              </Parallax>
              <h2 className="text-xl font-bold">{MarktingService.name}</h2>
              <p>{MarktingService.description}</p>
              <p className="text-[#0f75bd] text-xl font-bold">
                {MarktingService.price.toLocaleString("en-EG", {
                  style: "currency",
                  currency: "EGP",
                  minimumFractionDigits: 0,
                })}
              </p>
              <button
                onClick={() => handleAddToCart(MarktingService)}
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

export default Markting;
