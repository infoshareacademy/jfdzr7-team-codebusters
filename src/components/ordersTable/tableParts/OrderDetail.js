import { StyledOrderDetail } from "../../pages/admin/OrdersPage.styled"
import { PositionsDetail } from "./positionDetail/PositionsDetail"
import { UserDataDetail } from "./userData/UserDataDetail"

export const OrderDetail = ({ positions, userID }) => {
    return (
        <StyledOrderDetail>
            <UserDataDetail userID={userID} />
            <PositionsDetail positions={positions} />
        </StyledOrderDetail>
    )
}