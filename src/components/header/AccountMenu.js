import { AccountMenuPanel } from "./AccountMenuComponents/AccountMenuPanel"
import { StyledAccountMenu } from "./Header.styled"

export const AccountMenu = () => {
    return (
        <StyledAccountMenu>
            <p>Account</p>
            <AccountMenuPanel />
        </StyledAccountMenu>
    )
}