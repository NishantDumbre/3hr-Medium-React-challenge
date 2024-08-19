import React, { useEffect, useContext } from 'react'
import CandyItem from './CandyItem'
import Card from '../UI/Card'
import { CandyContext } from '../../store/context-store'
import classes from './AvailableCandies.module.css'

const AvailableCandies = () => {

  const candyCtx = useContext(CandyContext)

  const candies = candyCtx.candies.map((candy) => {
    return (
      <CandyItem key={candy.id} id={candy.id} name={candy.name} description={candy.description} price={candy.price} />
    )
  })

  return (
    <Card className={classes.store}>
      <ul>{candies}</ul>
    </Card>
  )
}

export default AvailableCandies