import styled from "styled-components";
import { PositionRecord } from "./PositionRecord";

export const StyledPositionRecord = styled(PositionRecord)`
    display: grid;
    grid-template-columns: 40px repeat(4, 1fr);
    border-top: solid 1px black;
    align-items: stretch;
    p{
        margin: 0;
        display: flex;
        align-items: center;
        padding: 10px 5px;
        border-right: solid 1px black;

    }
    & p:last-child{
        border-right: none;
    }
`