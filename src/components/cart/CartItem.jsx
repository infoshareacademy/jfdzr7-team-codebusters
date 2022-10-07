import { useState, useEffect } from "react";
import {
  StyledCartItem,
  StyledButton,
  StyledBookCover,
  StyledCounterButton,
  StyledCounterIput,
  Counter,
  StyledBookAuthor,
  StyledBookTitle,
  StyledPrices,
} from "./Cart.styled";
import { getCover } from "../../utils/getCover";
import { CartContext } from "../../providers/CartProvider";
import { useContext } from "react";
import { updateCart } from "../../utils/cartdbHandlers";
import { AuthContext } from "../../providers/AuthProvider";

export const CartItem = ({
  id,
  author,
  count,
  cover,
  price,
  quantity,
  title,
  handleRemoveFromCart,
  calculateTotalPrice,
}) => {
  const [coverURL, setCoverURL] = useState("");
  const [bookCount, setbookCount] = useState(count);
  const { cart, cartId, setCart, setCartId } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getCover({ cover, setCoverURL });
  }, [cover]);

  useEffect(() => {
    setbookCount(count);
  }, []);

  const handleCountChange = (e, cb) => {
    e.preventDefault();
    cb(bookCount, setbookCount, quantity);
    calculateTotalPrice();
  };

  const increaseCount = (bookCount, setbookCount, quantity) => {
    if (bookCount < quantity) {
      setbookCount(bookCount + 1);
      const found = cart.find((item) => item.id === id);
      found.count = bookCount + 1;
      console.log(cart);
      setCart([...cart]);
      updateCart(cartId, cart, user);
    } else {
      alert("Sorry! only " + quantity + " pieces left in stock");
    }
  };

  const decreaseCount = (bookCount, setbookCount) => {
    if (bookCount !== 0) {
      setbookCount(bookCount - 1);

      const found = cart.find((item) => item.id === id);
      found.count = bookCount - 1;
      console.log(cart);
      setCart([...cart]);
      updateCart(cartId, cart, user);
    }
  };

  return (
    <StyledCartItem>
      <StyledBookCover src={coverURL} alt="cover" />
      <div>
        <StyledBookTitle>
          {title} {count > 1 && <span>{count}x</span>}
        </StyledBookTitle>
        <StyledBookAuthor>by {author}</StyledBookAuthor>
      </div>
      <StyledPrices>{price}</StyledPrices>
      <StyledPrices>{(price * bookCount).toFixed(2)}</StyledPrices>
      <Counter>
        <StyledCounterButton
          onClick={(e) => {
            handleCountChange(e, decreaseCount);
          }}
        >
          -
        </StyledCounterButton>
        <StyledCounterIput
          type="text"
          pattern="\d*"
          value={bookCount}
          onChange={(e) => {
            setbookCount(e.currentTarget.value);
            const found = cart.find((item) => item.id === id);
            found.count = Number(e.currentTarget.value);
            calculateTotalPrice();
            console.log(cart);
          }}
          onBlur={() => {
            if (bookCount >= quantity) {
              setbookCount(quantity);
              alert("Sorry! only " + quantity + " pieces left in stock");
            }
          }}
        />
        <StyledCounterButton
          onClick={(e) => {
            handleCountChange(e, increaseCount);
          }}
        >
          +
        </StyledCounterButton>
      </Counter>
      <StyledButton onClick={(e) => handleRemoveFromCart(e, id)}>
        Remove
      </StyledButton>
    </StyledCartItem>
  );
};
