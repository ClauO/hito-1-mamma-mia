import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { formatCurrency } from "../utils/format";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, total } =
    useContext(CartContext);

  return (
    <div className="container mt-5">
      <h2>Carrito</h2>
      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex justify-content-between align-items-center mb-3"
        >
          <div className="d-flex align-items-center">
            <img src={pizza.img} style={{ width: "50px" }} />
            <h5 className="ms-3">{pizza.name}</h5>
          </div>
          <div>
            <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
            <span className="mx-2">{pizza.count}</span>
            <button onClick={() => increaseQuantity(pizza.id)}>+</button>
            <span className="ms-3">
              ${formatCurrency(pizza.price * pizza.count)}
            </span>
          </div>
        </div>
      ))}
      <h3>Total: ${formatCurrency(total)}</h3>
    </div>
  );
};

export default Cart;
