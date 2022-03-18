import React, {useContext} from 'react'
import TodoItens from './TodoItens'
import TodoContext from './context/TodoContext'
import Spinner from './Spinner'


function TodoUL() {
    const {todo, todoOnDone, todoDone, todoDoneAll, isLoading} = useContext(TodoContext)

   

   if(todoDoneAll === 'done'){
        return (
            <>
            <ul className="style-list">
                {!todoDone || todoDone.length === 0 || !todo || todo.length === 0 ? <p className='style-item'>"There is no more tasks only done"</p> : todoDone.map((item) =>
                <TodoItens 
                key={item.id} item={item}
                />
                
                )}
            </ul>
            
            </>
         ) 
    }

  else if (todoDoneAll === 'all'){
   return  (
    <>
      <ul className="style-list">
          {!todo || todo.length === 0 ? <p className='style-item'>"There is no more tasks"</p> : todo.map((item) =>
            <TodoItens 
            key={item.id} item={item}
             />
             
          )}
           
       </ul>
    
    </>
  )}

  else if (todoDoneAll === 'allDone'){
    return (
        <>
       <ul className="style-list">
           {!todoOnDone || todoOnDone.length === 0 || !todo || todo.length === 0 ? <p className='style-item'>"There is no more tasks to be done"</p> : todoOnDone.map((item) =>
             <TodoItens 
             key={item.id} item={item}
              />    
           )}   
        </ul>   
        
        </>
   )}  

   
}

export default TodoUL
