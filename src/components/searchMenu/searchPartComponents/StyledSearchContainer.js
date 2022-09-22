import styled from "styled-components";

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