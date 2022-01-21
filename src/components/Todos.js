import React from 'react';
// import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { todosSelector } from '../store/reducers/todosSlice';
import TodoForm from './TodoForm';
import {markComplete} from '../store/reducers/todosSlice'


const Todos = () => {
    // const [todos, setTodos] = useState()
    const todos = useSelector(todosSelector)
    const dispatch = useDispatch()

    const toggleTodoCompleted = todoId => {
		 console.log(todoId)
		 dispatch(markComplete(todoId))
	}
   
    return (
        <div className = 'grid wide'>
                <div className = 'row'>
                  <TodoForm  />
                    <div className = 'l-6 l-o-3 m-6 m-o-3 c-12'>  
                       <div className = 'todo-list'>
                            <ul>
                                {
                                    todos.map(todo => (
                                    <li key = {todo.id} className = {todo.completed ? 'completed' :''} >
                                        {todo.title}
                                        <input type = 'checkbox' checked = {todo.completed} 
                                        onChange={toggleTodoCompleted.bind(this, todo.id)}
                                        />
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
