import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import {
  StyledCart,
  StyledTitle,
  StyledCartContainer,
  StyledSummary,
  StyledCartList,
  StyledEmptyCartDiv,
  StyledDeliveryButton,
  StyledLink,
  StyledOrangeLink,
} from "./Cart.styled";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../providers/CartProvider";
import { findCart, updateCart } from "../../utils/cartdbHandlers";
import { AuthContext } from "../../providers/AuthProvider";
import { deleteCart } from "../../utils/cartdbHandlers";

export const ShoppingCart = () => {
  const { cart, cartId, setCart, setCartId, total, setTotal } =
    useContext(CartContext);

  const { user } = useContext(AuthContext);

  const handleRemoveFromCart = (id) => {
    if (cart.length == 1) {
      deleteCart(cartId);
      const arr = cart.filter((item) => item.id !== id);
      updateCart(cartId, arr, user);
      setCart(arr);
    } else if (cart.length > 1) {
      const arr = cart.filter((item) => item.id !== id);
      updateCart(cartId, arr, user);
      setCart(arr);
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = cart.reduce((prevBook, currBook) => {
      return prevBook + currBook.price * currBook.count;
    }, 0);

    setTotal(totalPrice.toFixed(2));
  };

  useEffect(() => {
    calculateTotalPrice();
    console.log("tak");
  }, [cart]);

  useEffect(() => {
    if (findCart(user, setCart, setCartId) !== [])
      findCart(user, setCart, setCartId);
    console.log(cartId);
    console.log(cart);
  }, [user]);

  return (
    <StyledCart>
      <StyledTitle>Your cart:</StyledTitle>
      <StyledCartContainer>
        {!cart.length || cart.length == 0 ? (
          <StyledEmptyCartDiv>
            <div>
              <span>Sorry, your cart is empty.</span>
              <span>Add products to your cart and buy quick and easy:</span>
            </div>
            <StyledOrangeLink to="/books">Book Store</StyledOrangeLink>
          </StyledEmptyCartDiv>
        ) : (
          <StyledCartList>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                handleRemoveFromCart={handleRemoveFromCart}
                calculateTotalPrice={calculateTotalPrice}
              />
            ))}
          </StyledCartList>
        )}

        {cart.length > 0 && (
          <StyledSummary>
            Total price: {total} zł
            <StyledDeliveryButton>
              <StyledLink to="/delivery"> Delivery and Payment</StyledLink>
            </StyledDeliveryButton>
          </StyledSummary>
        )}
      </StyledCartContainer>
    </StyledCart>
  );
};
