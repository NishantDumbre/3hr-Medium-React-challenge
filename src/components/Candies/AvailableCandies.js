import React, { useEffect, useContext } from 'react'
import CandyItem from './CandyItem'
import { CandyContext } from '../../store/context-store'

const AvailableCandies = () => {

  const candyCtx = useContext(CandyContext)

  const candies = candyCtx.candies.map((candy) => {
    return (
      <CandyItem key={candy.id} id={candy.id} name={candy.name} description={candy.description} price={candy.price} />
    )
  })

  return (
    <ul>{candies}</ul>
  )
}

export default AvailableCandies