import { useState } from "react";
import { createContext, useContext } from "react";

const CartContext = createContext({})

export const useShoppingCart = () => {
    return useContext(CartContext)
}

export const ShoppingCartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    const cartCount = cartItems.reduce((count, item ) => item.count + count, 0
   )

   const openCart = () => setIsOpen(true)
   const closeCart = () => setIsOpen(false)

    const getItemCount = (id) => {
        return cartItems.find(item => item.id === id)?.count || 0
    }

    const increaseCartCount = (id) => {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null){
            return  [ ...currItems, { id, count: 1}]
        }else {
            return currItems.map(item => {
                if (item.id === id){
                    return { ...item, count: item.count + 1}
                } else {
                    return item
                }
            })
        }
        })
    }

    const decreaseCartCount = (id) => {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.count === 1){
            return currItems.filter(item => item.id !== id)
        }else {
            return currItems.map(item => {
                if (item.id === id){
                    return { ...item, count: item.count - 1}
                } else {
                    return item
                }
            })
        }
        })
    }

    const removeFromCart = (id) => {    
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }
    return (
        <CartContext.Provider value={{getItemCount, increaseCartCount, decreaseCartCount, removeFromCart, openCart, closeCart, cartItems, cartCount}}>
            {children}
        </CartContext.Provider>
    )
}