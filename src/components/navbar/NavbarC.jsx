import { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./NavbarC.css";
import {
  IoArrowForward,
  IoHome,
  IoLocationOutline,
  IoPeople,
} from "react-icons/io5";
import { MdOutlineMenuBook, MdOutlineWatchLater } from "react-icons/md";
import { GrContact } from "react-icons/gr";

export const NavbarC = () => {
  const [show, setShow] = useState(false);
  const [targetId, setTargetId] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (id) => {
    if (show) {
      setTargetId(id);
      setShow(false);
    } else {
      scrollTo(id);
    }
  };

  const handleOffcanvasExited = () => {
    if (targetId) {
      scrollTo(targetId);
      setTargetId(null);
    }
  };

  return (
    <Navbar expand="lg" className="navbar" fixed="top">
      <Container>
        <Navbar.Brand
          as="div"
          style={{ cursor: "pointer" }}
          onClick={() => handleNavClick("home")}
        >
          <img
            src="/restaurant-logo.png"
            alt="Valdivia Restaurante & Café"
            className="navbar-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle onClick={handleShow} aria-controls="offcanvas-navbar" />

        <Navbar.Offcanvas
          id="offcanvas-navbar"
          aria-labelledby="offcanvas-navbar-title"
          placement="end"
          show={show}
          onHide={handleClose}
          onExited={handleOffcanvasExited}
          restoreFocus={false}
        >
          <Offcanvas.Header>
            <div className="d-flex flex-column">
              <Offcanvas.Title id="offcanvas-navbar-title">
                Valdivia
              </Offcanvas.Title>
              <span>Restaurante & Café</span>
            </div>

            <button
              type="button"
              className="offcanvas-close ms-auto"
              onClick={handleClose}
              aria-label="Cerrar menú"
            >
              <IoArrowForward />
            </button>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="ms-auto nav-menu">
              <Nav.Link
                as="div"
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => handleNavClick("home")}
              >
                <IoHome className="icon-navbar" />
                Inicio
              </Nav.Link>
              <Nav.Link
                as="div"
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => handleNavClick("about")}
              >
                <IoPeople className="icon-navbar" />
                Nosotros
              </Nav.Link>
              <Nav.Link
                as="div"
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => handleNavClick("menu")}
              >
                <MdOutlineMenuBook className="icon-navbar" />
                Menú
              </Nav.Link>
              <Nav.Link
                as="div"
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => handleNavClick("contact")}
              >
                <GrContact className="icon-navbar" />
                Contacto
              </Nav.Link>
            </Nav>

            <div className="offcanvas-info">
              <div className="offcanvas-info-item">
                <IoLocationOutline />
                <span>Av. Siempre Viva 123, Tucumán</span>
              </div>

              <div className="offcanvas-info-item">
                <MdOutlineWatchLater />
                <span>
                  Lun. a Vie. 12:00 - 00:00
                  <br />
                  Sáb. y Dom. 12:00 - 02:00
                </span>
              </div>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
