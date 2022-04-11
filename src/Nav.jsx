import React,{useContext,useState} from 'react'
import { BookContext} from './BookContext'
import './Navbar.css'

const Nav = () => {

const [books,setBooks] =useContext(BookContext)

  return (
    <div className='navbar'>
        <h1>LOGO</h1>
        <p>Kitapliktaki kitap sayisi: {books.length}</p>




    </div>
  )
}

export default Nav