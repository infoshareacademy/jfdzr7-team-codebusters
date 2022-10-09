import { StyledInput, StyledLabel } from "./AccountPage.styled"
import { Wrapper } from "./AccountPage.styled"
export const AddressInput = ({ formValues, setFormValues, name }) => {
    return (
        <Wrapper>
            <StyledLabel>{name}:</StyledLabel>
            <StyledInput type='text' value={formValues.address[name] ?? ''} onChange={(event) => setFormValues(prevState => ({
                ...prevState,
                address: {
                    ...prevState.address,
                    [name]: event.target.value
                }
            }))} />
        </Wrapper>
    )
}