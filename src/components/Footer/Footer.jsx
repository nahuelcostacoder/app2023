import "./Footer.css";

import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"

function Footer() {
  return (
    <>
      <footer>
        <h2>Security</h2>
        <center>
          <img src={facebook} className="imgs" onClick={()=>{window.open("https://www.facebook.com", '_blank')}}/>
          <img src={twitter} className="imgs" onClick={()=>{window.open("https://www.twitter.com", '_blank')}}/>
          <img src={instagram} className="imgs" onClick={()=>{window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0", '_blank')}}/>
        </center>
        <h3 className="tituloIntegrantes">INTEGRANTES</h3>
        <div className="integrantes">
          <ul className="fila">
            <li>Francisco García Araya</li>
            <li>Florencia Battlaglino</li>
          </ul>
          <ul className="fila">
            <li>Nahuel Costa</li>
            <li>Alden Borja</li>
          </ul>
          <ul className="fila">
            <li>Agustín Vargas</li>
            <li>José Salazar</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
export default Footer;
