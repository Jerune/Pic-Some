import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header/Header'

// Pages
import Cart from './pages/Cart/Cart'
import Photos from './pages/Photos/Photos'

function App () {
  return (
        <>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Photos />} />
              <Route path="cart" element={<Cart />}/>
            </Routes>
          </main>
        </>
  )
}

export default App
