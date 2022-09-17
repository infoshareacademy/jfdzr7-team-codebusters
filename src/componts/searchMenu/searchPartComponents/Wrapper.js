import styled from "styled-components";
import { SearchBar } from "./SearchBar";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 20px 20px 20px;
    gap: 30px;
    input[pattern] {
        max-width: 40px;
        text-align: center;
    }
`
const StyledLabel = styled.label`
    padding: 5px 20px;
    font-size: 16px;
    font-weight: bold;
    background-color: #FFF2E0;
    border: 2px solid black;
    display: flex;
    align-items: center;
    gap: 10px;
    p{
        margin: 0;
        font-size: 18px;
    }
    input, select {
        font-size: 18px;
        background-color: transparent;
        border: none;
    }
`

const StyledSearchBar = styled(SearchBar)`
flex-grow: 1;
background-color: red;
    input{
        flex-grow: 1;
    }
`

export { Wrapper, StyledLabel, StyledSearchBar }