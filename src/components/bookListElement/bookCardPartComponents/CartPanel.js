import minus from "../../../img/icons/minus.png";
import plus from "../../../img/icons/plus.png";
import cartImg from "../../../img/icons/shopping-cart.png";
import { useState } from "react";
import { increaseCount, decreaseCount } from "./CartPanelFunctions";
import { StyledButton } from "./StyledButton";
import { StyledCountInput } from "./StyledCountInput";
import { Wrapper } from "./Wrapper";
import { useContext } from "react";
import { CartContext } from "../../../providers/CartProvider";

export const CartPanel = ({ className, quantity, book }) => {
  const [count, setCount] = useState(0);
  const { cart, setCart } = useContext(CartContext);

  const handleCounterClickButton = (event, cb) => {
    event.preventDefault();
    cb(count, setCount, quantity);
  };

  const handleAddToCartClickButton = (e, book, count) => {
    e.preventDefault();

    const isBookInCart = cart.some((item) => item.id === book.id);
    console.log(isBookInCart);

    if (count > 0) {
      if (!isBookInCart) {
        book.count = count;
        cart.push(book);
        setCart([...cart]);
      } else {
        const found = cart.find((item) => item.id === book.id);
        if (found.count + count <= book.quantity) {
          found.count = found.count + count;
        } else {
          alert(
            "There are " +
              book.quantity +
              " books in stock " +
              "and you have already " +
              found.count +
              " pieces of this product in your cart. " +
              "You can add maximum " +
              (book.quantity - found.count) +
              " pieces of this product more."
          );
        }
      }
    } else {
      alert("You need to select at least 1 item to add to cart!");
    }

    console.log(cart);
  };

  const isPanelDisabled = quantity === 0;

  return (
    <form className={className}>
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
            setCount(event.currentTarget.value);
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
        onClick={(e) => handleAddToCartClickButton(e, book, count)}
        disabled={isPanelDisabled}
      >
        <img
          className={cart}
          src={cartImg}
          height={"20px"}
          alt="add to cart button"
        />
      </StyledButton>
    </form>
  );
};
