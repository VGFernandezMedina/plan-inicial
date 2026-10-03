import { Button, Col, Container, Row } from "react-bootstrap";

import "./About.css";

import { FaWhatsapp } from "react-icons/fa";

import about3 from "/about3.webp";

const About = () => {
  return (
    <Container id="about" fluid className="about p-0">
      <Row className="w-100 g-0">
        <Col md="6" className="col-img-about">
          <img src={about3} alt="Plato de Restaurante Valdivia" className="" />
        </Col>

        <Col md="6" className="col-text-about">
          <div>
            <span>NUESTRA HISTORIA</span>

            <h2>Sobre nosotros</h2>

            <p>
              En Restaurante Valdivia creemos que una buena comida es mucho más
              que un plato. Es una oportunidad para compartir, disfrutar y crear
              momentos especiales.
            </p>
            <p>
              Nuestra propuesta combina ingredientes seleccionados, sabores
              auténticos y un ambiente cálido, pensado para que cada visita se
              convierta en una experiencia para recordar.
            </p>

            <Button>
              <FaWhatsapp size={18} />
              Reserva
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
