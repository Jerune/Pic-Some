import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Image ({ className, img }) {
  const [hovered, setHovered] = useState(false)
  const heartIcon = hovered && <i className="ri-heart-line favorite"></i>
  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

  return (
        <div className={`${className} image-container`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <img src={img.url} className="image-grid"/>
            {heartIcon}
            {cartIcon}
        </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.object.isRequired
}

export default Image
