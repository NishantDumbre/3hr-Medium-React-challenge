import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {

    const newClass = classes.button + ' ' + props.class

    return (
        <button {...props} className={newClass} >{props.name}</button>
    )
}

export default Button