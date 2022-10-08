import styled from "styled-components";

export const StyledOrdersTable = styled.div`
    display: grid;
    justify-self: center;
    grid-template-columns: repeat(1, auto);
    width: 900px;
`

export const StyledTableHeader = styled.div`
    display: grid;
    font-size: 18px;
    grid-template-columns: 40px 130px repeat(${(props) => props.numberOfColumns - 2}, 1fr);
    padding: 10px;
    color: #FF902B;
    background-color: rgba(34,9,1,1);
    h3{
        margin: 10px 0;
    }
    `

export const StyledTableRecord = styled.div`
    display: grid;
    font-size: 18px;
    border: 2px solid black;
    grid-template-columns: 40px 130px repeat(${(props) => props.numberOfColumns - 2}, 1fr);
    padding: 5px 10px;
    &:nth-child(even){
        background-color: #FFF2E0;
    }
    &:nth-child(odd){
        background-color: #b5ada1;
    }
`