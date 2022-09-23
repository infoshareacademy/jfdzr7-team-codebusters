import { useContext } from "react"
import { OrderSearchContext } from "../../../providers/OrdersSearchProvider"

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
    const dateToString = (date) => {
        const year = date.getFullYear()
        const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        const dateString = `${year}-${month}-${day}`
        return dateString
    }
    const today = new Date()
    return (
        <label htmlFor={name}>
            {labelText} <input name={name} type="date" max={dateToString(today)} value={dateToString(date)} onChange={(event) => handleChange(event)} />
        </label>
    )
}