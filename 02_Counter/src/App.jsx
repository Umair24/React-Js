import { useState,  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 10

  let addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  let removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  let resetValue = () => {
    setCounter(0)
  }

  return (
    <>
    <h1>React Course</h1>
    <h2>Counter Value: {counter}</h2>

    <button 
    onClick={addValue}
    >Add Value</button>

    <button
    onClick={removeValue}
    >Remove Value </button>

    <p>Footer: {counter}</p>

    <button
    onClick={resetValue}
    >Reset</button>
    </>
  )
}

export default App
