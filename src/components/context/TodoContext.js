import { createContext, useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid'
const TodoContext = createContext()

export const TodoProvider = ({children}) => {
    const [todo, setTodo] = useState([{
        id:1,
        text: 'Arroz',
        
    },
    {
        id:2,
        text: 'Feijao',
        
       
    },{
        id:3,
        text: 'Pasta',
        
        
    }]);

    const [todoDone, setTodoDone]= useState([
        {
            item:{},
            id:'',
            done: false,
        }
    ]);

    const [todoOnDone, setTodoOnDone]= useState([
        {
            item:{},
            done: false,
        }
    ]);


    //state for edit text item
    const [todoEdit, setTodoEdit] = useState({
        item:{},
        edit: false,
    })

    const [todoDoneAll, setTodoDoneAll] = useState('all')
   
   
    // add text
    function addItem(newItem){
        newItem.id = uuidv4()
        setTodo([newItem, ...todo])
        
    }

    //delete item
    function handleDelete(id){
        if (window.confirm('Are you sure you wan o delete')){
            setTodo(todo.filter((item) => item.id !== id ))
            setTodoOnDone(todoOnDone.filter((item) => item.id !== id))
        }
    }



    //update list
    function updateTodo(id, upItem){
        setTodo(
            todo.map((item) => (item.id === id ? {...item, ...upItem} : item))
        ) 

        setTodoEdit({
                item:{},
                edit: false,
            })
    }


    //set update list
    function editText(item){
        setTodoEdit({
            item,
            edit: true,
        })   
    }
   

    //mark done
    function onDone(id){
        let updateItems = todo.map((item) => {
            if(item.id === id){
                item.done = !item.done;  

            }
            return item;
            
        })
        setTodo(updateItems);  
        setTodoDone( todo.filter((item) => item.done === true)) 
        setTodoOnDone(todo.filter((item) => item.done === false || !item.done))   

    }
    useEffect(()=> {
        setTodoDone( todo.filter((item) => item.done === true)) 
        setTodoOnDone(todo.filter((item) => item.done === false || !item.done))
    }, [])


    // to show if the item is done / onDone / all
    function handleAllTask(item){
        setTodoDoneAll(item)
        
    }

    // Delete all done tasks
    function handleDeleteDone(){
        setTodoDone('')
        setTodo(todo.filter((item) => !item.done ))
       
    }
    
    // Delete al tasks

    function handleDeleteAll(){
        setTodo('')
        setTodoDone('')
        setTodoOnDone('')
    }

    return <TodoContext.Provider
    value={{
        todo,
        addItem,
        handleDelete,
        onDone,
        editText,
        updateTodo,
        todoEdit,
        handleAllTask,
        todoDone,
        todoOnDone,
        todoDoneAll,
        handleDeleteDone,
        handleDeleteAll,
        
    }}
    >
        {children}
    </TodoContext.Provider>

}

export default TodoContext