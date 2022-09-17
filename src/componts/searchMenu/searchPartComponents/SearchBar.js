import { StyledLabel } from "./Wrapper"
import magnifying from '../../../img/icons/magnifying.png'
import { useContext } from "react"
import { BooksSearchContext } from "../../../context/BooksSearchContext"

export const SearchBar = ({ className }) => {
    const { setSearchText } = useContext(BooksSearchContext)
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
        setSearchText(searchTerm)
    }, 1000)
    return (
        <div className={className}>
            <StyledLabel htmlFor='serchBar'>
                <p>Search: </p>
                <input
                    type='text'
                    placeholder='e.g. Hello World!'
                    onChange={event => performQuery(event.currentTarget.value)}
                />
                <img src={magnifying} height='20px' alt='' />
            </StyledLabel>
        </div>
    )
}