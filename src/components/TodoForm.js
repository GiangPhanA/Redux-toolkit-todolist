import React from 'react'
import {useState} from 'react'



const TodoForm = () => {
    const [title, setTitle] = useState('')
    const onTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        // if(title !== '') {
        //     const newTodo ={
        //         id: uuidv4(),
        //         title,
        //         completed: false
        //     }
        //     // console.log ('newTodo',newTodo)
        //     // addTodo(newTodo)
        //     setTitle('')
        // }
        

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



