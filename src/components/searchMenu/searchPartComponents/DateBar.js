import { useContext } from "react"

import { OrderSearchContext } from "../../../providers/OrdersSearchProvider"
import { StyledSearchContainer } from "./searchPartComponents.styled"
import { DateInput } from "./DateInput"

export const DateBar = () => {
    const { searchConditions } = useContext(OrderSearchContext)
    return (
        <StyledSearchContainer>
            <p>Search Date: </p>
            <DateInput name="dateStart" date={searchConditions.orderDate.dateStart} />-
            <DateInput name="dateEnd" date={searchConditions.orderDate.dateEnd} />
        </StyledSearchContainer>
    )
}