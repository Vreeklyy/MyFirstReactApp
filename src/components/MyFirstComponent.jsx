import { useState } from 'react'
import "../bootstrap/css/bootstrap.css"

function Biblioteka() {
  const books = ["Wiedźmin", "Pan Tadeusz", "Lalka", "Solaris"];
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h2>Dostępne książki: {books.length}</h2> <br></br>
      <div className='text-start'>
      <ol>
      {books.map((element) => {
          return <li>{element}</li>
      })}
      </ol>
      </div>

      <div className='form-control'>
        <label><b>Imie czytelnika:</b> </label> <input type='text' onChange={((e) => setName(e.value.target))}></input> <br></br> <br></br>
        <label><b>Numer ksiażki:</b> </label> <input type='number' onChange={((e) => setNumber(e.value.target))}></input> <br></br> <br></br>
        <input type='button' value='Wypożycz'></input> 
      </div>
      
    

    </div>
  )
}

export default Biblioteka
