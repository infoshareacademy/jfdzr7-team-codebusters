import { StyledMenuPanel } from "./AccountMenuComponents/StyledMenuPanel"

export const AccountMenu = ({ className }) => {
    return (
        <div className={className}>
            <p>Account</p>
            <StyledMenuPanel />
        </div>
    )
}