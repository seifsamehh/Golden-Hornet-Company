import { Parallax } from "react-scroll-parallax";
import "./style/landingProducts.scss";
import { BubblyLink } from "react-bubbly-transitions";

const LandingProducts = () => {
  return (
    <section className="landing-products overflow-y-clip py-6">
      <Parallax translateY={["-100px", "70px"]}>
        <h1 className="text-center min-[290px]:text-5xl md:text-7xl mb-8 font-light dark:text-white">
          <span className="font-bold">What We</span>
          <br />
          <span className="special">Offer</span>
        </h1>
      </Parallax>
      <div className="boxs flex justify-center items-center gap-6 mx-4 min-[290px]:flex-wrap md:flex-nowrap">
        {/* box 1 */}
        <div className="box-1 notifications-container">
          <div className="success">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="succes-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  ariaHidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="success-prompt-wrap">
                <p className="success-prompt-heading">E-commerce Website</p>
                <div className="success-prompt-prompt">
                  <p>
                    Develop For You the best ecommerce website to sell on your
                    products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* box 2 */}
        <div className="box-2 notifications-container">
          <div className="success">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="succes-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  ariaHidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="success-prompt-wrap">
                <p className="success-prompt-heading">SEO</p>
                <div className="success-prompt-prompt">
                  <p>
                    Make Your Search Engine Optimization Better To let Your
                    Website Have the high rank.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* box 3 */}
        <div className="box-3 notifications-container">
          <div className="success">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="succes-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  ariaHidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="success-prompt-wrap">
                <p className="success-prompt-heading">UI / UX</p>
                <div className="success-prompt-prompt">
                  <p>
                    Design Your app / website user interface and user
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* box 4 */}
        <div className="box-4 notifications-container">
          <div className="success">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="succes-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  ariaHidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="success-prompt-wrap">
                <p className="success-prompt-heading">Motion Graphic</p>
                <div className="success-prompt-prompt">
                  <p>We Can Add Motion Graphic to all your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* box 5 */}
        <div className="box-5 notifications-container">
          <div className="success">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="succes-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  ariaHidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="success-prompt-wrap">
                <p className="success-prompt-heading">Logo</p>
                <div className="success-prompt-prompt">
                  <p>We Can Design Your Business logo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* box 6 */}
        <div className="box-6 notifications-container">
          <div className="success">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="succes-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  ariaHidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="success-prompt-wrap">
                <p className="success-prompt-heading">Digital Marketing</p>
                <div className="success-prompt-prompt">
                  <p>We Can Make For You Complete Digital Marketing Plan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content flex justify-center items-center flex-col">
        <p className="text-center mb-4 dark:text-white">
          We Can Offer For You A lot Of Services In Different Fields.
          <br /> We can transfer your business from one level to another or
          completely renew your business.
        </p>
        <BubblyLink to="/login" colorStart="#0F75BD" colorEnd="#FFCC00">
          <button class="learn-more"> Explore More</button>
        </BubblyLink>
      </div>
    </section>
  );
};

export default LandingProducts;
