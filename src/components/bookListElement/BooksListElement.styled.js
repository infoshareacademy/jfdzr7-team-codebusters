import styled from "styled-components";

export const StyledBooksListElement = styled.section`
    display: flex;
    padding: 20px;
    gap: 40px;
    flex-wrap: wrap;
    justify-content:flex-start;
`

export const StyledArticle = styled.article`
    width: 200px;
    border: 1px solid rgba(34, 9, 1, 0.7);
    color: #FF902B;
    font-size: 16px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    opacity: ${props => props.isDisable ? 0.7 : 1};
`