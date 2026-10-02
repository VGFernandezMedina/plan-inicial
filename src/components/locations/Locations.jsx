import { Col, Container, Row } from "react-bootstrap";
import "./Locations.css";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Locations = () => {
  return (
    <Container id="contact" fluid as="section" className="location">
      <Row className="w-100 g-0">
        <Col lg="6" className="location-text">
          <h2>Visita nuestro Restaurante</h2>
          <p>Acercate a disfrutar de nuestros platos y nuestro ambiente.</p>
          <div className="location-description">
            <div className="location-icons">
              <MdOutlineWatchLater size={20} />
              <span className="m-0">Lun. a Vie. 12pm - 00am</span>
            </div>
            <div className="location-icons">
              <MdOutlineWatchLater size={20} />
              <span className="m-0">Sáb. y Dom. 12pm - 02am</span>
            </div>
            <div className="location-icons">
              <IoLocationOutline size={20} />
              <span className="m-0">Av. Siempre Viva 123, Tucumán</span>
            </div>
            <div className="location-social">
              <a
                className="location-icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
                <span className="m-0">Instagram</span>
              </a>
              <a
                className="location-icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={20} />
                <span className="m-0">Facebook</span>
              </a>
              <a
                className="location-icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={20} />
                <span className="m-0">WhatsApp</span>
              </a>
            </div>
          </div>
        </Col>
        <Col lg="6" className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?..."
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Restaurante Valdivia"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Locations;
