import React, {useContext} from 'react'
import TodoContext from './context/TodoContext'

function ButtonDeleteDone({children, isDesable, type, version}) {
const {handleDeleteDone} = useContext(TodoContext)

  return (
    <button onClick={() => handleDeleteDone()} className={`btn-red btn-disable-${version}`}  disabled={isDesable} type={type} >

     {children} 
    </button>
  )
}


export default ButtonDeleteDone
