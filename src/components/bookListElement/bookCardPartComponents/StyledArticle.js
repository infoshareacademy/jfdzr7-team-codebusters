import styled from "styled-components";

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