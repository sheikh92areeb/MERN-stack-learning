import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [cards, setCards] = useState([])


  async function fetchData() {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts')
    let response = await data.json()
    setCards(response)
    console.log(response)
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <>
      <Navbar/>
      <div className="container">
        {cards.map((card)=> {
          return <div key={card.id} className="card">
            <h2>{card.title}</h2>
            <p>{card.body}</p>
            <span>By: UserID {card.userId}</span>
          </div>
        })}
        
      </div>
    </>
  )
}

export default App
