import { useState } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function ReservationForm() {
  const [active, setActive] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    guests: 0,
    children: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <Button variant="dark" className="w-25" onClick={() => setActive(true)}>
        Contactar
      </Button>

      <Modal show={active} onHide={() => setActive(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Contacto</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Button
            variant="success"
            className="w-100  "
            href="https://wa.me/34651694333"
            target="_blank"
          >
            <i className="bi bi-whatsapp"></i> Contactar por WhatsApp
          </Button>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formFirstName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formLastName">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Apellido"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Correo Electrónico"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formCheckInDate">
                  <Form.Label>Fecha de Entrada</Form.Label>
                  <Form.Control
                    type="date"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formCheckOutDate">
                  <Form.Label>Fecha de Salida</Form.Label>
                  <Form.Control
                    type="date"
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formGuests">
                  <Form.Label>Adultos</Form.Label>
                  <Form.Control
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formChildren">
                  <Form.Label>Niños</Form.Label>
                  <Form.Control
                    type="number"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="success" type="submit" className="w-100">
              Enviar Fomulario
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ReservationForm;
