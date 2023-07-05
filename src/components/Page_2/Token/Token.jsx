import { useState, useEffect } from "react";
import "./Token.css";

import Checker from "./Checker/Checker.jsx";
import {contadorContext} from "../../../App.jsx"

const Token = () => {
  const [token, tokenUpdate] = useState("----------------");
  const [time, timeUpdate] = useState(7);
  const timer = 7;
  const tema = contadorContext()

  useEffect(() => {
    function getAPI() {
      fetch("https://random-data-api.com/api/v2/users")
        .then((response) => response.json())
        .then((data) => {
          tokenUpdate(data.password);
          timeUpdate(7);
        });
    }

    const intervalo = setInterval(getAPI, timer * 1000);
    return () => {
      clearInterval(intervalo);
    };
  }, []);



  useEffect(() => {
    function countdown() {
        time>0?timeUpdate(time - 1):null
    }

    const intervalo = setInterval(countdown, 1000);
    return () => {
      clearInterval(intervalo);
    };
  }, [token, time]);




  
  return (
    <>
      <div className={"token "+"background-"+tema}>
        <div>
          <h5>SU TOKEN ES:</h5>
          <h5>{token}</h5>
        </div>
        <div>
          <p>el token se actualizará <br /> en {time} segundos</p>
        </div>
        <Checker token={token}/>
      </div>
    </>
  );
};
export default Token;
