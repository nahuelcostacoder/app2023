import "./Form.css";

import { useState, useRef } from "react";
import {contadorContext} from "../../../App.jsx"

function Form() {
  const [name, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const tema = contadorContext()
  return (
    <>
      <h2>Contactanos</h2>
      <form
        action=""
        className={"formulary "+"background-"+tema}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p className="tituloFormulario">NOMBRE</p>
        <input
          type="text"
          id="nombre"
          name="nombre"
          onChange={(e) => {
            setNombre(e.target.value);
          }}
          value={name}
        />
        <p className="tituloFormulario">EMAIL</p>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <p className="tituloFormulario">TELÉFONO</p>
        <input
          type="text"
          id="telefono"
          name="telefono"
          onChange={(e) => {
            setTelefono(e.target.value);
          }}
          value={telefono}
        />
        <p className="tituloFormulario">ASUNTO</p>
        <input
          type="text"
          id="asunto"
          name="asunto"
          onChange={(e) => {
            setAsunto(e.target.value);
          }}
          value={asunto}
        />
        <p className="tituloFormulario">MENSAJE</p>
        <input
          type="text"
          id="mensaje"
          name="mensaje"
          onChange={(e) => {
            setMensaje(e.target.value);
          }}
          value={mensaje}
        />
        <button
          type="submit"
          onClick={() => {
            console.log(
              JSON.stringify({ name, email, telefono, asunto, mensaje })
            );
            setNombre("");
            setEmail("");
            setTelefono("");
            setAsunto("");
            setMensaje("");
          }}
        >
          Enviar
        </button>
      </form>
    </>
  );
}
export default Form;
