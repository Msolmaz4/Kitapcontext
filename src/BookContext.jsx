import React ,{createContext,useState} from 'react'

export const BookContext = createContext();

export const BookProvider = (props) =>{

    const [ books,setBooks] = useState([
        { name:'daaa' , price:'29', id:1},
        { name:'duygu' , price:'45', id:2},
        { name:'hilal' , price:'89', id:5}
    ])


return(
    <BookContext.Provider value={[books,setBooks]}>
        {props.children}

    </BookContext.Provider>
)


}