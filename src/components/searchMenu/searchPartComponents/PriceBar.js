import { useContext } from "react"

import { BooksSearchContext } from "../../../providers/BooksSearchProvider"
import { PriceInput } from "./PriceInput"
import { StyledSearchContainer } from "./StyledSearchContainer"

export const PriceBar = () => {
    const { searchConditions } = useContext(BooksSearchContext)
    const selectedPriceRange = searchConditions.selectedPriceRange
    return (
        <div>
            <StyledSearchContainer>
                <p>Price:</p>
                <PriceInput
                    name='MinPriceInput'
                    labelText='from '
                    value={selectedPriceRange.minPrice}
                    partOfPrice='minPrice'
                />
                <PriceInput
                    name='MaxPriceInput'
                    labelText='to '
                    value={selectedPriceRange.maxPrice}
                    partOfPrice='maxPrice'
                />
            </StyledSearchContainer>
        </div>
    )
}