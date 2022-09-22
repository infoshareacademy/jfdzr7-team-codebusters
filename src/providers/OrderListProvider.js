import { getByTitle } from "@testing-library/react";
import { createContext, useState } from "react";

export const OrderListContext = createContext([])

export const OrderListProvider = ({ children }) => {
    const [orderList, setOrdersList] = useState([
        {
            orderDate: new Date('December 17, 1995 03:24:00'),
            orderValue: 180.26,
            positions: [
                {
                    bookID: {
                        author: 'Jan Nowak',
                        title: 'Hello World'
                    },
                    quantity: 1
                },
                {
                    bookID: {
                        author: 'Anna Mirocha',
                        title: 'Code, code, code....'
                    },
                    quantity: 1
                }
            ],
            status: 'sent',
            userID: 'Anna Kowalska'
        },
        {
            orderDate: new Date('April 17, 1998 03:24:00'),
            orderValue: 320.26,
            positions: [
                {
                    bookID: {
                        author: 'Jan Nowak',
                        title: 'Hello World'
                    },
                    quantity: 2
                },
                {
                    bookID: {
                        author: 'Anna Mirocha',
                        title: 'Code, code, code....'
                    },
                    quantity: 1
                }
            ],
            status: 'sent',
            userID: 'Anna Kowalska'
        }
    ])
    return (
        <OrderListContext.Provider value={{
            orderList, setOrdersList
        }}>
            {children}
        </OrderListContext.Provider>
    )
}