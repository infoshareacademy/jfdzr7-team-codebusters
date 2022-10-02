import { useContext } from "react"

import { OrderSearchContext } from "../../../providers/OrdersSearchProvider"
import { dateToString } from "../../../utils/dateToString"

export const DateInput = ({ className, name, date, labelText = "" }) => {
    const { searchConditions, setSearchConditions } = useContext(OrderSearchContext)
    const handleChange = (event) => {
        setSearchConditions({
            ...searchConditions,
            orderDate: {
                ...searchConditions.orderDate,
                [name]: new Date(event.target.value)
            }
        })
    }
    const today = new Date()
    return (
        <label htmlFor={name}>{labelText}
            <input className={className}
                name={name}
                type="date"
                max={dateToString(today)}
                value={dateToString(date)}
                onChange={(event) => handleChange(event)} />
        </label>
    )
}