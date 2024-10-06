import { useState } from 'react'
import CustomText from './components/CustomText.jsx'

function App() {
  const [text, setText] = useState('hello')

  const inputHandler = (e) => {
    setText(e.target.value)
  }

  const clearVal = () => {
    setText('')
  }
  return (
    <>
      <CustomText text={text} /> <br />
      <CustomText text={text} /><br />
      <CustomText text={text} /><br />
      input feld ::  <input className='border border-black' type="text" value={text} onChange={(e) => inputHandler(e)} /> <br />
      <button className='border border-red-400' onClick={clearVal}>Set to empty button </button>
    </>
  )
}

export default App
