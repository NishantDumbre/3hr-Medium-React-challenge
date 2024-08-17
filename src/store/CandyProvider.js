import React, { useState } from 'react'
import { CandyContext } from './context-store'



const CandyProvider = (props) => {

  const [allCandies, setAllCandies] = useState([{ id: 1, name: 'Dairy Milk', description: 'Cadbury', price: '10' }])
  const [isPresent, setIsPresent] = useState(false)

  const addCandyHandler = (candy) =>{
    const existingCandy = allCandies.filter((item) =>{
      return candy.name === item.name
    })
    if(existingCandy.length){
      setIsPresent(true)
      setTimeout(()=>{
        setIsPresent(false)
      }, 2000)
    }
    else{
      setAllCandies([...allCandies, candy])
    }
    console.log(allCandies)
  }

  const candyContext = {
    candies:allCandies,
    addCandy: addCandyHandler,
    isPresent: isPresent
  }

  return (
    <CandyContext.Provider value={candyContext} >{props.children}</CandyContext.Provider>
  )
}

export default CandyProvider