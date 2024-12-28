import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Product from './Components/product'
import Display from './Components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home />
     <Display />
     <hr />
     <Product />
    </>
  )
}

export default App
