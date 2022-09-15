import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const StyledInput = styled.input`
    height: ${props => props.isMessage ? '130px' : ''};
    width: 300px;
    margin-bottom: 10px;
    margin-top: 2px;
`;

export const StyledTextarea = styled.textarea`
    height: 130px;
    width: 300px;
    margin-bottom: 10px;
    margin-top: 2px;
`;

export const StyledH2 = styled.h2`
    
    text-align: center;
`;

export const StyledButton = styled.input`
margin-top: 10px;
width: 100px;
`;