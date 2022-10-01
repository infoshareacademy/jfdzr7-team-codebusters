import styled from "styled-components";
import { TableRecord } from "./TableRecord";

export const StyledTableRecord = styled(TableRecord)`
    display: grid;
    font-size: 18px;
    border: 2px solid black;
    grid-template-columns: 40px 130px repeat(${(props) => props.numberOfColumns - 2}, 1fr);
    padding: 5px 10px;
    background-color: ${(props) => props.index % 2 ? '#FFF2E0' : '#b5ada1'};
`