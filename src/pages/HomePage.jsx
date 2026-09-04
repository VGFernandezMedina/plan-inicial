import About from "../components/about/About";
import Home from "../components/Home/Home";
import Locations from "../components/locations/Locations";
import Services from "../components/services/Services";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Home />
      <Services />
      <About />
      <Locations />
    </>
  );
};

export default HomePage;
