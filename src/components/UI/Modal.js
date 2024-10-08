import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'
import Card from './Card'


const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClick} ></div>
    )
}

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal} >
            {props.children}
        </Card>
    )
}

const Modal = (props) => {

    const portaOverlay = document.getElementById('overlay')

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portaOverlay)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portaOverlay)}
        </React.Fragment>
    )
}

export default Modal