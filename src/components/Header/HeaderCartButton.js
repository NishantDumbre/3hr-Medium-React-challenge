import React, { useContext } from 'react'
import classes from './HeaderCartButton.module.css'
import { CiShoppingCart } from "react-icons/ci";

import { CartContext } from '../../store/context-store'

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext)
  const totalCartItems = cartCtx.items.reduce((curr, item)=>{return curr+item.quantity}, 0)

  const showCartHandler = () =>{
    console.log(true)
    props.onShow()
  }

  return (
    <div onClick={showCartHandler} className={classes.cartButton} >
        <span><CiShoppingCart className={classes.logo} /></span>
        <span className={classes.cartName}>Cart</span>
        <span className={classes.cartQuantity}>{totalCartItems}</span>
    </div>
  )
}

export default HeaderCartButton