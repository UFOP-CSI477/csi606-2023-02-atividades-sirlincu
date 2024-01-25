import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1)
  }

  return (

      <div className="App">
        <h2>Elementos: {count}</h2>

        <button onClick={incrementar} >Incrementar</button>
        <Menu />
      </div>
  )
}

export default App
