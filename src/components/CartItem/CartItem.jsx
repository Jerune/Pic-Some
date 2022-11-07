// @ts-nocheck
import React, { useContext } from 'react'
import { Context } from '../../Context'
import useHover from '../../hooks/useHover'
import PropTypes from 'prop-types'

function CartItem ({ item }) {
  const [hovered, ref] = useHover()
  const { removeItemFromCart } = useContext(Context)

  const iconClassName = hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'

  return (
        <div className="cart-item">
            <i className={iconClassName} ref={ref} onClick={() => removeItemFromCart(item)}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartItem
