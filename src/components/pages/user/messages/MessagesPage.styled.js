import styled from "styled-components";

export const StyledMessagesListElement = styled.section`
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 40px;
    margin: 50px;
`

export const StyledMessageContainer = styled.fieldset`
    background-color: ${props => props.isRead ? '#FFF2E0' : '#b5ada1'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    font-size: 18px;
    & legend {
        background-color: ${props => props.isRead ? '#FFF2E0' : '#b5ada1'};
        padding: 5px 10px;
        border: 1px solid black;
    }
`

export const StyledIconPanel = styled.div`
    display: flex;
    flex-wrap: nowrap;
    img {
        height: 30px;
        padding: 10px;
        transition: transform 1s ease;
    }
    img:hover{
        transform: scale(1.5);
    }
`

export const StyledMessagesMenagmentPanel = styled.div`
    display: flex;
    justify-content: space-between;
`

export const StyledButton = styled.button`
padding: 10px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #FFF2E0;
    border: 2px solid black;
    cursor: pointer;
`