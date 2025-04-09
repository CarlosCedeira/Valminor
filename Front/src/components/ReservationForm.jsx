import { useState } from "react";
import { Form, Button, Row, Col, Modal, Toast } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function ReservationForm() {
  const [active, setActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    fechaDeEntrada: "",
    fechaDeSalida: "",
    adultos: 0,
    niños: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Deshabilitar el botón
    setSuccessMessage(""); // Limpiar el mensaje de éxito

    try {
      const response = await fetch(
        "https://w6cd53peoxr37vpgpn5loowbpe0ouwnj.lambda-url.eu-west-1.on.aws/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccessMessage("Formulario enviado con éxito"); // Establecer mensaje de éxito
        setShowToast(true); // Mostrar el Toast
        setActive(false); // Cierra el modal si es necesario
      } else {
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error de red:", error);
    } finally {
      setIsSubmitting(false); // Habilitar el botón nuevamente
    }
  };

  return (
    <>
      <Button
        variant="success"
        className="w-25"
        onClick={() => setActive(true)}
      >
        Contactar
      </Button>

      <Modal show={active} onHide={() => setActive(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Contacto</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Button
            variant="success"
            className="w-100  mb-4"
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
                    name="nombre"
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
                    name="apellido"
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
                    name="fechaDeEntrada"
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
                    name="fechaDeSalida"
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
                    name="adultos"
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
                    name="niños"
                    value={formData.children}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button
              variant="success"
              type="submit"
              className="w-100 mt-3"
              disabled={isSubmitting} // Deshabilitar el botón mientras se envía
            >
              {isSubmitting ? "Enviando..." : "Enviar Formulario"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={5000} // El Toast desaparecerá automáticamente después de 3 segundos
        autohide
        className="position-fixed top-50 start-50 translate-middle-x p-4"
        style={{ minWidth: "250px", fontSize: "1rem" }} // Ajustar tamaño y fuente
        bg="success"
      >
        <Toast.Header>
          <strong className="me-auto"></strong>
          <small></small>
        </Toast.Header>
        <Toast.Body className="text-white text-center">
          {successMessage}
        </Toast.Body>
      </Toast>
    </>
  );
}

export default ReservationForm;
