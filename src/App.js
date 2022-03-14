import React from 'react';
import './App.css';
import { TodoProvider } from './components/context/TodoContext';


//components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoUL from './components/TodoUL';
import TodoDeleteAll from './components/TodoDeleteAll';





function App() {
  return (
    <TodoProvider>
      
        <div className='container'>
          <TodoForm />
          <TodoList />
          <TodoUL />
          <TodoDeleteAll />
        </div>
      
   </TodoProvider>
  );
}

export default App;
