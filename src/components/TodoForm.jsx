import React, {useState, useContext, useEffect} from 'react'
import {FaClipboardList} from 'react-icons/fa'
import TodoContext from './context/TodoContext'
import Button from './Button'


function TodoForm() {
    const [text, setText] = useState('')
    const [btndisable, setBtnDisable] = useState(true)
    const [btnColor, setBtncolor] = useState('disabled')
    const [message, setMessage] = useState(null)

    //functions camo from TodoContext
    const {addItem, updateTodo, todoEdit} = useContext(TodoContext)

    //useEfect for update state from TodoContext
useEffect(() =>{
    if(todoEdit.edit === true){
        setBtnDisable(false)
        setBtncolor('')
        setText(todoEdit.item.text)
    }
}, [todoEdit])





    function handleText({target:{value}}){
    
    if(value === '' || value.trim().length === 0 ){
        setBtnDisable(true)
        setBtncolor('disabled')
        setMessage(null)

    }else if(value !== '' && value.trim().length <=3){
        setBtnDisable(true)
        setBtncolor('disabled')
        setMessage('The messagem have o be more then 3 character')
    }else{
        setBtnDisable(false)
        setBtncolor('')
        setMessage(null)
    }

    setText(value)

    
}

function handleSubmit(e){
    e.preventDefault()
    if(text.trim().length > 3){
        const newText = {
            text: text,
            
        }
        if (todoEdit.edit === true){
            updateTodo(todoEdit.item.id, newText)
            
            setBtnDisable(true)
            setBtncolor('disabled')
            setMessage(null)
            
        }else{
            
            addItem(newText)
            setBtnDisable(true)
            setBtncolor('disabled')
            setMessage(null)
        }
        
    }
    
    setText('')
    setBtnDisable(false)
    
    
}



  return (
    <div>
       <h1>TodoForm</h1>
       <form onSubmit={handleSubmit} className="form-container">
           <div className='text-box'>
           <FaClipboardList color='#24a3b6' size='28px' />    
           <input onChange={handleText} value={text} className="input-text" type="text" placeholder="New Todo" />
           </div>
           
           <Button isDisable={btndisable} version={btnColor} type="submit"> Add new tesk</Button>
            <p className='message'>{message}</p>
       </form>
    </div>
  )
}

export default TodoForm
