import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])
  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <Route path='/' exact>
          <Home cart={cart} setCart={setCart} />
        </Route>
        <Route path='/cart' exact>
          <Cart cart={cart} setCart={setCart} />
        </Route>
      </div>
    </BrowserRouter>
  )
}

export default App
