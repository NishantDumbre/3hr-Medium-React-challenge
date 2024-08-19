import React, { useReducer } from 'react'
import { CartContext } from './context-store'

const defaultCart = {
    items: [],
    totalAmount: 0,
}

const cartReducer = ((state, action) => {
    if (action.type === 'ADD') {
        const newTotalAmount = state.totalAmount + action.item.price * action.item.quantity
        const existingCartIndex = state.items.findIndex((item) => item.id === action.item.id)
        const existingItem = state.items[existingCartIndex]
        let updatedItems

        if (existingItem) {
            console.log(existingItem.quantity, 'quantity')
            let itemToUpdate = { ...existingItem, quantity: existingItem.quantity + action.item.quantity }
            console.log(itemToUpdate)
            updatedItems = [...state.items]
            updatedItems[existingCartIndex] = itemToUpdate
        }
        else {
            updatedItems = [...state.items, action.item]
        }
        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        }
    }

    if (action.type === 'REMOVE') {
        console.log(action.item)
        const updatedTotalAmount = state.totalAmount - action.item.quantity * action.item.price
        const updatedItems = state.items.filter((item) => item.id !== action.item.id)
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }


    return defaultCart
})

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart)
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addToCart: (item) => dispatchCartAction({ type: 'ADD', item: item }),
        removeFromCart: (item) => dispatchCartAction({ type: 'REMOVE', item: item })
    }

    return (
        <CartContext.Provider value={cartContext} >{props.children}</CartContext.Provider>
    )
}

export default CartProvider