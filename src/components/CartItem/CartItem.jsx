// @ts-nocheck
import React, { useContext } from 'react'
import { Context } from '../../Context'
import PropTypes from 'prop-types'

function CartItem ({ item }) {
  const { removeItemFromCart } = useContext(Context)

  return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={() => removeItemFromCart(item)}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartItem
