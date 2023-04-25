import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";
import ui1 from "../../assets/ui1.png";
import ui2 from "../../assets/ui2.png";
import ui3 from "../../assets/ui3.png";
import web1 from "../../assets/web1.webp";
import web2 from "../../assets/web2.webp";
import web3 from "../../assets/web3.webp";
import web4 from "../../assets/web4.webp";
import web5 from "../../assets/web5.webp";
import "./style/work.scss";
import { Parallax } from "react-scroll-parallax";

const Work = () => {
  return (
    <section className="work overflow-y-clip" id="work">
      <div className="title flex items-center justify-between px-6 min-[290px]:flex-wrap md:flex-nowrap">
        <Parallax translateY={["-100px", "80px"]}>
          <h1 className="text-left min-[290px]:text-5xl md:text-7xl mb-8 font-light dark:text-white">
            <span className="font-bold">Our Recent Work</span>
            <br />
            By Our <span className="special">Experts</span>
          </h1>
        </Parallax>
        <p className="text-2xl dark:text-white">
          We Develop a lot of projects to get your trust.
        </p>
      </div>
      <div className="cards-lg min-[290px]:hidden xl:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card">
              <img src={ui1} alt="ui 1" />
              <div className="button">
                <h3>UI Soup</h3>
                <a href="#">View Work</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={ui2} alt="ui 2" />
              <div className="button">
                <h3>Goldcrown Labs</h3>
                <a href="#">View Work</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={ui3} alt="ui 3" />
              <div className="button">
                <h3>Close Concierge</h3>
                <a href="#">View Work</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={web1} alt="web 1" />
              <div className="button">
                <h3>Exception Designs</h3>
                <a href="https://www.exceptiondesigns.com/" target="_blank">
                  View Work
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={web2} alt="web 2" />
              <div className="button">
                <h3>Green Army</h3>
                <a href="https://green-army.vercel.app/" target="_blank">
                  View Work
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={web3} alt="web 3" />
              <div className="button">
                <h3>IEEE Community</h3>
                <a href="https://ieee-community.vercel.app/" target="_blank">
                  View Work
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={web4} alt="web 4" />
              <div className="button">
                <h3>Final Touch</h3>
                <a
                  href="https://final-touch-interior.vercel.app/"
                  target="_blank"
                >
                  View Work
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={web5} alt="web 5" />
              <div className="button">
                <h3>Argor</h3>
                <a href="https://argor.vercel.app/" target="_blank">
                  View Work
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="cards-sm flex flex-wrap items-center gap-6 min-[290px]:flex justify-center xl:hidden">
        <div className="card">
          <img src={ui1} alt="ui 1" />
          <div className="button">
            <h3>UI Soup</h3>
            <a href="#">View Work</a>
          </div>
        </div>
        <div className="card">
          <img src={ui2} alt="ui 2" />
          <div className="button">
            <h3>Goldcrown Labs</h3>
            <a href="#">View Work</a>
          </div>
        </div>
        <div className="card">
          <img src={ui3} alt="ui 3" />
          <div className="button">
            <h3>Close Concierge</h3>
            <a href="#">View Work</a>
          </div>
        </div>
        <div className="card">
          <img src={web1} alt="web 1" />
          <div className="button">
            <h3>Exception Designs</h3>
            <a href="https://www.exceptiondesigns.com/" target="_blank">
              View Work
            </a>
          </div>
        </div>
        <div className="card">
          <img src={web2} alt="web 2" />
          <div className="button">
            <h3>Green Army</h3>
            <a href="https://green-army.vercel.app/" target="_blank">
              View Work
            </a>
          </div>
        </div>
        <div className="card">
          <img src={web3} alt="web 3" />
          <div className="button">
            <h3>IEEE Community</h3>
            <a href="https://ieee-community.vercel.app/" target="_blank">
              View Work
            </a>
          </div>
        </div>
        <div className="card">
          <img src={web4} alt="web 4" />
          <div className="button">
            <h3>Final Touch</h3>
            <a href="https://final-touch-interior.vercel.app/" target="_blank">
              View Work
            </a>
          </div>
        </div>
        <div className="card">
          <img src={web5} alt="web 5" />
          <div className="button">
            <h3>Argor</h3>
            <a href="https://argor.vercel.app/" target="_blank">
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
