import React from 'react'
import classes from './CandyItem.module.css'
import Button from '../UI/Button'

const CandyItem = (props) => {
  return (
    <li className={classes.list} >
        <div className={classes.candyInfo} >
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
        <div className={classes.button} >
            <Button name='Add 1' />
            <Button name='Add 2' />
            <Button name='Add 3' />
        </div>
    </li>
  )
}

export default CandyItem