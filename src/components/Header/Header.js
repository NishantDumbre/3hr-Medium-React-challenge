import React from 'react'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <div className={classes.header} >
        <h2>Wonka Candies</h2>
        <HeaderCartButton />
    </div>
  )
}

export default Header