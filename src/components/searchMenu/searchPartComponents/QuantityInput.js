import { useContext } from "react"

export const QuantityInput = ({ name, labelText, value, partOfQuantity, context }) => {
    const { searchConditions, setSearchConditions } = useContext(context)
    const selectedQuantityRange = searchConditions.selectedQuantityRange
    const checkQuantityChange = (currentValue, partOfQuantity) => {
        if (partOfQuantity === 'minQuantity' &&
            +currentValue > selectedQuantityRange.maxQuantity) {
            currentValue = selectedQuantityRange.maxQuantity
            setSearchConditions({
                ...searchConditions,
                selectedQuantityRange: {
                    ...selectedQuantityRange,
                    [partOfQuantity]: +currentValue
                }
            })
        }
        if (partOfQuantity === 'maxQuantity' &&
            +currentValue < selectedQuantityRange.minQuantity) {
            currentValue = selectedQuantityRange.minQuantity
            setSearchConditions({
                ...searchConditions,
                selectedQuantityRange: {
                    ...selectedQuantityRange,
                    [partOfQuantity]: +currentValue
                }
            })
        }
    }
    const handleQuantityChange = (currentValue, partOfQuantity) => {
        setSearchConditions({
            ...searchConditions,
            selectedQuantityRange: {
                ...selectedQuantityRange,
                [partOfQuantity]: +currentValue
            }
        })
    }
    return (
        <label htmlFor={name}>{labelText}
            <input
                name={name}
                type='text'
                value={value}
                pattern="\d*"
                onChange={event => handleQuantityChange(event.currentTarget.value, partOfQuantity)}
                onBlur={event => checkQuantityChange(event.currentTarget.value, partOfQuantity)}
            />
        </label>
    )
}