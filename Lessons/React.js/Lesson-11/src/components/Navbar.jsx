import React from 'react'
import { memo } from 'react'

function Navbar({adjective, getAdjective}) {
    console.log("Navbar is rendering...")
  return (
    <div>
      I am a {adjective} Navbar
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
