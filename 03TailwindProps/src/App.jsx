import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
const arr = [1,2,3];
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind test</h1>

   <Card userName = "Shinchan" btnTxt= "click Me"/>
   <Card userName = "Shubham" btnTxt= "visit Me"/>

    </>
  )
}

export default App
