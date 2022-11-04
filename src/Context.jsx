import React, { createContext } from 'react'
import PropTypes from 'prop-types'

const Context = createContext('')

const ContextProvider = ({ children }) => {
  return (
        <Context.Provider value={''}>
            {children}
        </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.element
}

export { ContextProvider, Context }
