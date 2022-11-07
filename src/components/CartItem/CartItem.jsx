// @ts-nocheck
import React, { useContext, useState } from 'react'
import { Context } from '../../Context'
import PropTypes from 'prop-types'

function CartItem ({ item }) {
  const [hovered, setHovered] = useState(false)
  const { removeItemFromCart } = useContext(Context)

  function trashIcon () {
    if (!hovered) {
      return <i className="ri-delete-bin-line" onClick={() => removeItemFromCart(item)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}></i>
    } else if (hovered) {
      return <i className="ri-delete-bin-fill" onClick={() => removeItemFromCart(item)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}></i>
    }
  }

  return (
        <div className="cart-item">
            {trashIcon()}
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartItem
