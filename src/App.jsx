import './App.css'
import { useState } from 'react'
import "../bootstrap/css/bootstrap.css"

function App() {
  const [name, setName] = useState("")

  return (
    <div style={{margin: 20}}>
      <div className='form-control'>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input> <br></br>
      <input type='button' className='btn btn-primary' value='Reset' onClick={(e) => setName("")}></input>
      </div>

      <p style={{ fontSize: 20 }}>Hello, {name}</p>
    </div>
  )
}

export default App
