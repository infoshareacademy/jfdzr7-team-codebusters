import { useContext } from "react"

import { StyledSearchBar } from "./StyledSearchBar"
import { TextInput } from "./TextInput"
import { deboubceQuery } from "./utils/debouceQuery"

import magnifying from "../../../img/icons/magnifying.png"

export const SearchBar = ({ context }) => {
    const { searchConditions, setSearchConditions } = useContext(context)
    const performQuery = deboubceQuery(searchTerm => {
        setSearchConditions({
            ...searchConditions,
            searchText: searchTerm
        })
    }, 500)
    return (
        <StyledSearchBar>
            <TextInput
                name='searchText'
                labelText='Search: '
                callback={performQuery}
            />
            <img src={magnifying} height='20px' alt='' />
        </StyledSearchBar>
    )
}