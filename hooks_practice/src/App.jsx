import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <button onClick={() => setCount(count + 1)}>
        Plus
      </button>

      <h1>
        {count}
      </h1>

      <button onClick={() => (count === 0 ? setCount(0) : setCount(count-1))}>

      {/* { if(count === 0){
        setCount(0)
        }else{
        setCount(count - 1)}} */}
        
        Minus
      </button>
    </div>
    </>
  )
}

export default App
