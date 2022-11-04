// @ts-nocheck
import React, { useContext } from 'react'
import { Context } from '../../Context'

// Components & Utils
import { getClass } from '../../utils/index'
import Image from '../../components/Image/Image'

function Photos () {
  const photos = useContext(Context)
  const photoElements = photos.map((photo, index) => (
    <Image key={photo.id} img={photo} className={getClass(index)}/>
  ))

  return (
        <main className="photos">
            {photoElements}
        </main>
  )
}

export default Photos
