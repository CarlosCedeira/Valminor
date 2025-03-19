import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-success text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Sobre Nosotros</h5>
            <p>
              Somos una empresa dedicada a ofrecer los mejores servicios de
              alojamiento en el Val Miñor. Nuestro objetivo es proporcionar una
              experiencia inolvidable a nuestros huéspedes.
            </p>
          </Col>
          <Col md={4} className="px-lg-5">
            <h5>Enlaces Útiles</h5>
            <ul className="list-unstyled ">
              <li>
                <a href="#home" className="text-light">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-light">
                  Comodidades
                </a>
              </li>
              <li>
                <a href="#booking" className="text-light">
                  Reservar
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contacto</h5>
            <p>
              Dirección: Calle Falsa 123, Val Miñor
              <br />
              Teléfono: +34 123 456 789
              <br />
              Email: info@apartamentopremium.com
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>
              <p>Cedeira_Dev was here!</p>
              &copy; Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
