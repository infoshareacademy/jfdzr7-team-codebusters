import styled from "styled-components"
import { StyledSearchContainer } from "./StyledSearchContainer"

export const StyledSearchBar = styled(StyledSearchContainer)`
    flex-grow: 1;
    label{
        display: flex;
        flex-grow: 1;
    }
    label input{
        flex-grow: 1;
    }
`