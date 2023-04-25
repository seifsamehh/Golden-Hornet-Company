import React from "react";
import img1 from "../../assets/MaskGroup2.png";
import img2 from "../../assets/Vector9.png";
import img3 from "../../assets/Ellipse16.png";
import "./style/about.scss";
import { Parallax } from "react-scroll-parallax";
import { BubblyLink } from "react-bubbly-transitions";

const About = () => {
  return (
    <section
      className="about flex items-center gap-8 min-[290px]:flex-wrap-reverse md:flex-nowrap min-h-screen overflow-y-clip"
      id="about"
    >
      <div className="w-full left">
        <img src={img1} alt="image 1" className="image1" />
        <img src={img2} alt="image 2" className="image2" />
        <img src={img3} alt="image 3" className="image3" />
      </div>
      <div className="right w-full min-[290px]:pl-4 md:pl-0">
        <Parallax translateY={["-100px", "80px"]}>
          <h1 className="text-left min-[290px]:text-5xl md:text-7xl mb-8 font-light dark:text-white">
            <span className="font-bold">About Us</span>
            <br />
            Fake or <span className="special">Real</span>
          </h1>
        </Parallax>
        <p className="about-text mb-8 leading-8 text-left dark:text-white">
          We are a software company that specializes in creating innovative and
          high-quality software solutions. Our team of experienced professionals
          utilizes the latest technologies and industry best practices to
          deliver software products that meet the unique needs and requirements
          of our clients.
        </p>
        <BubblyLink to="/login" colorStart="#0F75BD" colorEnd="#FFCC00">
          Explore More
        </BubblyLink>
      </div>
    </section>
  );
};

export default About;
