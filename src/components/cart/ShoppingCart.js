import { CartItem } from "./CartItem";
import {
  StyledCart,
  StyledTitle,
  StyledCartContainer,
  StyledSummary,
  StyledCartList,
  StyledEmptyCartDiv,
  StyledButton,
} from "./Cart.styled";
import { useContext, useEffect, useState } from "react";
import { CartSummaryForm } from "./CartSummaryForm";
import { CartContext } from "../../providers/CartProvider";

export const ShoppingCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [showSummary, setshowSummary] = useState(false);

  const handleRemoveFromCart = (e, id) => {
    e.preventDefault();
    const arr = cart.filter((item) => item.id !== id);
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
    console.log("elo");
  };

  useEffect(() => {
    calculateTotalPrice();
    console.log("tak");
  }, [cart]);

  const showCartSummaryForm = () => {
    setshowSummary((current) => !current);
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
                calculateTotalPrice={calculateTotalPrice}
              />
            ))}
          </StyledCartList>
        )}
        {cart.length == 0 && (
          <StyledEmptyCartDiv>
            Sorry, your cart is empty. You can choose your products here in our
            shop:
            <a href="">Click here</a>
          </StyledEmptyCartDiv>
        )}
        {cart.length > 0 && (
          <StyledSummary>
            Total:{total}
            <StyledButton onClick={showCartSummaryForm}>
              Delivery and Payment
            </StyledButton>
          </StyledSummary>
        )}
      </StyledCartContainer>
      {showSummary && <CartSummaryForm />}
    </StyledCart>
  );
};
