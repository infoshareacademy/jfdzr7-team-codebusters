import { useContext } from 'react'
import { BooksSearchContext } from '../../../context/BooksSearchContext'
import { StyledSearchContainer } from './StyledSearchContainer'

export const PriceBar = () => {
    const { searchConditions, setSearchConditions } = useContext(BooksSearchContext)
    const selectedPriceRange = searchConditions.selectedPriceRange

    const checkPriceChange = (currentValue, partOfPrice) => {
        if (partOfPrice === 'minPrice' &&
            +currentValue > selectedPriceRange.maxPrice) {
            currentValue = selectedPriceRange.maxPrice
            setSearchConditions({
                ...searchConditions,
                selectedPriceRange: {
                    ...selectedPriceRange,
                    [partOfPrice]: +currentValue
                }
            })
        }
        if (partOfPrice === 'maxPrice' &&
            +currentValue < selectedPriceRange.minPrice) {
            currentValue = selectedPriceRange.minPrice
            setSearchConditions({
                ...searchConditions,
                selectedPriceRange: {
                    ...selectedPriceRange,
                    [partOfPrice]: +currentValue
                }
            })
        }
    }
    const handlePriceChange = (currentValue, partOfPrice) => {
        setSearchConditions({
            ...searchConditions,
            selectedPriceRange: {
                ...selectedPriceRange,
                [partOfPrice]: +currentValue
            }
        })
    }
    return (
        <div>
            <StyledSearchContainer htmlFor="priceRangeInput">
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
            </StyledSearchContainer>
        </div>
    )
}