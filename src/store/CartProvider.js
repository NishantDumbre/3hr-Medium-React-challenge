import React, { useReducer } from 'react'
import { CartContext } from './context-store'

const defaultCart = {
    items: [],
    totalAmount: 0,
    isCartShown: false
}

const cartReducer = ((state, action) => {
    if (action.type === 'TOGGLE_CART') {
        return {
            items: [...state.items],
            totalAmount: state.totalAmount,
            isCartShown: !state.isCartShown
        }
    }
    return defaultCart
})

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart)

    const toggleCartHandler = () =>{
            dispatchCartAction({type:'TOGGLE_CART'})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        isCartShown: cartState.isCartShown,
        toggleCart: toggleCartHandler
    }

    return (
        <CartContext.Provider value={cartContext} >{props.children}</CartContext.Provider>
    )
}

export default CartProvider