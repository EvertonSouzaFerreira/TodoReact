import React, {useState,useContext,useEffect} from 'react'
import TodoContext from './context/TodoContext'
import ButtonDeleteDone from './ButtonDeleteDone'
import ButtonDeleteAllTask from './ButtonDeleteAllTask'


function TodoDeleteAll() {
    const {todo, handleDelete, addItem} = useContext(TodoContext)

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
           <ButtonDeleteDone isDesable={btndisable}  type="button" version={btnColor}>Delete Done tasks</ButtonDeleteDone>
           <ButtonDeleteAllTask isDesable={btndisable}  type='button' version={btnColor}>Delete all tesks</ButtonDeleteAllTask>
       </div>
  )
}

export default TodoDeleteAll
