import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>The Counter is {count}</p>
      <button onclick={()=>{setCount(count + 1)}}>Update Count</button>
    </>
  )
}

export default App
