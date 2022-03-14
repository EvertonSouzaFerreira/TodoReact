import React, {useState,useContext,useEffect} from 'react'
import TodoContext from './context/TodoContext'
import ButtonDeleteDone from './ButtonDeleteDone'
import ButtonDeleteAll from './ButtonDeleteDone'


function TodoDeleteAll({item}) {
    const {todo, handleDelete, addItem, handleDeleteAll} = useContext(TodoContext)

    const [btndisable, setBtnDisable] = useState(todo.length > 0 ? false : true)
    const [btnColor, setBtncolor] = useState(todo.length > 0 ? '' : 'disabled')

    useEffect(()=>{
        if(todo.length <1){
            setBtncolor('disabled')
            setBtnDisable(true)
        }
        else{
            setBtncolor('')
            setBtnDisable(false)
        }
        
    },[handleDelete, addItem])  


  return (
    <div className="set-btn-reds">
           <ButtonDeleteDone isDesable={btndisable} className="btn-red " type="button" version={btnColor}>Delete Done tasks</ButtonDeleteDone>
           <ButtonDeleteAll  isDesable={btndisable} className="btn-red " type='button' version={btnColor}>Delete all tesks</ButtonDeleteAll>
       </div>
  )
}

export default TodoDeleteAll
