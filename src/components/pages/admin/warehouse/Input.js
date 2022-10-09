import { StyledInput, StyledLabel } from "./WarehousePage.styled"
export const Input = ({ newPrice, setNewPrice }) => {
    const checkPrice = (price) => {
        return (+price < 0) || isNaN(+price)
    }
    return (
        <StyledLabel>
            <StyledInput type='text' value={newPrice} onChange={(event) => {
                setNewPrice(event.currentTarget.value)
            }}
                onBlur={() => {
                    if (checkPrice(newPrice)) {
                        alert('Entered wrong price. Correct before save')
                    }
                }}
            />
            zł</StyledLabel >

    )
}