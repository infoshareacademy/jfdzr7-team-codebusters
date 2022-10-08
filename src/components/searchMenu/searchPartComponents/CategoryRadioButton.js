import { useContext } from "react"
import { StyledCategoryRadioButton } from "./searchPartComponents.styled"

export const CategoryRadioButton = ({ option, context }) => {
    const { searchConditions, setSearchConditions } = useContext(context)
    const inputID = 'option-' + option
    const handleChange = (event) => {
        setSearchConditions({
            ...searchConditions,
            checkedOption: event.currentTarget.value
        })
    }
    return (
        <>
            <StyledCategoryRadioButton
                id={inputID}
                name='option'
                value={option}
                checked={searchConditions.checkedOption === option}
                onChange={(event) => handleChange(event)} />
            <label htmlFor={inputID}>{option}</label>
        </>
    )
}