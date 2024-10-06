import { useState } from 'react'


function App() {
  const [text, setText] = useState('hello')

  const inputHandler = (e) =>{
    setText(e.target.value)
  }

  const clearVal = (e) =>{
    setText('')
  }
  return (
    <>
      <h1 className='text-red-500'>{text}</h1>
     input feld ::  <input className='border border-black' type="text" value={text} onChange={(e)=>inputHandler(e)} />
     <h1 className='text-red-500'>{text}</h1>
     <button className='border border-red-400' onClick={(e) => clearVal(e)}>Set to empty button </button>
    </>
  )
}

export default App
