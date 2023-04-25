import img1 from "../../assets/MaskGroup.png";
import img2 from "../../assets/lamp.png";
import img3 from "../../assets/Vector3.png";
import img4 from "../../assets/Ellipse11.png";
import img5 from "../../assets/lamp2.gif";
import { Parallax } from "react-scroll-parallax";
import { useTour } from "@reactour/tour";
import "./style/hero.scss";

const Hero = () => {
  const { setIsOpen } = useTour();
  return (
    <section
      className="hero flex items-center min-[290px]:flex-wrap md:flex-nowrap min-h-screen gap-6 overflow-y-clip"
      id="home"
    >
      <div className="left min-[290px]:pl-6 md:pl-12 min-[290px]:mb-10 md:mb-0 w-full">
        <Parallax translateY={["100px", "-100px"]}>
          <h1 className="min-[290px]:text-5xl md:text-7xl mb-8 font-light dark:text-white">
            <span className="font-bold">We Help you</span>
            <br /> to grow your <br />
            <span className="special">Business</span>
          </h1>
        </Parallax>
        <button onClick={() => setIsOpen(true)}>Get Started</button>
      </div>
      <div className="w-full right">
        <div className="box">
          <img src={img1} alt="image 1" className="image1" />
          <img src={img2} alt="image 2" className="image2" />
          <img src={img3} alt="image 3" className="image3" />
          <img src={img4} alt="image 4" className="image4" />
          <img src={img5} alt="image 5" className="image5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
