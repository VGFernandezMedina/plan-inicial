import "./App.css";
import Footer from "./components/footer/Footer";
import { NavbarC } from "./components/navbar/NavbarC";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <NavbarC />
      <HomePage />
      <Footer />
    </>
  );
};

export default App;
