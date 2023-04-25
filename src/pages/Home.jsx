import { HeaderHome, MainHome } from "../components";

const Home = () => {
  return (
    <>
      <HeaderHome />
      <section className="home mt-12">
        <MainHome />
      </section>
    </>
  );
};

export default Home;
