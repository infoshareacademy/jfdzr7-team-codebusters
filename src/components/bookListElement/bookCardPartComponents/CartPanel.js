import { useState, useContext } from "react";
import { increaseCount, decreaseCount, handleCounterClickButton } from "./CartPanelFunctions";
import { StyledButton, StyledCountInput, Wrapper } from "./BookCardPartComponents.styled";

import { updateCart, createCart, findCart } from "../../../utils/cartdbHandlers";
import { CartContext } from "../../../providers/CartProvider";
import { AuthContext } from "../../../providers/AuthProvider";

import minus from "../../../img/icons/minus.png";
import plus from "../../../img/icons/plus.png";
import cartImg from "../../../img/icons/shopping-cart.png";

export const CartPanel = ({ quantity, book }) => {
  const [count, setCount] = useState(0);
  const { cart, cartId, setCart, setCartId } = useContext(CartContext);
  const { user } = useContext(AuthContext);


  const handleAddToCartClickButton = (e, count, book) => {
    e.preventDefault();
    console.log("user", user);
    if (count > 0) {
      findCart(user, setCart, setCartId);
      if (cart.length == 0) {
        book.count = count;
        cart.push(book);
        setCart([...cart]);
        createCart(cart, user);
      } else {
        const isBookInCart = cart.some((item) => item.id === book.id);
        if (!isBookInCart) {
          book.count = count;
          cart.push(book);
          setCart([...cart]);
          updateCart(cartId, cart, user);
        } else {
          const found = cart.find((item) => item.id === book.id);
          if (found.count + count <= book.quantity) {
            found.count = found.count + count;
            updateCart(cartId, cart, user);
          } else {
            alert(
              "Sorry! only " +
                book.quantity +
                " pieces left in stock " +
                "and you have already " +
                found.count +
                " pieces of this product in your cart. " +
                "You can add maximum " +
                (book.quantity - found.count) +
                " pieces of this product more."
            );
          }
        }
      }
    } else {
      alert("You need to select at least 1 item to add to cart!");
    }
  };

  const isPanelDisabled = quantity === 0;

  return (
    <StyledCartPanel>
      <Wrapper>
        <StyledButton
          onClick={(event) => {
            handleCounterClickButton(event, decreaseCount);
          }}
          disabled={isPanelDisabled}
        >
          <img src={minus} alt="minus button" />
        </StyledButton>
        <StyledCountInput
          type="text"
          pattern="\d*"
          value={count}
          onChange={(event) => {
             isNaN(+event.currentTarget.value) ? setCount(prevState => prevState) : setCount(+event.currentTarget.value)
          }}
          onBlur={() => {
            if (count >= quantity) {
              setCount(quantity);
              alert("Sorry! only " + quantity + " pieces left in stock");
            }
          }}
          disabled={isPanelDisabled}
        />
        <StyledButton
          onClick={(event) => {
            handleCounterClickButton(
              event,
              increaseCount,
              count,
              setCount,
              quantity
            );
          }}
          disabled={isPanelDisabled}
        >
          <img src={plus} alt="plus button" />
        </StyledButton>
      </Wrapper>
      <StyledButton
        type="submit"
        onClick={(e) => handleAddToCartClickButton(e, count, book)}
        disabled={isPanelDisabled}
      >
        <img
          className={cart}
          src={cartImg}
          height={"20px"}
          alt="add to cart button"
        />
      </StyledButton>
    </StyledCartPanel>
  );
};