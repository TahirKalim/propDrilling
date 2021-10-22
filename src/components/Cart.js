import React from 'react'
import SingleProduct from './SingleProduct'

const Cart = ({ cart, setCart }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: {}</span>
      <div className='productContainer'>
        {cart.map((prod) => (
          <SingleProduct
            prod={prod}
            key={prod.id}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  )
}

export default Cart
