import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="success" variant="dark" expand="md" fixed="top">
      <Navbar.Brand className="ms-3">Descubre el Val Miñor</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#apartamentos">Apartamentos</Nav.Link>
          <Nav.Link href="#booking">Reservar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
