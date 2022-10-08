import { useContext } from "react"

import { QuantityInput } from "./QuantityInput"
import { StyledSearchContainer } from "./searchPartComponents.styled"

export const QuantityBar = ({ context }) => {
    const { searchConditions } = useContext(context)
    const selectedQuantityRange = searchConditions.selectedQuantityRange
    return (
        <div>
            <StyledSearchContainer>
                <p>Quantity:</p>
                <QuantityInput
                    name='MinQuantityInput'
                    labelText='from '
                    value={selectedQuantityRange.minQuantity}
                    partOfQuantity='minQuantity'
                    context={context}
                />
                <QuantityInput
                    name='MaxQuantityInput'
                    labelText='to '
                    value={selectedQuantityRange.maxQuantity}
                    partOfQuantity='maxQuantity'
                    context={context}
                />
            </StyledSearchContainer>
        </div>
    )
}