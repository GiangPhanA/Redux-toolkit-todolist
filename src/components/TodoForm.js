import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../store/reducers/todosSlice'




const TodoForm = () => {
    const [title, setTitle] = useState('')
    const onTitleChange = (event) => {
        setTitle(event.target.value)
    }
    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault();
        // console.log('Title:', title)
        dispatch(addTodo(title)) 
        setTitle('') 

    }

    return (
        <div className = 'grid wide'>
            <div className = 'row'>
                <div className = 'l-6 l-o-3 m-6 m-o-3 c-12 '>
                    <div className = 'todo-form'>
                        <form onSubmit={onFormSubmit}>
                            <label htmlFor="todo" className="">To do</label>
                            <input type = 'text' id = "todo" placeholder = "To do" 
                            onChange = {onTitleChange}
                            value ={title}/>
                            <input type="submit" value="ADD" />
                        </form>

                    </div>

                </div>    
            </div>
        </div>         
    )
}



export default TodoForm



