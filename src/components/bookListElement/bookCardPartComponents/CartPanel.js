import minus from "../../../img/icons/minus.png";
import plus from "../../../img/icons/plus.png";
import cart from "../../../img/icons/shopping-cart.png";
import { useState } from "react";
import { increaseCount, decreaseCount } from "./CartPanelFunctions";
import { StyledButton } from "./StyledButton";
import { StyledCountDiv, StyledCountInput } from "./StyledCountInput";
import { Wrapper } from "./Wrapper";
import { useShoppingCart } from "../../../context/CartContext";

export const CartPanel = ({ id, className, quantity }) => {
  // const [count, setCount] = useState(0)
  const { getItemCount, increaseCartCount, decreaseCartCount, removeFromCart } =
    useShoppingCart();
  const count = getItemCount(id);

  const handleCounterClickButton = (event) => {
    event.preventDefault();
  };
  const isPanelDisabled = quantity === 0;
  return (
    <form className={className}>
      <Wrapper>
        <StyledButton
          onClick={(event) => {
            handleCounterClickButton(event, decreaseCartCount(id));
          }}
          disabled={isPanelDisabled}
        >
          <img src={minus} alt="minus button" />
        </StyledButton>
        <StyledCountDiv>{count}</StyledCountDiv>
        {/* <StyledCountInput
                    type='text'
                    pattern="\d*"
                    // value={count}
                    // onChange={(event) => { setCount(count) }}
                    onBlur={(event) => {
                        if (count >= quantity) {
                            setCount(quantity)
                            alert('There are ' + quantity + ' books in stock')
                        }
                    }}
                    disabled={isPanelDisabled}
                />
                <StyledButton onClick={(event) => { handleCounterClickButton(event, increaseCount, count, setCount, quantity) }} disabled={isPanelDisabled}>
                    <img src={plus} alt='plus button' />
                </StyledButton>
            </Wrapper>
            <StyledButton type="submit" onClick={(event) => event.preventDefault()} disabled={isPanelDisabled}>
                <img className={cart} src={cart} height={'20px'} alt='add to cart button' />
            </StyledButton>
        </form>
    )
