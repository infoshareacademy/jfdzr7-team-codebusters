import { StyledSearchContainer } from "./StyledSearchContainer"
import magnifying from '../../../img/icons/magnifying.png'
import { useContext } from "react"
import { BooksSearchContext } from "../../../context/BooksSearchContext"

export const SearchBar = ({ className }) => {
    const { searchConditions, setSearchConditions } = useContext(BooksSearchContext)
    const deboubceQuery = (query, wait) => {
        let timeout
        return searchTerm => {
            const delay = () => {
                clearTimeout(timeout)
                query(searchTerm)
            }
            clearTimeout(timeout)
            timeout = setTimeout(delay, wait)
        }
    }
    const performQuery = deboubceQuery(searchTerm => {
        setSearchConditions({
            ...searchConditions,
            searchText: searchTerm
        })
    }, 500)
    return (
        <div className={className}>
            <StyledSearchContainer htmlFor='serchBar'>
                <p>Search: </p>
                <input
                    type='text'
                    placeholder='e.g. Hello World!'
                    onChange={event => performQuery(event.currentTarget.value)}
                />
                <img src={magnifying} height='20px' alt='' />
            </StyledSearchContainer>
        </div>
    )
}