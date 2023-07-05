import "./Body.css"
import lock from "../../../assets/lock.png"



function Body(){

    return (
        <>
        <div className="main ">
            <div className="mainText">
            <h1>La mejor seguridad</h1>
            <h3>Utilizamos tecnología de punta para garantizar la generación de tokens seguros y confiables. Nuestros sistemas están actualizados con las últimas innovaciones en seguridad cibernética para mantenernos a la vanguardia.</h3>
            </div>
            <img src={lock}/>
        </div>
        </>
        
    )
}

export default Body