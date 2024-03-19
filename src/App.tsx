import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState("");

  // const handleClick = (e) = => {

  // }

  return (
    <>
      <h1>Calculadora em React</h1>

      <div className="container">
        <form>
          <input type="text" value={result}/>
        </form>

        <div className="keypad grid grid-cols-4">
          <button>Clear</button>
          <button>C</button>
          <button>&divide;</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>&times;</button>
          <button>6</button>
          <button>5</button>
          <button>4</button>
          <button>&ndash;</button>
          <button>3</button>
          <button>2</button>
          <button>1</button>
          <button>+</button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
      
    </>
  )
}

export default App
