import styled from "styled-components";
import { DetailHeader } from "./DetailHeader";

export const StyledDetailHeader = styled(DetailHeader)`
    display: grid;
    grid-template-columns: 40px repeat(${(props) => props.numberOfColumns - 1}, 1fr);
    h4{
        margin: 0;
        padding: 10px 5px;
        height: 100%;
        border-right: solid 1px black;
        
    }
    & h4:last-child{
        border-right: none;
    }
`