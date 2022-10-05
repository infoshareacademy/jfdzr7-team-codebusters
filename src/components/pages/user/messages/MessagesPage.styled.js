import styled from "styled-components";

export const StyledMessagesListElement = styled.section`
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 40px;
    margin: 50px;
`

export const StyledMessageContainer = styled.fieldset`
    background-color: ${props => props.isRead ? 'red' : 'peru'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    font-size: 18px;
    & legend {
        background-color: ${props => props.isRead ? 'red' : 'peru'};
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