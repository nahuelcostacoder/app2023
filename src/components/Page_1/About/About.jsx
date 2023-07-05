import "../../../Sass/component-styles/sAbout.scss"
import redFto from "../../../assets/red.webp"
import "../../../App.css"

import {contadorContext} from "../../../App.jsx"

function About(){
    const tema = contadorContext()
    
    return (
        <>
        <div className="about-us">
        <h2 className={"background-"+tema}>SOBRE NOSOTROS</h2>
        <p className={"text-"+tema}>Bienvenido/a a nuestra empresa de seguridad líder en la generación de tokens seguros. En un mundo cada vez más digitalizado, proteger tus activos y datos es crucial. Nos enorgullece ofrecer soluciones avanzadas y confiables para salvaguardar tus intereses y garantizar la integridad de tus transacciones en línea.</p>
        <img src={redFto}/>
        </div>
        
        
        </>
        
    )
}

export default About