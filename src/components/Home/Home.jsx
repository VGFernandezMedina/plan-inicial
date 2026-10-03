import { LuUtensils } from "react-icons/lu";
import "./Home.css";
import { Button, Container } from "react-bootstrap";

const Home = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Container id="home" as="section" fluid className="home">
      <div className="home-div">
        <div className="home-welcome">
          <LuUtensils className="home-icon" />
          <p className=" m-0 pt-2">Bienvenidos a</p>
        </div>
        <div className="home-title">
          <h1>Restaurante Valdivia</h1>
          <p className="home-description">
            Sabores auténticos, ingredientes de calidad y un ambiente pensado
            para disfrutar. Vení a compartir momentos especiales alrededor de
            una buena mesa.
          </p>
          <Button onClick={scrollToAbout}>Ver menú</Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
