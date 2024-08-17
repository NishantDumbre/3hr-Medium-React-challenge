import React from 'react'
import Modal from '../UI/Modal'

const Cart = (props) => {
  return (
    <Modal onClick={props.onClick}>
        <p>This is loading</p>
    </Modal>
  )
}

export default Cart