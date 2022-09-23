import { StyledDateInput } from "./StyledDateInput"
import { useContext } from "react"
import { OrderSearchContext } from "../../../providers/OrdersSearchProvider"
export const DateBar = ({ className }) => {
    const { searchConditions } = useContext(OrderSearchContext)
    return (
        <div className={className}>
            <p>Search Date: </p>
            <StyledDateInput name="dateStart" date={searchConditions.orderDate.dateStart} />-
            <StyledDateInput name="dateEnd" date={searchConditions.orderDate.dateEnd} />
        </div>
    )
}