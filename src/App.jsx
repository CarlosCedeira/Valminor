import React from "react";
import NavBar from "./components/NavBar";
import Carrousel from "./components/Carrousel";
import ApartamentGrid from "./components/ApartamentGrid";
import Footer from "./components/footer";
import ReservationForm from "./components/ReservationForm";

function App() {
  return (
    <div>
      <NavBar />

      <Carrousel />

      <h1 className="mx-3 my-3 text-center">Descubre la zona</h1>
      <p className="text-dark h5 mx-3 my-4">
        El Val Miñor es un destino turístico que combina belleza natural,
        historia y cultura. Es conocido por sus paisajes impresionantes, playas
        de ensueño y atmósfera acogedora.
      </p>
      <p className="text-dark h5 mx-3 my-3">
        Las playas de Playa América y Playa de Patos son ideales para disfrutar
        del sol y practicar deportes acuáticos.
      </p>
      <p className="text-dark h5 mx-3 my-3">
        Baiona destaca por su casco antiguo y su historia como el primer lugar
        en Europa que recibió la noticia del descubrimiento de América.
      </p>
      <p className="text-dark h5 mx-3 my-3">
        El Val Miñor ofrece rutas de senderismo y ciclismo que atraviesan
        montañas, bosques y ríos, con destinos como el Monte Aloia y el Parque
        Natural de las Islas Atlánticas.
      </p>
      <p className="text-dark h5 mx-3 my-3">
        La gastronomía local es famosa por sus mariscos frescos y platos
        tradicionales gallegos.
      </p>

      <h2 id="apartamentos" className="my-3 text-center">
        Nuestros Apartamentos
      </h2>
      <ApartamentGrid />

      <Footer />
    </div>
  );
}

export default App;
