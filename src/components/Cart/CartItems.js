import React from 'react'
import Button from '../UI/Button'
import classes from './CartItems.module.css'

const CartItems = (props) => {
  return (
    <li className={classes.listItem} >
      <div className={classes.listContent} >
        <p className={classes.name} >{props.name}</p>
        <p className={classes.description} >{props.description}</p>
        <p className={classes.quantity} >x {props.quantity}</p>
      </div>
      <Button name='Delete' onClick={props.onRemove} />
    </li>
  )
}

export default CartItems