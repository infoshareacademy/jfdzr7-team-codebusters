import { useContext } from "react"

export const CategoryRadioButton = ({ className, option, context }) => {
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
            <input className={className} type={'radio'}
                id={inputID}
                name='option'
                value={option}
                checked={searchConditions.checkedOption === option}
                onChange={(event) => handleChange(event)} />
            <label htmlFor={inputID}>{option}</label>
        </>
    )
}