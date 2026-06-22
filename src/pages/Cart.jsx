import { useState } from "react";
import { pizzaCart } from "../mocks/pizzas";
import { formatCurrency } from "../utils/format";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // Función para aumentar las unidades de una pizza
  const increaseQuantity = (id) => {
    const newCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza,
    );
    setCart(newCart);
  };

  // Función para disminuir las unidades y eliminar si llega a 0
  const decreaseQuantity = (id) => {
    const newCart = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza,
      )
      .filter((pizza) => pizza.count > 0);
    setCart(newCart);
  };

  // Cálculo del total dinámico
  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <div className="container mt-5 mb-5">
      <h2>Detalles del pedido:</h2>
      <div className="list-group">
        {cart.map((pizza) => (
          <div
            key={pizza.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              <img src={pizza.img} alt={pizza.name} className="cart-img me-2" />
              <h5 className="mb-0 text-capitalize">{pizza.name}</h5>
            </div>

            <div className="d-flex align-items-center">
              <p className="mb-0 mx-3 text-success fw-bold">
                ${formatCurrency(pizza.price)}
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
      <button className="btn btn-dark mt-2">Pagar</button>
    </div>
  );
};

export default Cart;
