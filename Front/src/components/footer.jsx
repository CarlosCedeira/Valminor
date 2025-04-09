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
              Descubre el Val Miñor es una plataforma dedicada a ofrecer
              información sobre apartamentos turísticos en la zona de Val Miñor.
              Aquí podrás encontrar una variedad de alojamientos de diferentes
              propietarios.
            </p>
          </Col>
          <Col md={4} className="px-lg-5">
            <h5>Enlaces Útiles</h5>
            <ol className="list-unstyled">
              <li>
                <p href="#home" className="text-light">
                  Inicio
                </p>
              </li>
              <li>
                <p href="#apartamentos" className="text-light">
                  Apartamentos
                </p>
              </li>
            </ol>
          </Col>
          <Col md={4}>
            <h5>Contacto</h5>
            <ol className="list-unstyled">
              <li>Teléfono: +34 651 694 333</li>
              <li>Email: cedeira05@gmail.com</li>
            </ol>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>Cedeira_Dev was here!</p>
            <p>&copy; Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
