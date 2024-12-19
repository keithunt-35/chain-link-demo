import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@coinbase/onchainkit/styles.css'; 
import   Header  from './components/header'
import Shoe from './components/shoe';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header /> */}
      <div>
        <h1 style={{ color: 'blue', textAlign: 'center' }}> Shop</h1>
        <Shoe />
      </div>
    </>
  )
}

export default App
