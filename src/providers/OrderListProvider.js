import { createContext, useState } from "react";

export const OrderListContext = createContext([])

export const OrderListProvider = ({ children }) => {
    const [orderList, setOrderList] = useState([])
    return (
        <OrderListContext.Provider value={{
            orderList, setOrderList
        }}>
            {children}
        </OrderListContext.Provider>
    )
}