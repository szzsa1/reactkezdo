import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './button'


function App() {
  const [count, setCount] = useState(10)
  const [step, setStep ] = useState(1);
  function hozzaad(){
    const cMax = 15;
    if(count + step < 0){
      alert("Negatív nem lehet");
      return;
    }
    if (count + step > cMax)
    {
      alert("Túl nagy");
      return;
    }
    setCount((c) => c + step) 
  }

  useEffect(() => {
    if (step != 1){
      setTimeout(()=> {
        setStep(1);
      },5000);
    }
  },[step])


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
      <input type="number" value={step} onChange={e=>setStep(parseInt(e.target.value))}/>
      <div className="card">
        <p>Ennyiszer kattintottál: {count}</p>
        <Button onClick={() => hozzaad()}>
          Plusz 1
        </Button>

        <Button onClick={() => hozzaad()}>
          Minusz 1
        </Button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
