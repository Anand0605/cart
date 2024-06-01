import React from 'react'
import Counter from './Components/Counter'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import Cart from './Components/Cart'

const App = () => {
  return (
    <div>
      {/* <Counter/> */}
      <Navbar/>
      <Product/>
      <Cart/>
    </div>
  )
}

export default App