import styled from "styled-components";
import { InfoPanel } from "./InfoPanel";

export const StyledInfoPanel = styled(InfoPanel)`
    background-color: rgba(34, 9, 1, 0.7);
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h3, p{
        margin: 0;
    }
    .price {
        font-size: 1.17em;
        font-weight: bold;
    }
`