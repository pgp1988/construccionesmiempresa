import { Footer } from "../footer/Footer";
import { NavBar } from "../menu/NavBar";
import "../../styles.css";
import { Carousel } from "../carousel/Carousel";
import { useState } from "react";

export const Inicio = () => {

  const [displayMessage, setDisplayMessage] = useState(sessionStorage.getItem("cookies"));


  const handleClick = (aceptarCookies) => {
    sessionStorage.setItem('cookies', aceptarCookies);
    setDisplayMessage(sessionStorage.getItem("cookies"));
  }

  return (
    <>
      <div className="gridtemplate">
        <NavBar/>
          <h1 className="encabezado1">MiEmpresa</h1>
          <h2 className="encabezado2">Bienvenidos/as!</h2>
          <h2 className="encabezado2b">Información</h2>
          <p className="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat corrupti nulla ut eius numquam fugit at aliquid possimus, aliquam, delectus sapiente? Et delectus porro maxime voluptatem ut ea aliquid a enim molestiae sit ipsum vero aut, itaque neque explicabo asperiores in ducimus omnis beatae? Dignissimos dolores sint maiores architecto dicta harum quo ipsum culpa perferendis, aliquam quam doloremque, repellendus eligendi. Ex alias, libero at praesentium excepturi accusantium cumque officia aliquid fuga fugiat tempore sunt omnis! </p>
          <p className="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat corrupti nulla ut eius numquam fugit at aliquid possimus, aliquam, delectus sapiente? Et delectus porro maxime voluptatem ut ea aliquid a enim molestiae sit ipsum vero aut, itaque neque explicabo asperiores in ducimus omnis beatae? Dignissimos dolores sint maiores architecto dicta harum quo ipsum culpa perferendis, aliquam quam doloremque, repellendus eligendi. Ex alias, libero at praesentium excepturi accusantium cumque officia aliquid fuga fugiat tempore sunt omnis! </p>
          <div className="atributos"><p>El favicon <a target="_blank" href="https://icons8.com/icon/8064/hammer" rel="noreferrer noopener">(Martillo)</a> es un icono tomado de <a target="_blank" href="https://icons8.com" rel="noreferrer noopener">Icons8</a></p></div>
          <div className="atributos2"><p>Los iconos de las redes sociales se tomaron de: <a target="_blank" href="https://www.flaticon.com/free-icons/brands-and-logotypes" title="brands and logotypes icons" rel="noreferrer noopener">Brands and logotypes icons created by Freepik - Flaticon</a></p></div>
          <div className="atributos3"><p>Las imágenes en esta web se tomaron de: <a href="https://www.pexels.com/" target="_blank" rel="noreferrer noopener">https://www.pexels.com/</a></p></div>
          <Carousel/>
          {displayMessage === null &&
            <div className="cookies">
              <div className="cookiesMessage">
                <h3>Las cookies permiten una experiencia óptima de navegación</h3>
                <p>Le informamos de que esta web utiliza cookies para mejorar su experiencia de navegación y mostrar el contenido y publicidad según sus preferencias. Puede aceptar su uso o cancelar y bloquear su uso.</p>
                <div className="botonesCookies">
                  <button onClick={() => handleClick('true')} id="aceptarCookies">Aceptar</button>
                  <button onClick={() => handleClick('false')} id="cancelarCookies">Cancelar</button>
                </div>
              </div>
            </div>
          }
        <Footer/>
      </div>
    </>
  );
};
