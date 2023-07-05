import "../../../../Sass/component-styles/sCarrito.scss";
import {contadorContext} from "../../../../App.jsx"
function Carrito({ carrito, setCarrito }) {
    const tema = contadorContext()

  function eliminarProducto(index) {
    const newCarrito = [...carrito];

    if (newCarrito[index].cantidad > 1) {
      newCarrito[index].cantidad--;
      setCarrito(newCarrito);
    } else {
      newCarrito.splice(index, 1);
      setCarrito(newCarrito);
    }
  }

  return (
    <>
      <h1 className={"title_carrito "+"text-"+tema}>Carrito</h1>
      <div className="container_cart">
        <div className="cart_add_container">
          {carrito.map((item, index) => {
            return (
                <div>
              <div className={"card "+"background-"+tema} key={index}>
                <img src={item.img} alt="img" />
                <h3>{item.title}</h3>
                <p className="text">{item.descripcion}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "50%",
                  }}
                >
                </div>
                <div className="cantidad">
                  <p>
                    {item.price}
                    <span
                      style={{
                        fontSize: "1.2rem",
                        color: "green",
                        marginLeft: "2px"
                      }}
                    >
                      $
                    </span>
                  </p>
                  <p>cant: {item.cantidad}</p>
                </div>
              </div>
                <button className="button del" onClick={() => eliminarProducto(index)}>
                  Eliminar del carrito
                </button>
                </div>
            );
          })}
        </div>
      </div>
      <button onClick={()=>{setCarrito([])}}>Comprar</button>
    </>
  );
}

export default Carrito;
