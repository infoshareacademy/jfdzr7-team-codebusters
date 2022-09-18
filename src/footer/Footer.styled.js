// @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap');

import styled from "styled-components";

export const StyledFooter = styled.div`
    font-family: "Inter", sans-serif;
    background-color: ${(props) => props.bg};
    padding: 0px 10px 5px 10px;
    margin: 0 auto;
    `

export const FooterRows = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
        @media (max-width: 600px) {
            text-align: center;
            flex-direction: column-reverse
        }
        
`

export const FooterColumns = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    @media (max-width: 600px) {
        border-bottom: 1px solid gray;
    }
`

export const Subject = styled.p`
    font-size: 17px;
    font-weight: 700;
    margin: 5px;
`


export const SubSubject = styled.a`
    font-weight: 400;
    margin: 5px;
    text-decoration: none;
    color: black;
    
&:hover{
    color: red;
}
`

export const FooterLine = styled.p`
    border-bottom: 1px solid black;
`

export const SubjectCopyright = styled.p`
    font-size: 14px;
    font-weight: 700;
    margin: 5px;
`