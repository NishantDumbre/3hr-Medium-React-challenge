import React, { useContext } from 'react'
import classes from './HeaderCartButton.module.css'
import { CartContext } from '../../store/context-store'

const HeaderCartButton = (props) => {


  const showCartHandler = () =>{
    console.log(true)
    props.onShow()
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