import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const pizzaIndex = cart.findIndex((p) => p.id === pizza.id);
    if (pizzaIndex >= 0) {
      const newCart = [...cart];
      newCart[pizzaIndex].count += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(cart.map((p) => (p.id === id ? { ...p, count: p.count + 1 } : p)));
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((p) => (p.id === id ? { ...p, count: p.count - 1 } : p))
        .filter((p) => p.count > 0),
    );
  };

  const total = cart.reduce((acc, p) => acc + p.price * p.count, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQuantity, decreaseQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
