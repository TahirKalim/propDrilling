import React from 'react'
import faker from 'faker'
import { useState } from 'react'
import './styles.css'
import SingleProduct from './SingleProduct'

faker.seed(20)

const Home = ({ cart, setCart }) => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }))
  //const [cart, setCart] = useState([])
  const [products] = useState(productsArray)
  return (
    <div className='productContainer'>
      {products.map((prod) => (
        <SingleProduct prod={prod} cart={cart} setCart={setCart} />
      ))}
      <h2>home</h2>
    </div>
  )
}

export default Home
