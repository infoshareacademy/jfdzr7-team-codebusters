import { StyledPositionsDetail } from "./positionDetail/StyledPositionsDetail"
import { StyledUserDataDetail } from "./userData/StyledUserDataDetail"

export const OrderDetail = ({ className, positions, userID }) => {
    return (
        <div className={className}>
            <StyledUserDataDetail userID={userID} />
            <StyledPositionsDetail positions={positions} />
        </div>
    )
}