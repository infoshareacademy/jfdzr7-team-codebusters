import { useContext } from 'react'
import { BooksSearchContext } from '../../../context/BooksSearchContext'
import { SelectInput } from './SelectInput'
import { StyledSearchContainer } from './StyledSearchContainer'
import { sortOptions } from './utils/sortOptions'

export const SortBar = () => {
    const { searchConditions, setSearchConditions } = useContext(BooksSearchContext)
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
            {/* <label htmlFor='sortOptionsList'>Order by: </label>
            <select
                name={'sortOptionsList'}
                value={selectedSortOption}
                onChange={event => handleOptionChange(event)}>
                {sortOptions.map(option => <option key={option} value={option}>{option}</option>)}
            </select> */}
        </StyledSearchContainer>
    )
}