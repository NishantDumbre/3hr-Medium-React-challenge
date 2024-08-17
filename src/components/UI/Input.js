import React from 'react'

const Input = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
        <label htmlFor={props.input.id} >{props.label}</label>
        <input {...props.input} ref={ref} ></input>
    </React.Fragment>
  )
})

export default Input