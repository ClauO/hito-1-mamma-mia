import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top pizza-img" alt={`Pizza ${name}`} />

      <div className="card-body">
        <h4 className="card-title text-capitalize text-center pb-2">
          Pizza {name}
        </h4>
        <hr />

        <p className="card-text text-center text-muted mb-1">Ingredientes:</p>
        <ul className="text-center text-capitalize pb-2 list-unstyled mb-0">
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>

        <hr />
        <h4 className="text-center py-2">
          Precio: ${price.toLocaleString("es-CL")}
        </h4>

        <div className="d-flex justify-content-around mt-3">
          <Link to={`/pizza/${id}`} className="btn btn-outline-dark">
            Ver Más 👀
          </Link>

          <button
            className="btn btn-dark"
            onClick={() => addToCart({ id, name, price, img, ingredients })}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
