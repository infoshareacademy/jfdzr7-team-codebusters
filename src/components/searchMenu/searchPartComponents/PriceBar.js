import { useContext } from 'react'
import { BooksSearchContext } from '../../../context/BooksSearchContext'
import { NumberInput } from './NumberInput'
import { StyledSearchContainer } from './StyledSearchContainer'

export const PriceBar = () => {
    const { searchConditions } = useContext(BooksSearchContext)
    const selectedPriceRange = searchConditions.selectedPriceRange
    return (
        <div>
            <StyledSearchContainer>
                <p>Price:</p>
                <NumberInput
                    name='MinPriceInput'
                    labelText='from '
                    value={selectedPriceRange.minPrice}
                    partOfPrice='minPrice'
                />
                <NumberInput
                    name='MaxPriceInput'
                    labelText='to '
                    value={selectedPriceRange.maxPrice}
                    partOfPrice='maxPrice'
                />
            </StyledSearchContainer>
        </div>
    )
}