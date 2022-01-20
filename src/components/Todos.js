import React from 'react';
import {useState} from 'react'


import TodoForm from './TodoForm';


const Todos = () => {
    const [todos, setTodos] = useState([
        {
        id: 1,
        title: 'viec 1',
        completed: false
        },
        {
            id: 2,
            title: 'viec 2',
            completed: false
        },
        {
            id: 3,
            title: 'viec 3',
            completed: false
        },
    ])

   
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
