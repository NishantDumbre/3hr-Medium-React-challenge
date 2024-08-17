import React from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'

const CandyForm = () => {

    const addCandyHandler = () => {
        console.log(true)
    }

    return (
        <div>
            <form onSubmit={addCandyHandler} >
                <Input label='Name' input={{ id: 'name', type: 'text', maxLength: '2' }} />
                <Input label='Description' input={{ id: 'description', type: 'text', maxLength: '2' }} />
                <Input label='Price' input={{ id: 'price', type: 'text', maxLength: '4' }} />
                <Button type='submit' name='Add product' />
            </form> 
        </div>
    )
}

export default CandyForm