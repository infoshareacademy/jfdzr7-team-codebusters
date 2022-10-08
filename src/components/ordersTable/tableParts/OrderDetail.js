import { StyledOrderDetail } from "../../pages/admin/OrdersPage.styled"
import { PositionsDetail } from "./positionDetail/PositionsDetail"
import { UserDataDetail } from "./userData/UserDataDetail"

export const OrderDetail = ({ positions, userData }) => {
    return (
        <StyledOrderDetail>
            <UserDataDetail userData={userData} />
            <PositionsDetail positions={positions} />
        </StyledOrderDetail>
    )
}