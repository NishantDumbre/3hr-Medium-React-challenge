import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import Button from '../UI/Button'
import classes from './Cart.module.css'
import CartItems from './CartItems'
import { CartContext } from '../../store/context-store'

const Cart = (props) => {

  const cartCtx = useContext(CartContext)

  const removeCartItem = (item) => {
    cartCtx.removeFromCart(item)
  }

  const allCartItems = cartCtx.items.map((item) => {
    return <CartItems name={item.name} key={item.id} quantity={item.quantity} description={item.description} onRemove={() => removeCartItem(item)} />
  })


  return (
    <Modal onClick={props.onClick}>
       <ul className={classes.listContainer}>{allCartItems}</ul>
      <div className={classes.bottom} >
        <div className={classes.totalAmount} >Total Amount: ${cartCtx.totalAmount}</div>
        <div className={classes.actionsContainer} >
          <Button name='Close' onClick={props.onClick} />
          <Button name='Order' />
        </div>
      </div>
    </Modal>
  )
}

export default Cart