// @ts-nocheck
import React, { useContext, useState } from 'react'
import { Context } from '../../Context'
import CartItem from '../../components/CartItem/CartItem'

function Cart () {
  const [buttonText, setButtonText] = useState('Place Order')
  const { cartItems, setCartItems } = useContext(Context)
  const cartItemElements = cartItems.map(item => (
      <CartItem key={item.id} item={item}/>
  ))
  const totalCost = cartItems.length * 5.99

  function placeOrder () {
    setButtonText('Ordering...')
    setTimeout(() => {
      console.log('Order placed!')
      setButtonText('Place Order')
      setCartItems([])
    }, 3000)
  }

  return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: ${totalCost}</p>
            {
                cartItems.length > 0
                  ? <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div>
                  : <p>You have no items in your cart.</p>
            }
        </main>
  )
}

export default Cart
