import React, {useContext} from 'react'
import TodoContext from './context/TodoContext'


function TodoList() {
    const {handleAllTask} = useContext(TodoContext)
    
  return (
    <div>
      <h2>TodoList</h2>
       <div className="set-buttons">
           <button onClick={() => handleAllTask('all')} className="style-button size-btn btn-focus">All</button>
           
           <button onClick={() =>handleAllTask('done')}  className="style-button size-btn btn-focus">Done</button>
           
           <button onClick={() => handleAllTask('allDone')} className="style-button size-btn btn-focus">Todo</button>
       </div>
    </div>
  )
}

export default TodoList
