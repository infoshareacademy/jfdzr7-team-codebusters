import styled from "styled-components";
import { TableRecord } from "./TableRecord";

export const StyledTableRecord = styled(TableRecord)`
    display: grid;
    border: 2px solid black;
    grid-template-columns: repeat(${(props) => props.numberOfColumns}, 1fr)
`