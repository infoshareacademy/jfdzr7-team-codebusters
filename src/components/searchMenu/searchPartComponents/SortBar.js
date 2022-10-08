import { useContext } from "react"

import { SelectInput } from "./SelectInput"
import { StyledSearchContainer } from "./searchPartComponents.styled"

export const SortBar = ({ sortOptions, context }) => {
    const { searchConditions, setSearchConditions } = useContext(context)
    const selectedSortOption = searchConditions.selectedSortOption
    const handleOptionChange = (event) => {
        setSearchConditions({
            ...searchConditions,
            selectedSortOption: event.currentTarget.value
        })
    }
    return (
        <StyledSearchContainer>
            <SelectInput
                labelText={'Order by: '}
                name={'sortOptionsList'}
                value={selectedSortOption}
                callback={handleOptionChange}
                sortOptions={sortOptions}
            />
        </StyledSearchContainer>
    )
}