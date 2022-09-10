import styled from "styled-components";

export const Footer = styled.div`
    background-color: #FFCE87;
    padding: 0px 10px 5px 10px;
`

export const FooterRows = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const FooterColumns = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

export const Subject = styled.p`
    font-size: 17px;
    font-weight: 700;
    margin: 5px;
`

export const SubjectCopyright = styled.p`
    font-size: 14px;
    font-weight: 700;
    margin: 5px;
`

export const SubSubject = styled.a`
    font-weight: 400;
    border-radius: 3px;
    margin: 5px;
    text-decoration: none;
    color: black;
`

export const FooterLine = styled.p`
    border-bottom: 1px solid black;
`