import { BubblyLink } from "react-bubbly-transitions";
import pageNotFound from "../../assets/notFound.png";
import "./style/error.scss";

const Error = () => {
  return (
    <div className="error flex flex-col justify-center items-center gap-4 min-h-screen">
      <img src={pageNotFound} alt="page not found" />
      <BubblyLink to="/" colorStart="#0c76c1" colorEnd="#ffcb01">
        Home
      </BubblyLink>
    </div>
  );
};

export default Error;
