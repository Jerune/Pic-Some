import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Context = createContext([])

const ContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([])
  const apiURL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

  useEffect(() => {
    async function getPhotos () {
      try {
        const response = await fetch(apiURL)
        if (!response.ok && response.status !== 200) {
          throw (response.ok, response.status)
        }
        const photoArray = await response.json()
        setPhotos(photoArray)
      } catch (error) {
        console.log(error)
      }
    }
    getPhotos()
  }, [])

  return (
        <Context.Provider value={photos}>
            {children}
        </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.element
}

export { ContextProvider, Context }
