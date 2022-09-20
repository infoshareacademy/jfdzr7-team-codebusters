import { useContext } from 'react'
import { BooksSearchContext } from '../../../context/BooksSearchContext'
import { StyledSearchContainer } from './StyledSearchContainer'

export const SortBar = () => {
    const { searchConditions, setSearchConditions } = useContext(BooksSearchContext)
    const selectedSortOption = searchConditions.selectedSortOption
    const sortOptions = ['author', 'title', 'price']
    const handleOptionChange = (event) => {
        setSearchConditions({
            ...searchConditions,
            selectedSortOption: event.currentTarget.value
        })
    }
    return (
        <div>
            <StyledSearchContainer htmlFor='sortOptionsList'>
                <p>Order by: </p>
                <select
                    name={'sortOptionsList'}
                    value={selectedSortOption}
                    onChange={event => handleOptionChange(event)}>
                    {sortOptions.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
            </StyledSearchContainer>
        </div>
    )
}