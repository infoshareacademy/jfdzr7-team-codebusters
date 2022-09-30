import { StyledPositionsDetail } from "./StyledPositionsDetail"
import { UserDataDetail } from "./UserDataDetail"

export const OrderDetail = ({ className, positions, userID }) => {
    return (
        <div className={className}>
            <StyledPositionsDetail positions={positions} />
            <UserDataDetail userID={userID} />
        </div>
    )
}