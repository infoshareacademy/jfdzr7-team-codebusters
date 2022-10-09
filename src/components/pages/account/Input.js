import { StyledInput, StyledLabel } from "./AccountPage.styled"
import { Wrapper } from "./AccountPage.styled"
export const Input = ({ formValues, setFormValues, name }) => {
    return (
        <Wrapper>
            <StyledLabel>{name}:</StyledLabel>
            <StyledInput type='text' value={formValues[name] ?? ''} onChange={(event) => setFormValues(prevState => ({
                ...prevState,
                [name]: event.target.value
            }))} />
        </Wrapper>
    )
}