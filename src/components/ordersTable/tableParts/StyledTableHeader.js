import styled from "styled-components";
import { TableHeader } from "./TableHeader";

export const StyledTableHeader = styled(TableHeader)`
display: grid;
    grid-template-columns: repeat(${(props) => props.numberOfColumns}, 1fr)
`