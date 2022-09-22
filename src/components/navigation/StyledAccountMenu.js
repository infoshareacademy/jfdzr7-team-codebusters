import styled from "styled-components";
import { AccountMenu } from "./AccountMenu"
import { StyledMenuPanel } from "./AccountMenuComponents/StyledMenuPanel";

export const StyledAccountMenu = styled(AccountMenu)`
    a{
        color: black;
        text-decoration: none;
    }
    &:hover ${StyledMenuPanel}{
        display: block;
    }
`