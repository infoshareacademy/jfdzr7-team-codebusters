import { increaseCount, decreaseCount } from "./CartPanelFunctions"
import { StyledButton } from "./StyledButton"
import minus from '../../../img/icons/minus.png'
import plus from '../../../img/icons/plus.png'
import cart from '../../../img/icons/shopping-cart.png'
import { useState } from "react"
import { StyledCountInput } from "./StyledCountInput"
import { Wrapper } from "./Wrapper"


export const CartPanel = ({ className, quantity }) => {
    const [count, setCount] = useState(0)
    const handleCounterClickButton = (event, cb) => {
        event.preventDefault()
        cb()
    }
    const isPanelDisabled = quantity === 0;
    return (
        <form className={className}>
            <Wrapper>
                <StyledButton onClick={(event) => { handleCounterClickButton(event, decreaseCount(count, setCount)) }} disabled={isPanelDisabled}>
                    <img src={minus} alt='minus button' />
                </StyledButton>
                <StyledCountInput
                    type='text'
                    pattern="\d*"
                    value={count}
                    onChange={(event) => { setCount(event.currentTarget.value) }}
                    onBlur={(event) => {
                        if (count >= quantity) {
                            setCount(quantity)
                            alert('w magazynie znajduje się tylko ' + quantity + ' sztuk')
                        }
                    }}
                    disabled={isPanelDisabled}
                />
                <StyledButton onClick={(event) => { handleCounterClickButton(event, increaseCount(count, setCount, quantity)) }} disabled={isPanelDisabled}>
                    <img src={plus} alt='plus button' />
                </StyledButton>
            </Wrapper>
            <StyledButton type="submit" onClick={(event) => event.preventDefault()} disabled={isPanelDisabled}>
                <img className={cart} src={cart} height={'20px'} alt='add to cart button' />
            </StyledButton>
        </form>
    )

} 