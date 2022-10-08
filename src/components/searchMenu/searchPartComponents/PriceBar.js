import { useContext } from "react"

import { PriceInput } from "./PriceInput"
import { StyledSearchContainer } from "./searchPartComponents.styled"

export const PriceBar = ({ context }) => {
    const { searchConditions } = useContext(context)
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
                    context={context}
                />
                <PriceInput
                    name='MaxPriceInput'
                    labelText='to '
                    value={selectedPriceRange.maxPrice}
                    partOfPrice='maxPrice'
                    context={context}
                />
            </StyledSearchContainer>
        </div>
    )
}