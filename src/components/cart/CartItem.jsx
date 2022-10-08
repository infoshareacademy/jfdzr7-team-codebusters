import { useState, useEffect, useContext } from "react";
import { getCover } from "../../utils/getCover";
import { CartContext } from "../../providers/CartProvider";
import { updateCart } from "../../utils/cartdbHandlers";
import { AuthContext } from "../../providers/AuthProvider";
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
  const { cart, cartId, setCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

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

  const confirmDeleteFromCart = () => {
    let text = "Delete this position from cart?";
    if (window.confirm(text) == true) {
      handleRemoveFromCart(id);
    }
  };

  const decreaseCount = (bookCount, setbookCount) => {
    if (bookCount > 1) {
      setbookCount(bookCount - 1);
      const found = cart.find((item) => item.id === id);
      found.count = bookCount - 1;
      console.log(cart);
      setCart([...cart]);
      updateCart(cartId, cart, user);
    } else if (bookCount === 1) {
      confirmDeleteFromCart();
    }
  };

  useEffect(() => {
    getCover({ cover, setCoverURL });
  }, [cover]);

  useEffect(() => {
    setbookCount(count);
  }, []);

  return (
    <StyledCartItem>
      <StyledBookCover src={coverURL} alt="cover" />
      <div>
        <StyledBookTitle>
          {title} {count > 1 && <span>{count}x</span>}
        </StyledBookTitle>
        <StyledBookAuthor>by {author}</StyledBookAuthor>
      </div>
      <StyledPrices>{price} zł</StyledPrices>
      <StyledPrices>{(price * bookCount).toFixed(2)} zł</StyledPrices>
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
      <StyledButton onClick={(e) => handleRemoveFromCart(id)}>
        Remove
      </StyledButton>
    </StyledCartItem>
  );
};
