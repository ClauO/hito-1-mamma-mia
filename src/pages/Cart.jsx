import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { formatCurrency } from "../utils/format";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, total } =
    useContext(CartContext);
  const { token } = useContext(UserContext);

  return (
    <div className="container mt-5 mb-5">
      <h2>Carrito</h2>
      <div className="list-group">
        {cart.map((pizza) => (
          <div
            key={pizza.id}
            className="list-group-item d-flex justify-content-between align-items-center mb-3"
          >
            <div className="d-flex align-items-center">
              <img src={pizza.img} style={{ width: "50px" }} alt={pizza.name} />
              <h5 className="ms-3 mb-0 text-capitalize">{pizza.name}</h5>
            </div>
            <div className="d-flex align-items-center">
              <p className="mb-0 mx-3 text-success fw-bold">
                ${formatCurrency(pizza.price * pizza.count)}
              </p>
              <button
                className="btn btn-outline-danger btn-sm px-3"
                onClick={() => decreaseQuantity(pizza.id)}
              >
                -
              </button>
              <span className="mx-2 fw-bold">{pizza.count}</span>
              <button
                className="btn btn-outline-primary btn-sm px-3"
                onClick={() => increaseQuantity(pizza.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <h3 className="mt-4">Total: ${formatCurrency(total)}</h3>

      <button className="btn btn-dark mt-2" disabled={!token}>
        Pagar
      </button>
    </div>
  );
};

export default Cart;
