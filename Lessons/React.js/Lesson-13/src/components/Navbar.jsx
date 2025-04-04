import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
      Hi I am Navbar and Count is {count}
    </div>
  )
}

export default Navbar
