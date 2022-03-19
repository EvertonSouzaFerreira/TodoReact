import React, {useContext} from 'react'
import TodoContext from './context/TodoContext'

function ButtonDeleteAll({children, isDesable, type, version}) {
    const {handleDeleteAllTasks} = useContext(TodoContext)
    
      return (
        <button onClick={() => handleDeleteAllTasks()} className={`btn-red btn-disable-${version}`}  disabled={isDesable} type={type} >
    
         {children} 
        </button>
      )
      }
    
    
    export default ButtonDeleteAll
