import React from 'react'
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
        <label htmlFor={props.input.id} className={classes.label}>{props.label}</label>
        <input {...props.input} className={classes.input} ref={ref} ></input>
    </div>
  )
})

export default Input