import { useState } from 'react'
import './App.css'
import { clean, inserirNumero, operation, resultado } from './functions/functions';

function App() {
  const [result, setResult] = useState('');

  const onChange = (event) => {
    setResult(event.target.value);
  };

  return (
    <>
      <div className="container">
      <h1 className='text-slate-300'>Calculadora em React</h1>
        <form className=' my-5 py-2'>
          <input type="text" value={result} className='border-2 border-black-600 rounded-lg w-full py-3'/>
        </form>

        <div className="keypad grid grid-cols-4 gap-2">
          <button className='bg-slate-300'>Clear</button>
          <button onClick={clean()} className='bg-slate-300'>C</button>
          <button onClick={resultado()} className='bg-slate-300'></button>
          <button onClick={operation('/')} className='bg-slate-300'>&divide;</button>
          <button onClick={inserirNumero('7')} className='bg-slate-300'>7</button>
          <button onClick={inserirNumero('8')} className='bg-slate-300'>8</button>
          <button onClick={inserirNumero('9')} className='bg-slate-300'>9</button>
          <button onClick={operation('*')} className='bg-slate-300'>&times;</button>
          <button onClick={inserirNumero('6')} className='bg-slate-300'>6</button>
          <button onClick={inserirNumero('5')} className='bg-slate-300'>5</button>
          <button onClick={inserirNumero('4')} className='bg-slate-300'>4</button>
          <button onClick={operation('-')} className='bg-slate-300'>&ndash;</button>
          <button onClick={inserirNumero('1')} className='bg-slate-300'>1</button>
          <button onClick={inserirNumero('2')} className='bg-slate-300'>2</button>
          <button onClick={inserirNumero('3')} className='bg-slate-300'>3</button>
          <button onClick={operation('+')} className='bg-slate-300'>+</button>
          <button className='bg-slate-300'>.</button>
          <button onClick={inserirNumero('0')} className='bg-slate-300'>0</button>
          <button onClick={resultado()} className='bg-blue-500'>=</button>
        </div>
      </div>     
    </>
  )
}

export default App
