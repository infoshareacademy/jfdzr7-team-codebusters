import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartId, setCartId] = useState(null);
  const [total, setTotal] = useState(0);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartId,
        setCartId,
        total,
        setTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
