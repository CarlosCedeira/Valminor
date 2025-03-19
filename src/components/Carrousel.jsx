import React from "react";
import { Container, Carousel } from "react-bootstrap";

function Carrousel() {
  return (
    <Container fluid style={{ padding: 0 }} id="home">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://riadevigobaixomino.gal/wp-content/uploads/2020/11/val-minor.jpg"
            alt="Second slide"
            style={{ height: "100vh" }}
          />
          <Carousel.Caption>
            <h3>Val miñor</h3>
            <p>Panoramica del val miñor.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://estaticos-cdn.prensaiberica.es/clip/8a9c8405-f84e-45ec-84f3-e04624e3f12f_source-aspect-ratio_default_0.jpg"
            alt="First slide"
            style={{ height: "100vh" }}
          />
          <Carousel.Caption>
            <h3>Islas Cies</h3>
            <p>Paraiso natural.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s1.elespanol.com/2025/01/10/treintayseis/cultura/915419001_252239239_1024x576.jpg"
            alt="First slide"
            style={{ height: "100vh" }}
          />
          <Carousel.Caption>
            <h3>Puente románico</h3>
            <p>Ramallosa</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Carrousel;
