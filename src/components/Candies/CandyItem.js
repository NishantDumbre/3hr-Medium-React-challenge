import React, { useContext } from 'react'
import classes from './CandyItem.module.css'
import Button from '../UI/Button'

import { CartContext } from '../../store/context-store'



const CandyItem = (props) => {

  const cartCtx = useContext(CartContext)

  const addToCart = (quantity) =>{
    const item = {...props, quantity:quantity}
    cartCtx.addToCart(item)
  }

  return (
    <li className={classes.list} >
        <div className={classes.candyInfo} >
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
        <div className={classes.button} >
            <Button name='Add 1' onClick={()=>addToCart(1)} />
            <Button name='Add 2' onClick={()=>addToCart(2)} />
            <Button name='Add 3' onClick={()=>addToCart(3)} />
        </div>
    </li>
  )
}

export default CandyItem