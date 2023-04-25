import React from "react";
import {
  About,
  Footer,
  Header,
  Hero,
  LandingProducts,
  Quote,
  Services,
  Testimonials,
  Work,
} from "../components";

const Landing = () => {
  return (
    <>
      <Header />
      <section className="landing">
        <Hero />
        <Services />
        <LandingProducts />
        <About />
        <Work />
        <Testimonials />
        <Quote />
      </section>
      <Footer />
    </>
  );
};

export default Landing;
