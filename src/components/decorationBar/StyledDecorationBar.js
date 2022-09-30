import styled from "styled-components";
import { DecorationBar } from "./DecorationBar";

export const StyledDecorationBar = styled(DecorationBar)`
    width: 100%;
    padding-bottom: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        height: 50px;
    }
    ::before {
    content: '';
    display: inline-block;
    height: 3px;
    background-color: black;
    width: 100%;
    z-index: -1;
    position: absolute;
}
`