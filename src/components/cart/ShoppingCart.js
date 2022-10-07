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
} from "./Cart.styled";
import { useContext, useEffect, useState } from "react";
import { CartSummaryForm } from "./CartSummaryForm";
import { CartContext } from "../../providers/CartProvider";
import { findCart, updateCart } from "../../utils/cartdbHandlers";
import { AuthContext } from "../../providers/AuthProvider";

export const ShoppingCart = () => {
  const { cart, cartId, setCart, setCartId } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [showSummary, setshowSummary] = useState(false);
  const { user } = useContext(AuthContext);

  const handleRemoveFromCart = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    updateCart(cartId, arr, user);
    setCart(arr);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    if (cart.length == 1) {
      totalPrice = cart[0].price * cart[0].count;
    } else if (cart.length > 1) {
      totalPrice = cart.reduce((prevBook, currBook) => {
        return (
          prevBook.price * prevBook.count + currBook.price * currBook.count
        );
      });
    }
    setTotal(totalPrice.toFixed(2));
  };

  useEffect(() => {
    calculateTotalPrice();
    console.log("tak");
  }, [cart]);

  const showCartSummaryForm = () => {
    setshowSummary((current) => !current);
  };

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
            <span>Sorry, your cart is empty.</span>
            <span>Add products to your cart and buy quick and easy:</span>

            <Link to="/books">Book Store</Link>
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
            Total:{total}
            <StyledDeliveryButton onClick={showCartSummaryForm}>
              Delivery and Payment
            </StyledDeliveryButton>
          </StyledSummary>
        )}
      </StyledCartContainer>
      {showSummary && <CartSummaryForm />}
    </StyledCart>
  );
};
