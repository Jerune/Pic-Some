import React from "react"
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header>
            <NavLink to='/'><h2>Pic Some</h2></NavLink>
            <NavLink to='cart'><i className="ri-shopping-cart-line ri-fw ri-2x"></i></NavLink>
        </header>
    )
}

export default Header