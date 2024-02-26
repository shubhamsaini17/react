import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
      <HookCounter/><br /><br /><br />
      <HookCounterTwo/>
      </div>
    </>
  )
}

export default App
