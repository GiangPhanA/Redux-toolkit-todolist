import React from 'react'
import { useSelector } from 'react-redux';
import { todosSelector } from '../store';

const Navbar = () => {
    const todos = useSelector(todosSelector)
    const length = todos.length;
    return (
            <div className = 'grid wide'>
                <div className = 'row'>
                    <div className = 'l-12 m-12 c-12'>  
                        <div className = 'navbar'>
                            <h1 className = 'navbar-title'> Redux Todos App. Hello Giang Phan !!!</h1>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Total todos: {length}</li>
                            </ul>
                        
                        </div>
                    </div>    
                </div>
            </div>
    )
}



export default Navbar
