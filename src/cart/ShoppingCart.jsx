import { useShoppingCart } from "../context/CartContext";
import { CartItem } from "./CartItem";
import { BooksListContext } from "../context/BooksListContext";
import {
  StyledCart,
  StyledTitle,
  StyledCartContainer,
  StyledSummary,
  StyledCartList,
  StyledEmptyCartDiv,
} from "./Cart.styled";
import { useContext } from "react";
import { CartSummaryForm } from "./CartSummaryForm";

export const ShoppingCart = () => {
  const { cartItems } = useShoppingCart();
  const { booksList } = useContext(BooksListContext);

  return (
    <StyledCart>
      <StyledTitle>Your cart:</StyledTitle>
      <StyledCartContainer>
        {cartItems.length > 0 && (
          <StyledCartList>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </StyledCartList>
        )}
        {cartItems.length == 0 && (
          <StyledEmptyCartDiv>Your cart is empty :(</StyledEmptyCartDiv>
        )}
        {cartItems.length > 0 && (
          <StyledSummary>
            Total:{" "}
            {cartItems.reduce((total, cartItem) => {
              const item = booksList.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.count;
            })}
          </StyledSummary>
        )}
      </StyledCartContainer>
      {cartItems.length > 0 && <CartSummaryForm />}
    </StyledCart>
  );
};
