import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  function hozzaad(ertek: number){
    const cMax = 15;
    if(count + ertek < 0){
      alert("Negatív nem lehet");
      return;
    }
    if (count + ertek > cMax)
    {
      alert("Túl nagy");
      return;
    }
    setCount((c) => c + ertek) 
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>Ennyiszer kattintottál: {count}</p>
        <button onClick={() => hozzaad(2)}>
          Plusz 1
        </button>

        <button onClick={() => hozzaad(-2)}>
          Minusz 1
        </button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
