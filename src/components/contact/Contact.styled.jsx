import styled from "styled-components";
import background from "./img/background.jpg"

export const StyledContainer = styled.div`
position: absolute;
left: 62%;
top: 10%;
font-family: Inter;
font-size: 20px;
font-weight: bold;
`;

export const StyledInput = styled.input`
    width: 300px;
    margin-bottom: 10px;
    margin-top: 2px;
    padding: 5px 20px;
    font-size: 16px;
    font-weight: bold;
    background-color: #FFF2E0;
    border: 2px solid black;

`;

export const StyledTextarea = styled.textarea`
    height: 130px;
    width: 300px;
    margin-bottom: 10px;
    margin-top: 2px;
    padding: 5px 20px;
    font-size: 16px;
    font-weight: bold;
    background-color: #FFF2E0;
    border: 2px solid black;
`;

export const StyledButton = styled.input`
    margin-top: 10px;
    width: 100px;
    padding: 5px 20px;
    font-size: 16px;
    font-weight: bold;
    background-color: #FFF2E0;
    border: 2px solid black;

`;

export const StyledH2 = styled.h2`
    text-align: left;
    font-family: Inter;
    font-size: 48px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 0em;
    color: #FFF2E0
`;


export const StyledAddress = styled.div`
    margin-top:105px;
    margin-left:20px;
    font-size: 14px;
`;

export const ContactBackground = styled.div`
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 95vh;    
        `;