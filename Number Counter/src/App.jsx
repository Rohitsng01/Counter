import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0)

  const addValue = () => {
      setCount(count + 1)
  }
  let removeValue = () => {
    if (count == 0){
      return 1
    }
    setCount(count - 1)
  }
  let reset = () => {
    setCount(count * 0)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{count}</h2>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}> Add Value</button>
        <button onClick={() => setCount ((count) => count - 1)}> Remove Value</button> 
        <br/>
        <button onClick={() => setCount ((count) => count * 0)}> Reset</button> */}
        <button onClick={addValue}>Add Value</button>
        <button onClick={reset}>Reset</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>
      <p>Click on the buttons for value add and remove</p>
    </>
  )
}

export default App
