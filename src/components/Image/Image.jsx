// @ts-nocheck
import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../../Context'

function Image ({ className, img, favorite, add }) {
  const [hovered, setHovered] = useState(false)
  const { cartItems } = useContext(Context)

  function heartIcon () {
    if (img.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => favorite(img.id)}></i>
    } else if (!img.isFavorite && hovered) {
      return <i className="ri-heart-line favorite" onClick={() => favorite(img.id)}></i>
    }
  }

  function cartIcon () {
    const isInCart = cartItems.some(item => item.id === img.id)
    if (isInCart) {
      return <i className="ri-shopping-cart-fill cart"></i>
    } else if (!isInCart && hovered) {
      return <i className="ri-add-circle-line cart" onClick={() => add(img)}></i>
    }
  }

  return (
        <div className={`${className} image-container`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
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
  }),
  favorite: PropTypes.func,
  add: PropTypes.func
}

export default Image
