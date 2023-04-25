import React from "react";
import success from "../assets/success.png";
import { BubblyLink } from "react-bubbly-transitions";

const Success = () => {
  return (
    <section className="success flex flex-col justify-center items-center gap-4 min-h-screen">
      <img src={success} alt="succcess" />
      <BubblyLink to="/home" colorStart="#0F75BD" colorEnd="#FFCC00">
        Continue
      </BubblyLink>
    </section>
  );
};

export default Success;
