import React,{useContext,useState} from 'react'// cagirabilmek icin usecontex kullandim
import { BookContext } from './BookContext' //defeul etmedigimden dolayi suslu paranteysde alizorum
import BookList from './BookList'

const Book = () => {

const [books,setBooks] =useContext(BookContext)

  return (
    <div>
{books.map(item=><BookList
 name={item.name}
 price={item.price}
/>)}
    </div>
  )
}

export default Book