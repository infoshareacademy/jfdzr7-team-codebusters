import { useState } from "react"

import { increaseCount, decreaseCount, handleCounterClickButton } from "./CartPanelFunctions"
import { StyledCountInput } from "./BookCardPartComponents.styled"
import { StyledCartPanel, Wrapper, StyledButton } from "./BookCardPartComponents.styled"

import minus from "../../../img/icons/minus.png"
import plus from "../../../img/icons/plus.png"
import cart from "../../../img/icons/shopping-cart.png"

export const CartPanel = ({ quantity }) => {
    const [count, setCount] = useState(0)
    const isPanelDisabled = quantity === 0;
    return (
        <StyledCartPanel>
            <Wrapper>
                <StyledButton onClick={(event) => { handleCounterClickButton(event, decreaseCount, count, setCount, quantity) }} disabled={isPanelDisabled}>
                    <img src={minus} alt='minus button' />
                </StyledButton>
                <StyledCountInput
                    name='input'
                    type='text'
                    pattern="[0-9]"
                    value={count}
                    onChange={(event) => {
                        isNaN(+event.currentTarget.value) ? setCount(prev => prev) : setCount(+event.currentTarget.value)
                    }}
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
        </StyledCartPanel>
    )
} 