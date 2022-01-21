import React from 'react';
import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { todosSelector } from '../store/reducers/todosSlice';
import TodoForm from './TodoForm';
import {markComplete, deleteTodo, getTodos} from '../store/reducers/todosSlice'


const Todos = () => {
    // const [todos, setTodos] = useState()

    const todos = useSelector(todosSelector)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTodos())

    },[dispatch])

    const toggleTodoCompleted = todoId => {
		 console.log(todoId)
		 dispatch(markComplete(todoId))
	}

    const deleteSingleTodo = todoId => {
        console.log("deleteid", todoId)
         dispatch(deleteTodo(todoId))
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
                                        onChange={()=> toggleTodoCompleted(todo.id)}
                                        />
                                        <button onClick = {() => deleteSingleTodo(todo.id)}>Delete</button>
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
