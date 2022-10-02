import { CartItem } from "./CartItem";
import {
  StyledCart,
  StyledTitle,
  StyledCartContainer,
  StyledSummary,
  StyledCartList,
  StyledEmptyCartDiv,
  StyledCartItem,
} from "./Cart.styled";
import { useContext } from "react";
import { CartSummaryForm } from "./CartSummaryForm";
import { CartContext } from "../../providers/CartProvider";

export const ShoppingCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleRemoveFromCart = (e, id) => {
    e.preventDefault();
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  return (
    <StyledCart>
      <StyledTitle>Your cart:</StyledTitle>
      <StyledCartContainer>
        {cart.length > 0 && (
          <StyledCartList>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
          </StyledCartList>
        )}
        {cart.length == 0 && (
          <StyledEmptyCartDiv>Your cart is empty :(</StyledEmptyCartDiv>
        )}
      </StyledCartContainer>
      {cart.length > 0 && <CartSummaryForm />}
    </StyledCart>
  );
};
