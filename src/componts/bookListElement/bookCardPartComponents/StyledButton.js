import styled from "styled-components";

export const StyledButton = styled.button`
    height: 20px;
    width: 20px;
    margin: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        scale: 1.2;
    }
    img{
        height: 20px;
    }    
`