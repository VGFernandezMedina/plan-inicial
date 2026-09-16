import { Button, Col, Container, Row } from "react-bootstrap";

import "./About.css";

import { FaWhatsapp } from "react-icons/fa";

import about1 from "/about1.jpg";
import about2 from "/about2.jpg";

const About = () => {
  return (
    <Container fluid className="about">
      <Row className="w-100 g-0">
        <Col className="col-img-about">
          <img
            src={about1}
            alt="Comida en Restaurante Valdivia"
            className="mb-5"
          />

          <img
            src={about2}
            alt="Plato de Restaurante Valdivia"
            className="mt-5"
          />
        </Col>

        <Col className="col-text-about">
          <div>
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
