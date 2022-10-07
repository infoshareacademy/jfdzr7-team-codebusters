import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartId, setCartId] = useState(null);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartId,
        setCartId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
