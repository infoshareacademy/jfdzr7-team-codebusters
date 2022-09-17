import { useContext } from 'react'
import { BooksSearchContext } from '../../../context/BooksSearchContext'
import { StyledLabel } from './Wrapper'

export const PriceBar = () => {
    const { selectedPriceRange, setSelectedPriceRange } = useContext(BooksSearchContext)
    const checkPriceChange = (currentValue, partOfPrice) => {
        if (partOfPrice === 'minPrice' &&
            +currentValue > selectedPriceRange.maxPrice) {
            currentValue = selectedPriceRange.maxPrice
            setSelectedPriceRange({
                ...selectedPriceRange,
                [partOfPrice]: +currentValue
            })
        }
        if (partOfPrice === 'maxPrice' &&
            +currentValue < selectedPriceRange.minPrice) {
            currentValue = selectedPriceRange.minPrice
            setSelectedPriceRange({
                ...selectedPriceRange,
                [partOfPrice]: +currentValue
            })
        }
    }
    const handlePriceChange = (currentValue, partOfPrice) => {
        setSelectedPriceRange({
            ...selectedPriceRange,
            [partOfPrice]: +currentValue
        })
    }
    return (
        <div>
            <StyledLabel htmlFor="priceRangeInput">
                <p>Price:</p>
                <p>from</p>
                <input type='text' pattern={[0 - 9]}
                    value={selectedPriceRange.minPrice}
                    onChange={event => handlePriceChange(event.currentTarget.value, 'minPrice')}
                    onBlur={event => checkPriceChange(event.currentTarget.value, 'minPrice')}
                />
                <p>to</p>
                <input type='text'
                    pattern={[0 - 9]}
                    value={selectedPriceRange.maxPrice}
                    onChange={event => handlePriceChange(event.currentTarget.value, 'maxPrice')}
                    onBlur={event => checkPriceChange(event.currentTarget.value, 'maxPrice')}
                />
            </StyledLabel>
        </div>
    )
}