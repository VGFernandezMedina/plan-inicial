import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./NavbarC.css";

export const NavbarC = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/restaurant-logo.png"
            alt="Valdivia Restaurante & Café"
            className="navbar-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvas-navbar" />

        <Navbar.Offcanvas
          id="offcanvas-navbar"
          aria-labelledby="offcanvas-navbar-title"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvas-navbar-title">
              Mi menú
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="ms-auto nav-menu">
              <Nav.Link href="#home" className="nav-link">
                Inicio
              </Nav.Link>
              <Nav.Link href="#menu" className="nav-link">
                Menú
              </Nav.Link>
              <Nav.Link href="#about" className="nav-link">
                Nosotros
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-link">
                Contacto
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
