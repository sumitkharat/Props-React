import { useState } from 'react'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card username="Sumit"/>
     <Card post="Staff Engg." />
     <Card />
     <Card />
    </>
  )
}

export default App
