// @ts-nocheck
import React, { useContext, useState } from 'react'
import { Context } from '../../Context'
import PropTypes from 'prop-types'

function CartItem ({ item }) {
  const [hovered, setHovered] = useState(false)
  const { removeItemFromCart } = useContext(Context)

  const iconClassName = hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'

  return (
        <div className="cart-item">
            <i className={iconClassName} onClick={() => removeItemFromCart(item)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartItem
