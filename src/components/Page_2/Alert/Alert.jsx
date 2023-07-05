import "./Alert.css";

import {contadorContext} from "../../../App.jsx"
function Alert() {
    const tema = contadorContext()
  return (
    <>
      <div className="alert">
        <div className={"alerta "+"background-"+tema+" text-"+tema}>
          <h2>ALERTA!!</h2>
          <p>se bloqueo el acceso a la pagina por inectividad</p>
        </div>
      </div>
    </>
  );
}
export default Alert;
