import { useState, useEffect } from "react";
import ciberImg from "../../../assets/ciberimgpng.png";
import "../../../Sass/component-styles/sBody.scss";

import {contadorContext} from "../../../App.jsx"
function Body() {
      const tema = contadorContext()
  return (
    <>
      <div className={"whatwedo "+"text-"+tema}>
        <h2 className={"background-"+tema}>¿Qué hacemos?</h2>
        <p>
        Nuestro principal objetivo es garantizar la integridad de tus datos, transacciones y comunicaciones en línea. Para lograrlo, ofrecemos una amplia gama de servicios especializados, adaptados a las necesidades específicas de tu negocio
        </p>
        <p>
        Creamos tokens personalizados, proporcionamos servidores exclusivos para tu empresa e implementamos sistemas avanzados de detección de inactividad
        </p>
        <img src={ciberImg} alt="" />
      </div>
      <div className={"demoTry "+"text-"+tema}>
        <p>
          En esta paginas vas a ver como implementamos esos sistemas en nuestra pagina 
        </p>
        <h3 className={"background-"+tema}>Proba uno de nuestros productos</h3>
        <p className="hola">
        A continuación, te presentamos una muestra de nuestra gestión de tokens en acción
        </p>
        <br />
      </div>
    </>
  );
}

export default Body;
