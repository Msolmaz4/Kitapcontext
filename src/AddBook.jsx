import React,{useContext,useState} from 'react'
import { BookContext } from './BookContext'

const AddBook = () => {
const [name,setName] =useState('')
const [price,setPrice] =useState('')
const [books,setBooks] = useContext(BookContext)



const savebook= (e) =>{
    e.preventDefault()
    setBooks(prevdata=>[...prevdata,{name:name,price:price}])
    setName('')
    setPrice('')

}

  return (
    <div>
        <form onSubmit={savebook}>
            <input type='text' placeholder='kitap adi' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type='text' placeholder='kitap fizati' value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <button disabled={!name}>Add</button>
        </form>
    </div>
  )
}

export default AddBook