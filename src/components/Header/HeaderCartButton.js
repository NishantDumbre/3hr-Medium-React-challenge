import React, { useContext } from 'react'
import classes from './HeaderCartButton.module.css'
import { CartContext } from '../../store/context-store'

const HeaderCartButton = () => {

  const cartCtx = useContext(CartContext)

  const showCartHandler = () =>{
    console.log(true)
    cartCtx.toggleCart()
  }

  return (
    <div onClick={showCartHandler} >
        <span>Logo</span>
        <span>Cart</span>
        <span>0</span>
    </div>
  )
}

export default HeaderCartButton