import styled from 'styled-components';
import './home.css'
import { Link } from 'react-router-dom'

export const MainWindow = styled.div`
    margin: 5vw;
    text-align: center;
    font-family: 'Inter'; sans-serif;
    font-size: 25px;
    span {
        color: #FF902B;
    }
    `

export const StyledEnjoy = styled.h2`
    position: absolute;
    margin: 14vw 6vw 6vw 8vw;
    max-width: 60vw;
    color: white;
    font-size: 5vw;
    line-height: 7vw;
    text-align: left;
    `

export const StyledDiv = styled.div`
    position: absolute;
    `
export const StyledPicture = styled.img`
    width: 85vw;
    `

export const StyledLink = styled(Link)`
    display:inline-block;
    color: ${(props) => props.color || '#FF902B'};
    background-color:${(props) => props.bg || '#220901'};
    border: 1px solid ${(props) => props.brd || '#FF902B'};
    box-shadow: 8px 5px 19px #000009;
    font-size: 3.2vw;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    width: 15vw;
    max-width: 30vh;
    height: 5vw;
    margin: 40vw 0 0 8vw;
    padding: 1vh 1vh 0vh 1vh;
    cursor: pointer;
&:hover {
    opacity: 0.8;
}
`