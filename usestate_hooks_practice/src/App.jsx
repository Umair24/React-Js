import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = widthCount
  })


  let [widthCount, setWidthCount] = useState(window.screen.width)

  let currentScreenWidth = () => {
    setWidthCount(() => window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', currentScreenWidth)
    return () => {
      window.removeEventListener('resize', currentScreenWidth)
    }
  })

  return (
    <>
    <div>
      {/* <button onClick={() => setCount(count + 1)}>
        Plus 
      </button>

      <h1>
        {count}
      </h1>

      <button onClick={() => (count === 0 ? setCount(0) : setCount(count-1))}>

      { if(count === 0){    2nd approach
        setCount(0)
        }else{
        setCount(count - 1)}}
        
        Minus
      </button> */}

      <h2>The Size of the window is <span>{widthCount}</span></h2>
    </div>
    </>
  )
}

export default App
