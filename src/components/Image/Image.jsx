import React from 'react'
import PropTypes from 'prop-types'

function Image ({ className, img }) {
  return (
        <div className={`${className} image-container`}>
            <img src={img.url} className="image-grid"/>
        </div>
  )
}

Image.propTypes = {
  className: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired
}

export default Image
