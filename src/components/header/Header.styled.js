import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { StyledAccountMenuPanel } from "./accountMenuComponents/AccountMenuPanel.styled.js";

export const StyledHeader = styled.header`
    display: flex;
    background-color: #F9D9AA;
    font-size: 30px;
    align-items: center;
    padding: 0 20px;
    font-weight: bold;
    img{
        height: 40px;
        }
    .logoContainer{
        display: flex;
        align-items: center;
    }
    .shoppingCartIcon{
        padding-left: 30px;
    }
`

export const StyledNavigation = styled.nav`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

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

export const StyledAccountMenu = styled.div`
    a{
        color: black;
        text-decoration: none;
    }
    &:hover ${StyledAccountMenuPanel}{
        display: block;
    }
`