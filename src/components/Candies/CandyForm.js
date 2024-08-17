import React, { useRef, useContext } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { CandyContext } from '../../store/context-store'

const CandyForm = () => {

    const nameRef = useRef()
    const descRef = useRef()
    const priceRef = useRef()

    const candyCtx = useContext(CandyContext)

    const addCandyHandler = (event) => {
        event.preventDefault()
        let candyToAdd = { id: Math.random().toFixed(3), name: nameRef.current.value, description: descRef.current.value, price: priceRef.current.value }
        const isFound = candyCtx.addCandy(candyToAdd)
    }

    return (
        <div>
            <form onSubmit={addCandyHandler} >
                <Input label='Name' input={{ id: 'name', type: 'text', maxLength: '2' }} ref={nameRef} />
                <Input label='Description' input={{ id: 'description', type: 'text', maxLength: '2' }} ref={descRef} />
                <Input label='Price' input={{ id: 'price', type: 'text', maxLength: '4' }} ref={priceRef} />
                <Button type='submit' name='Add product' />
            </form>
            {candyCtx.isPresent && <p>Candy already present for sale</p>}
        </div>
    )
}

export default CandyForm