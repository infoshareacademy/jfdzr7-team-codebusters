import { useContext, createContext, useEffect, useState } from "react"

import { OrderListContext } from "./OrderListProvider"
import { getOrderList } from "../utils/getOrderList"
import { AuthContext } from "./AuthProvider"

export const OrderSearchContext = createContext({})

export const OrderSearchProvider = ({ children }) => {
    const { isUser, user } = useContext(AuthContext)
    const monthAgoDate = new Date()
    monthAgoDate.setMonth(monthAgoDate.getMonth() - 1)
    const [searchConditions, setSearchConditions] = useState({
        checkedOption: 'all',
        searchText: isUser ? user.email : '',
        orderDate: {
            dateStart: monthAgoDate,
            dateEnd: new Date()
        }
    })
    const { setOrderList } = useContext(OrderListContext)
    useEffect(() => {
        getOrderList({ setOrderList, ...searchConditions })
    }, [setOrderList, searchConditions])
    return (
        <OrderSearchContext.Provider value={{ searchConditions, setSearchConditions }}>
            {children}
        </OrderSearchContext.Provider>
    )
}