import "./style/testimonials.scss";
import { Parallax } from "react-scroll-parallax";

const Testimonials = () => {
  return (
    <section
      className="testimonials pb-12 min-[290px]:overflow-hidden md:overflow-visible"
      id="testimonials"
    >
      <Parallax translateY={["-100px", "80px"]}>
        <h1 className="text-center min-[290px]:text-5xl md:text-7xl mb-8 font-light dark:text-white">
          <span className="font-bold">Our Testimonials</span>
          <br />
          What Our Clients Are <span className="special">Saying</span>
        </h1>
      </Parallax>
      <div className="boxs flex items-center gap-6 min-[290px]:flex-wrap md:flex-nowrap mx-6">
        <div className="box test-1 bg-white text-[#1e1e1e] dark:bg-[#0f75bd] dark:text-white p-4 rounded-2xl border-2 border-[#1e1e1e] border-solid">
          <svg
            width="88"
            height="89"
            viewBox="0 0 88 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.1919 70.2857L58.3554 44.2321L58.8873 42.8687H57.4238H47.7284V18.5059H73.7494V42.1371L60.4082 70.2857H48.1919Z"
              fill="#FDC221"
              stroke="#010201"
              strokeWidth="2"
            />
            <path
              d="M14.7202 70.2857L24.8857 44.2322L25.4178 42.8687H23.9541H14.2566V18.5059H40.2775V42.1371L26.9364 70.2857H14.7202Z"
              fill="#FDC221"
              stroke="#010201"
              strokeWidth="2"
            />
          </svg>
          <p className="mb-6 leading-8 text-left dark:text-white">
            I have had the pleasure of deal with Golden Hornet and have been
            consistently impressed by their creativity, expertise, and
            dedication to their customers. Their team is composed of talented
            and knowledgeable individuals who are passionate about what they do
            and are committed to delivering exceptional results.
          </p>
        </div>
        <div className="box test-2 bg-white text-[#1e1e1e] dark:bg-[#0f75bd] dark:text-white p-4 rounded-2xl border-2 border-[#1e1e1e] border-solid">
          <svg
            width="88"
            height="89"
            viewBox="0 0 88 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.1919 70.2857L58.3554 44.2321L58.8873 42.8687H57.4238H47.7284V18.5059H73.7494V42.1371L60.4082 70.2857H48.1919Z"
              fill="#FDC221"
              stroke="#010201"
              strokeWidth="2"
            />
            <path
              d="M14.7202 70.2857L24.8857 44.2322L25.4178 42.8687H23.9541H14.2566V18.5059H40.2775V42.1371L26.9364 70.2857H14.7202Z"
              fill="#FDC221"
              stroke="#010201"
              strokeWidth="2"
            />
          </svg>
          <p className="mb-6 leading-8 text-left dark:text-white">
            I am excited to recommend working with Golden Hornet to anyone
            seeking innovative solutions in technology, Your technology
            cutting-edge has the potential to revolutionize the way businesses
            operate and improve the lives of people around the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
