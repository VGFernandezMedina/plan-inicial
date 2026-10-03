import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLocationOutline, IoMail } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container fluid as="footer" className="footer">
      <Row className="w-100 footer-content py-4">
        <Col xs={12} md={4} className="footer-logo mb-4 mb-md-0">
          <img src="/restaurant-logo.webp" alt="Valdivia Restaurante & Café" />
          <div className="footer-description">
            <p>
              Sabores que reúnen, momentos que perduran. Una experiencia
              gastronómica pensada para disfrutar, compartir y volver.
            </p>

            <div className="footer-social">
              <p className="m-0">Síguenos:</p>
              <div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} md={4} className="footer-hours">
          <div className="footer-block">
            <h3>Horario</h3>
            <ul>
              <li>
                <p className="m-0">Lunes a Viernes:</p>
                <span>12:00pm — 00:00am</span>
              </li>
              <li>
                <p className="m-0">Sábado a Domingo:</p>
                <span>12:00pm — 02:00am</span>
              </li>
            </ul>
          </div>
        </Col>

        <Col xs={12} md={4} className="footer-contact mb-4 mb-md-0">
          <div className="footer-block">
            <h3>Contáctanos</h3>

            <ul>
              <li>
                <FaPhoneAlt className="footer-icon" />
                <p className="m-0">+54 381 555-0123</p>
              </li>
              <li>
                <IoMail className="footer-icon" />
                <p className="m-0">contacto@restaurantevaldivia.com</p>
              </li>
              <li>
                <IoLocationOutline className="footer-icon" />
                <p className="m-0">Av. Siempre Viva 123, Tucumán</p>
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row className="w-100 footer-bottom">
        <Col className="text-center py-3">
          <p className="m-0">
            &copy; {currentYear} Valdivia Restaurante & Café. Todos los derechos
            reservados.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
