
//img prueba
import imgPrueba from "../../../assets/logo.svg"
import "../../../Sass/component-styles/sProducts.scss"
import Carrito from "./Carrito/Carrito";
import { useEffect, useState } from "react";
import {contadorContext} from "../../../App.jsx"
const data = [
    {
      title: 'Plan 1',
      descripcion: 'Servicio de Token para 10 empleados',
      price: 1500,
      img: imgPrueba
    },
    {
      title: 'Plan 2',
      descripcion: 'Servicio de Token mas servidor dedicado para 10 empleados',
      price: 2000,
      img: imgPrueba
    },

    {
      title: 'Plan 3',
      descripcion: 'Servicio de token mas servidor dedicado y sistema de detección de inactividad para 10 empleados',
      price: 3000,
      img: imgPrueba
    }
   
  ]
  
function Products(){
  const [carrito, setCarrito] = useState([]);
  const tema = contadorContext()
  
  
  function addCarrito(title, descripcion, price, img){
    
    const producto = carrito.find(item => item.title === title);
    if(producto){
      setCarrito(carrito.map(item =>
        item.title === title
        ? {...producto, cantidad: producto.cantidad + 1}
        : item
      ))
    }else{
      setCarrito([
        ...carrito,
        { title, descripcion, price, img, cantidad: 1 }
      ])
    }
  }

  useEffect(() => {
    console.log(carrito)
  }, [carrito])

    return (
        <>
        <div className={"content "+"text-"+tema}>
            <h2 className={"background-"+tema}>PRODUCTOS</h2>
        <p>Nuestro servicio de generación de tokens seguros utiliza algoritmos de cifrado avanzados para crear tokens personalizados que garantizan la autenticación confiable de usuarios. Además de nuestra capacidad para generar tokens seguros, también ofrecemos un servicio de servidor dedicado que optimiza aún más la seguridad y el rendimiento de tu plataforma.</p>
        <p>Nuestro servicio más completo incluye la generación de tokens seguros, un servidor dedicado y un avanzado sistema de detección de inactividad. Este sistema inteligente monitorea constantemente la actividad en tu plataforma y detecta cualquier inactividad sospechosa, lo que puede indicar intentos de intrusión o violaciones de seguridad.</p>
        </div>
        
        
        <div className="productos_section">
        {data.map((item, index)=> {
            return (
              <div className="">
              <div className={'card '+"background-"+tema} key={index}>
                <img src={item.img} alt="img"/>
                <h3>{item.title}</h3>
                <p className="text">{item.descripcion}</p>
                <p> 
                  {item.price}
                  <span
                    style={{
                      fontSize: '1.2rem',
                      color: '#00D8FF',
                      marginLeft: '2px'
                    }}
                  >$</span>
                </p>
              </div>
                <button className="button buy"
                onClick={()=>addCarrito(
                  item.title, 
                  item.descripcion, 
                  item.price,
                  item.img)}>
                  Agregar al carrito
                </button>
              </div>
              
            )
        })}
        </div>
      <Carrito 
        carrito={carrito}
        setCarrito={setCarrito}/>
    
    
    </>   
    )
    
}

export default Products