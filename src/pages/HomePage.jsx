import About from "../components/about/About";
import Home from "../components/Home/Home";
import Locations from "../components/locations/Locations";
import Menu from "../components/menu/Menu";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Menu />
      <Locations />
    </>
  );
};

export default HomePage;
