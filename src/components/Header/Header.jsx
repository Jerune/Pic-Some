// @ts-nocheck
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../../Context'

function Header () {
  const { cartItems } = useContext(Context)

  return (
        <header>
            <NavLink to='/'><h2>Pic Some</h2></NavLink>
            <NavLink to='cart'>{cartItems.length > 0 ? <i className="ri-shopping-cart-fill ri-fw ri-2x"></i> : <i className="ri-shopping-cart-line ri-fw ri-2x"></i>}</NavLink>
        </header>
  )
}

export default Header
