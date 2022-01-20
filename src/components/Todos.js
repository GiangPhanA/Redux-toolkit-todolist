import React from 'react';
// import {useState} from 'react'
import { useSelector } from 'react-redux';
import { todosSelector } from '../store';


import TodoForm from './TodoForm';


const Todos = () => {
    // const [todos, setTodos] = useState()
    const todos = useSelector(todosSelector)
   
    return (
        <div className = 'grid wide'>
                <div className = 'row'>
                  <TodoForm  />
                    <div className = 'l-6 l-o-3 m-6 m-o-3 c-12'>  
                       <div className = 'todo-list'>
                            <ul>
                                {
                                    todos.map(todo => (
                                    <li key = {todo.id}  >
                                        {todo.title}
                                        <input type = 'checkbox' />
                                        <button >Delete</button>
                                        <button >Edit</button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>              
                    </div>    
                </div>
        </div>


    )
}


export default Todos
