import { useContext } from "react"

import { OrderSearchContext } from "../../../providers/OrdersSearchProvider"
import { dateToString } from "../../../utils/dateToString"

export const DateInput = ({ name, date }) => {
    const { setSearchConditions } = useContext(OrderSearchContext)
    const handleChange = (event) => {
        setSearchConditions(prevState => ({
            ...prevState,
            orderDate: {
                ...prevState.orderDate,
                [name]: new Date(event.target.value)
            }
        }))
    }
    const today = new Date()
    return (
        <label htmlFor={name}>
            <input
                name={name}
                type="date"
                max={dateToString(today)}
                value={dateToString(date)}
                onChange={(event) => handleChange(event)} />
        </label>
    )
}