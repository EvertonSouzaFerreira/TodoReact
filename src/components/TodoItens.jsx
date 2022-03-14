import React, {useContext} from 'react'
import {FaTimes, FaEdit, FaCheckSquare, FaSquare} from 'react-icons/fa'
import TodoContext from './context/TodoContext'


function TodoItens({item}) {
    const {handleDelete, onDone, editText} = useContext(TodoContext)

   function DoneImg(){
       if (!item.done){
           return (<FaSquare />)
       }else{
            return (<FaCheckSquare />)
       } 
   }
   

  return (
    <li className="style-item">
        <input onClick={() => onDone(item.id)}  type='checkbox' name={item.text} id={item.id} className='btn check'></input>
        <label htmlFor={item.id}><DoneImg /> </label> 
        <button onClick={() => editText(item)} className='btn edit'><FaEdit /></button>
        <button onClick={() => handleDelete(item.id)}  className='btn close'><FaTimes /></button>
        {item.done ? <p className='text-line'>{item.text}</p> : <p>{item.text}</p> }
        
    </li>
  )
}

export default TodoItens
