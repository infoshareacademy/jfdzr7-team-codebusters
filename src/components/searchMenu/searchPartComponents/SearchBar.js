import magnifying from '../../../img/icons/magnifying.png'
import { useContext } from "react"
import { BooksSearchContext } from "../../../providers/BooksSearchProvider"
import { StyledSearchBar } from "./StyledSearchBar"
import { TextInput } from "./TextInput"
import { deboubceQuery } from "./utils/debouceQuery"

export const SearchBar = ({ className }) => {
    const { searchConditions, setSearchConditions } = useContext(BooksSearchContext)
    const performQuery = deboubceQuery(searchTerm => {
        setSearchConditions({
            ...searchConditions,
            searchText: searchTerm
        })
    }, 500)
    return (
        <StyledSearchBar>
            <TextInput
                name='searchAuthorOrTitle'
                labelText='Search: '
                callback={performQuery}
            />
            <img src={magnifying} height='20px' alt='' />
        </StyledSearchBar>
    )
}