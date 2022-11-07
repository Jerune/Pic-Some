import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Image ({ className, img, toggle }) {
  const [hovered, setHovered] = useState(false)

  function heartIcon () {
    if (img.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggle(img.id)}></i>
    } else if (!img.isFavorite && hovered) {
      return <i className="ri-heart-line favorite" onClick={() => toggle(img.id)}></i>
    }
  }

  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

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
  img: PropTypes.object.isRequired,
  toggle: PropTypes.func
}

export default Image
