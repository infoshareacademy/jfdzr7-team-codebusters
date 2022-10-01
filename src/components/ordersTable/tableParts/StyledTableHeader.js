import styled from "styled-components";
import { TableHeader } from "./TableHeader";

export const StyledTableHeader = styled(TableHeader)`
    display: grid;
    font-size: 18px;
    grid-template-columns: 40px 130px repeat(${(props) => props.numberOfColumns - 2}, 1fr);
    padding: 10px;
    background-color: rgba(34,9,1,1);
    color: #FF902B;
    h3{
        margin: 10px 0;
    }
`