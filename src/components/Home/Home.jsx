import { LuUtensils } from "react-icons/lu";
import "./Home.css";
import { Button, Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container as="section" fluid className="home">
        <div className="home-div">
          <div className="home-welcome">
            <LuUtensils className="home-icon" />
            <p className=" m-0 pt-2">Bienvenidos a</p>
          </div>
          <div className="home-title">
            <h1>Restaurante Valdivia</h1>
            <p className="home-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              amet, necessitatibus molestiae saepe vel facilis voluptatum ea,
              excepturi ratione quidem nam asperiores molestias itaque eveniet
              harum eaque, quasi aperiam nisi!
            </p>
            <Button>Ver menú</Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
