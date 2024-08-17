import React from 'react'

const Input = (props) => {
  return (
    <React.Fragment>
        <label htmlFor={props.input.id} >{props.label}</label>
        <input {...props.input} ></input>
    </React.Fragment>
  )
}

export default Input