import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    color: #220901;
    font-weight: bold;
    font-size: 28px;
    text-decoration: none;
    padding: 20px;
    &.active {
        color: #FF902B;
    }
`