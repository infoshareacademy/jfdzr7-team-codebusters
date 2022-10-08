import styled from "styled-components";

export const StyledCover = styled.div`
    flex-grow: 1;
    display: flex;  
    img{
        width: 200px;
    }
`

export const StyledCartPanel = styled.form`
    padding: 20px 0;
    display: block;
    display: flex;
    justify-content: space-around;
    align-self: stretch;
    background-color: #FF902B;
`

export const StyledCountInput = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 2px solid black;
    width: 40px;
    text-align: center;
    cursor: pointer;
`

export const StyledInfoPanel = styled.div`
    background-color: rgba(34, 9, 1, 0.7);
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h3, p{
        margin: 0;
    }
    .price {
        font-size: 1.17em;
        font-weight: bold;
    }
`

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

export const Wrapper = styled.div`
    display: flex;
`