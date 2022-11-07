import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Image ({ className, img, favorite, add }) {
  const [hovered, setHovered] = useState(false)

  function heartIcon () {
    if (img.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => favorite(img.id)}></i>
    } else if (!img.isFavorite && hovered) {
      return <i className="ri-heart-line favorite" onClick={() => favorite(img.id)}></i>
    }
  }

  const cartIcon = hovered && <i className="ri-add-circle-line cart" onClick={() => add(img)}></i>

  return (
        <div className={`${className} image-container`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon}
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
