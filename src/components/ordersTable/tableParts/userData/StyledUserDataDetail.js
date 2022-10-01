import styled from "styled-components";
import { UserDataDetail } from "./UserDataDetail";

export const StyledUserDataDetail = styled(UserDataDetail)`
    display: flex;
    justify-content: space-between;
    div {
        width: 32%;
        display: flex;
        align-items: center;
        gap: 10px;
    }
`