import About from "../components/about/About";
import Home from "../components/Home/Home";
import Locations from "../components/locations/Locations";
import Menu from "../components/menu/Menu";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Home />
      <Menu />
      <About />
      <Locations />
    </>
  );
};

export default HomePage;
