import styled from "styled-components";

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
    .submenu{
        position: absolute;
        display: none;
        padding: 10px 20px;
        font-size: 20px;
        background-color: #F9D9AA;
        right: 0;
        gap: 10px;
    }

    .submenu div button{
        margin-left: 10px;
    }

    .AccountMenu:hover .submenu{
        display: flex;
        flex-flow: column;
    }
`