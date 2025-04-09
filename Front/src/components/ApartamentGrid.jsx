import React from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import Comodidades from "./Comodidades";
import ReservationForm from "./ReservationForm";

function ApartamentGrid() {
  return (
    <Container className="my-1 border-bottom border-dark p-3">
      <h3 className="text-right my-3">Aparatamento frente el mar</h3>

      <Row>
        <Col md={6}>
          <Carousel className="mb-3">
            <Carousel.Item>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://imagenes-cedeiradev.s3.eu-west-1.amazonaws.com/Images/Panoramica.png"
                  alt="Panoramica"
                  style={{
                    height: "60vh",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://imagenes-cedeiradev.s3.eu-west-1.amazonaws.com/Images/Habitacion1.jpg"
                  alt="Habitacion 1"
                  style={{
                    height: "60vh",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://imagenes-cedeiradev.s3.eu-west-1.amazonaws.com/Images/Habitacion2.png"
                  alt="Habitacion 2"
                  style={{
                    height: "60vh",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://imagenes-cedeiradev.s3.eu-west-1.amazonaws.com/Images/Habitacion3.png"
                  alt="Habitacion 3"
                  style={{
                    height: "60vh",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://imagenes-cedeiradev.s3.eu-west-1.amazonaws.com/Images/Bano.png"
                  alt="Baño"
                  style={{
                    height: "60vh",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://imagenes-cedeiradev.s3.eu-west-1.amazonaws.com/Images/Galeria.png"
                  alt="Galeria"
                  style={{
                    height: "60vh",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>

        {/* Listas a la derecha del carrusel */}
        <Col
          md={6}
          className="d-flex flex-column justify-content-between "
          style={{ height: "60vh" }}
        >
          <div style={{ flex: 1, overflow: "auto", overflowX: "hidden" }}>
            <Comodidades />
          </div>
          <iframe
            className="d-block w-100 rounded-0 rounded-md-3"
            style={{
              flex: 1,
              height: "100%",
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1855.725930525566!2d-8.824806968036132!3d42.145692166213514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd258bd9fae7d0b1%3A0xa78f261044f7b97b!2sApartamento%20en%20primera%20linea%20de%20playa%20nigran!5e1!3m2!1sen!2ses!4v1741962157134!5m2!1sen!2ses"
          />
        </Col>
      </Row>
      <div className="my-5 d-flex justify-content-around">
        <ReservationForm className="w-25" />

        <Button
          variant="danger"
          className="w-25"
          href="https://www.airbnb.es/rooms/36137898?source_impression_id=p3_1655367898_/hQK/RuyNsyx6LYw"
          target="_blank"
        >
          Ver en Airbnb
        </Button>
      </div>
    </Container>
  );
}

export default ApartamentGrid;
