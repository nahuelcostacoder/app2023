import { useState, useEffect } from "react";
import "./Checker.css";

import {contadorContext} from "../../../../App.jsx"

const Checker = ({token}) => {
  const [checker, setChecker] = useState("");
  const [check, setCheck] = useState("a");
  const tema = contadorContext()

  useEffect(()=>{
    setChecker("")
    setCheck("a")
  },[token])

  return (
    <>
      <form action="" className={"form "+"background-"+tema} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          id="token"
          name="token"
          onChange={e=>{setChecker(e.target.value)}}
          value={checker}
        />
        <button
          type="submit"
          onClick={()=>{checker==token?setCheck("b"):setCheck("c"); setChecker("")}}
        >
          Enviar
        </button>
      </form>
      <p className="form-p">{check=="b"?"TOKEN CORRECTO":(check=="c"?"TOKEN INCORRECTO":<>&nbsp;</>)}</p>
    </>
  );
};
export default Checker;
