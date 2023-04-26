import { HeaderHome, MainHome } from "../components";
import { TourProvider } from "@reactour/tour";
import steps2 from "../Steps2";

const Home = () => {
  return (
    <TourProvider steps={steps2}>
      <HeaderHome />
      <section className="mt-12 home">
        <MainHome />
      </section>
    </TourProvider>
  );
};

export default Home;
