import { createContext, useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid'
const TodoContext = createContext()
const SAVED_ITEMS = "savedTodo"

export const TodoProvider = ({children}) => {
    const [todo, setTodo] = useState([]);

    useEffect(()=>{
        let savedTodo = JSON.parse(localStorage.getItem(SAVED_ITEMS))

        if (savedTodo) {
            setTodo(savedTodo);
        }
    }, [])

    useEffect(() =>{
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(todo))
    }, [todo])

    

    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     fetchTodo()
    // }, [])

    // async function fetchTodo(){
    //     const response = await fetch('/todo?_sort=id_order=desc')
    //     const data = await response.json()
    //     setTodo(data)
    //     setIsLoading(false)
    // }

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
     const addItem = async (newItem) => {
        // const response = await fetch('/todo',{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newItem)
        // })
        // const data = await response.json()
        newItem.id = uuidv4()
        setTodo([newItem, ...todo]) 
    }

    //delete item
   async function handleDelete(id){
        if (window.confirm('Are you sure you wan o delete')){
            // await fetch(`/todo/${id}`, {method: 'DELETE'})

            setTodo(todo.filter((item) => item.id !== id ))
            setTodoOnDone(todoOnDone.filter((item) => item.id !== id))
        }
    }



    //update list
    async function updateTodo(id, upItem){
        // const response = await fetch(`/todo/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(upItem)
        // })
        //     const data = await response.json()

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
        if(window.confirm('Are you sure you want to deleteDone?')){
            setTodoDone('')
            setTodo(todo.filter((item) => !item.done ))
        }
        
       
    }
    
    // Delete al tasks

    function handleDeleteAllTasks(){
        if(window.confirm('Are you sure you want o deleteAll?')){
            setTodo('')
            setTodoDone('')
            setTodoOnDone('')
            console.log("test button")
        }
        
        
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
        handleDeleteAllTasks,
        
    }}
    >
        {children}
    </TodoContext.Provider>

}

export default TodoContext