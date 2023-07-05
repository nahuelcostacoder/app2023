import { useState, useEffect } from "react";
import "./Page2.css";

import Body from "./Body/Body.jsx";
import Alert from "./Alert/Alert.jsx";
import Token from "./Token/Token.jsx";

import {contadorContext} from "../../App.jsx"

function Page2() {
  const time = 15 -1
  const [timer, setTimer] = useState(time);
  const [isEnabled, setIsEnabled] = useState(true);
  
  const tema = contadorContext()

  window.onclick = () => {isEnabled? setTimer(time) : null};

  function alerta() {
    if (timer == 0 && isEnabled) {setIsEnabled(false);} 
    else if (isEnabled) {setTimer(timer - 1);}
  }

  useEffect(() => {
    const intervalo = setInterval(alerta, 1000);
    return () => {
      clearInterval(intervalo);
    };
  }, [timer, isEnabled]);

  return (
    <>
          {!isEnabled ? <Alert /> : null}
      <div className={!isEnabled ? "hidden" : "normal"}>
        <div className={"timer "+"background-"+tema}>
          <h5>Deteccion de actividad</h5>
        {isEnabled ? (
          <p>de click en {timer + 1} segundos <br/> o se cerrara la sesión</p>
        ) : (
          <p>La sesion caduco</p>
        )}
        </div>
        <Body/>
        <Token />
      </div>
    </>
  );
}

export default Page2;
