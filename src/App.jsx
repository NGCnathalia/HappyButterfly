import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavFirst } from './components/NavFirst/NavFirst';
import { Home } from './Pages/Home';
import { Product } from './Pages/Product';
import { ShoppingCar } from './Pages/ShoppingCar';



function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<NavFirst />}>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Product />} />
          <Route path='/ShoppingCar' element={<ShoppingCar />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
