import React, { useRef, useContext } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './CandyForm.module.css'
import { CandyContext } from '../../store/context-store'

const CandyForm = () => {

    const nameRef = useRef()
    const descRef = useRef()
    const priceRef = useRef()

    const candyCtx = useContext(CandyContext)

    const addCandyHandler = (event) => {
        event.preventDefault()
        const candyToAdd = { id: Math.random().toFixed(3), name: nameRef.current.value, description: descRef.current.value, price: priceRef.current.value }
        candyCtx.addCandy(candyToAdd)
    }

    return (
        <Card className={classes.form} >
            <form onSubmit={addCandyHandler} >
                <Input label='Name' input={{ id: 'name', type: 'text', maxLength: '20', required:true }} ref={nameRef} />
                <Input label='Description' input={{ id: 'description', type: 'text', maxLength: '0', required:true }} ref={descRef} />
                <Input label='Price' input={{ id: 'price', type: 'text', maxLength: '4', required:true }} ref={priceRef} />
                <Button type='submit' name='Add'/>
            </form>
            {candyCtx.isPresent && <p>Candy already present for sale</p>}
        </Card>
    )
}

export default CandyForm