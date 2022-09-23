import { useContext, createContext, useEffect, useState } from "react"
import { OrderListContext } from "./OrderListProvider"
import { getOrderList } from "../utils/getOrderList"

export const OrderSearchContext = createContext({})

export const OrderSearchProvider = ({ children }) => {
    const [searchConditions, setSearchConditions] = useState({
        status: 'all'
    })
    const { setOrderList } = useContext(OrderListContext)
    useEffect(() => {
        getOrderList(setOrderList)
    }, [setOrderList])
    return (
        <OrderSearchContext.Provider value={{ searchConditions, setSearchConditions }}>
            {children}
        </OrderSearchContext.Provider>
    )
}