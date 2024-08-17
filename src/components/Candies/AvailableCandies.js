import React from 'react'
import CandyItem from './CandyItem'

const AvailableCandies = () => {

    const candies = [{id:1, name: 'Dairy Milk', description:'Cadbury', price:'10'}]

  return (
    candies.map((candy) =>{
        <CandyItem  />
    })
  )
}

export default AvailableCandies