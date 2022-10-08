import styled from "styled-components";
import OpenBook from './photos/open-book-800px.jpg'
// 400px x 200px
// 600px x 300px
// 800px x 400px

export const MainWindow = styled.div`
    background-image: url(${OpenBook});
    min-width: 800px;    
    max-width: 100%;
    min-height: 400px;
    background-size: cover;
    padding: 60px;
    margin: auto;
    `

export const FlexColumns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const TextAndButtons = styled.div`
    width: 470px;
    h1 {
        color: white;
        font-size: 37px;
        line-height: 70px;
    }
    span {
        color: #FF902B;
    }
    `

export const StyledButton = styled.button`
    font-size: 35px;
    width:200px;
    height:60px;
    cursor:pointer;
    background-color:${(props) => props.bg || '#220901'};
    color: ${(props) => props.color || '#FF902B'};
    border: 1px solid ${(props) => props.brd || '#FF902B'};
    box-shadow: 8px 5px 19px #000009;
    &:hover {
        opacity: 0.8;
    }
`

export const StyledBestSellers = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 20px 20px 60px 20px
`

export const StyledH2 = styled.h2`
    margin: 30px auto;
    text-align: center;
    font-size: 47px;
    span{ color: #FF902B; }
`