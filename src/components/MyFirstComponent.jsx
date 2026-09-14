import { useState } from 'react'
import "../bootstrap/css/bootstrap.css"

function Biblioteka() {
  
  const books = ["Wiedźmin", "Pan Tadeusz", "Lalka", "Solaris"]

  const [readerName, setReaderName] = useState("")
  const [bookNumber, setBookNumber] = useState("")

  const borrowBook = () => {
    const number = parseInt(bookNumber)

    if (number >= 1 && number <= books.length) {
      console.log(
        `Wypożyczenie: ${readerName}, książka: ${books[number - 1]}`
      )
    } else {
      console.log("Nieprawidłowy numer książki")
    }
  }

  return (
    <div className="p-3">
      
      <h2 className="text-start mb-4">Dostępne książki: {books.length}</h2>

      <ol className="text-start">
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ol>

      <form className="mt-4">

        <div className="mb-3">

          <label htmlFor="readerName" className="form-label">Imię czytelnika:</label>

          <input type="text" className="form-control" value={readerName} onChange={(e) => setReaderName(e.target.value)}/>
       
        </div>

        <div className="mb-3">

          <label htmlFor="bookNumber" className="form-label">Numer książki:</label>

          <input type="number" id="bookNumber" className="form-control" value={bookNumber} onChange={(e) => setBookNumber(e.target.value)}/>
       
        </div>

        <button type="button" className="btn btn-primary" onClick={borrowBook}>Wypożycz</button>

     
      </form>

    </div>
  )
}

export default Biblioteka