// @ts-nocheck
import React, { useContext } from 'react'
import { Context } from '../../Context'
import CartItem from '../../components/CartItem/CartItem'

function Cart () {
  const { cartItems } = useContext(Context)
  const cartItemElements = cartItems.map(item => (
      <CartItem key={item.id} item={item}/>
  ))
  const totalCost = cartItems.length * 5.99

  return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: ${totalCost}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
  )
}

export default Cart
