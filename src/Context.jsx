// @ts-nocheck
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

  function toggleFavorite (photoID) {
    const updatedPhotos = photos.map(photo => {
      if (photo.id === photoID) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite
        }
      }
      return photo
    })
    setPhotos(updatedPhotos)
  }

  return (
        <Context.Provider value={{ photos, toggleFavorite }}>
            {children}
        </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.element
}

export { ContextProvider, Context }
