import styled from "styled-components";
import { DetailHeader } from "./DetailHeader";

export const StyledDetailHeader = styled(DetailHeader)`
    display: grid;
    grid-template-columns: repeat(${(props) => props.numberOfColumns}, 1fr)
`