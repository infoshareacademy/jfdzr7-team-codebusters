import styled from "styled-components";

export const StyledCategoryBar = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
`

export const StyledCategoryRadioButton = styled.input.attrs({ type: 'radio' })`
  opacity: 0;
  position: fixed;
  & + label {
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #FFF2E0;
    border: 2px solid black;
    cursor: pointer;
  }
  &:checked + label {
    background-color: rgba(34, 9, 1, 1);
    color: #FF902B;
  }
`

export const StyledSearchContainer = styled.div`
    padding: 5px 20px;
    font-weight: bold;
    background-color: #FFF2E0;
    border: 2px solid black;
    display: flex;
    align-items: center;
    gap: 10px;
    p, label{
        margin: 0;
        font-size: 18px;
    }
    input, select {
        font-size: 18px;
        background-color: transparent;
        border: none;
    }
    input[pattern] {
        max-width: 40px;
        text-align: center;
    }
`

export const StyledSearchBar = styled(StyledSearchContainer)`
    flex-grow: 1;
    label{
        display: flex;
        flex-grow: 1;
        align-items: center;
    }
    label input{
        flex-grow: 1;
    }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 20px 20px 20px;
    gap: 30px;
`