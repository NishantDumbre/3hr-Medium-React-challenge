import React from 'react'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <div className={classes.header} >
        <h2>Wonka Candies</h2>
        <HeaderCartButton className={classes.cartButton} onShow={props.onShow} />
    </div>
  )
}

export default Header