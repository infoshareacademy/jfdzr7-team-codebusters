import { StyledDecorationBar } from "./DecorationBar.styled"
import book from "../../img/icons/book.png"

export const DecorationBar = () => {
    return (
        <StyledDecorationBar aria-hidden>
            <img src={book} alt='decoration bar with book' />
        </StyledDecorationBar>
    )
}