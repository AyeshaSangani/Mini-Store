import React, { useState } from 'react'

function Usestate() {

  const [count, setcount] = useState(0)
  
  const [text, settext] = useState("nothing")

  const changeHandler = (event) => {
    settext(event.target.value)
  }

  const upperCase = () => {
    settext(text.toUpperCase())
    alert("text converted to uppercase")
  }
  const copy = () => {
    navigator.clipboard.writeText(text)
    alert("text copied to clipboard")
  }
  const clearText = () => {
    settext("")
    alert("text cleared")
  }
  const undoText = () => {
    settext(text.slice(0, -1))

  }



  return (

    <>

      <div className="container p-5">
        <h2><b><u>Count: {count}</u></b></h2>
        <button className="btn btn-warning me-2" onClick={() => setcount(count + 1)}>Click to Increase Counter</button>

        <br /><br />

        <label htmlFor="">type our msg here</label>
        <textarea placeholder='type here...' className='form-control mt-3' onChange={changeHandler} value={text}>
        </textarea>

        <br /><br />

        <button className='btn btn-warning m-2' onClick={upperCase}>convert to UpperCase </button>
        <button className='btn btn-warning m-2' onClick={copy}>Copy</button>
        <button className='btn btn-warning m-2' onClick={clearText}>Clear </button>
        <button className='btn btn-warning m-2' onClick={undoText}>Undo Text</button>

<h5 className='mt-2'><b><u>Character Count: {text.length}</u></b></h5>
        <h3 className='mt-2'><b><u>Preveiw:</u></b></h3>
        <p className='mt-3'>{text}</p>
      </div>

    </>
  )
}

export default Usestate