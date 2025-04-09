const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin:
      "https://w6cd53peoxr37vpgpn5loowbpe0ouwnj.lambda-url.eu-west-1.on.aws/",
  })
); // Habilitar CORS

// Ruta para enviar correos
app.post("/send-email", async (req, res) => {
  console.log(req.body);
  const {
    nombre,
    apellido,
    email,
    fechaDeEntrada,
    fechaDeSalida,
    adultos,
    niños,
  } = req.body;

  if (
    !nombre ||
    !apellido ||
    !email ||
    !fechaDeEntrada ||
    !fechaDeSalida ||
    !adultos ||
    !niños
  ) {
    return res.status(450).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "cedeira05@gmail.com",
        pass: "uxqg nwjf kfiz caxo",
      },
      tls: {
        rejectUnauthorized: false, // Deshabilita la validación estricta del certificado
      },
    });

    const mailOptions = {
      from: "cedeira05@gmail.com",
      to: "cedeira05@gmail.com",
      subject: "Reserva de habitación",
      text: `
    Nueva reserva recibida:
    Nombre: ${nombre}
    Apellido: ${apellido}
    Email: ${email}
    Fecha de Entrada: ${fechaDeEntrada}
    Fecha de Salida: ${fechaDeSalida}
    Adultos: ${adultos}
    Niños: ${niños}
  `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ error: "Error al enviar el correo" });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
