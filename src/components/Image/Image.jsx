// @ts-nocheck
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../../Context'
import useHover from '../../hooks/useHover'

function Image ({ className, img }) {
  const [hovered, ref] = useHover()
  const {
    cartItems,
    toggleFavorite,
    addItemToCart,
    removeItemFromCart
  } = useContext(Context)

  function heartIcon () {
    if (img.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
    } else if (!img.isFavorite && hovered) {
      return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    }
  }

  function cartIcon () {
    const isInCart = cartItems.some(item => item.id === img.id)
    if (isInCart) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => removeItemFromCart(img)}></i>
    } else if (!isInCart && hovered) {
      return <i className="ri-add-circle-line cart" onClick={() => addItemToCart(img)}></i>
    }
  }

  return (
        <div className={`${className} image-container`} ref={ref}>
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
}

export default Image
