import { createSlice, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        allTodos: []
    },
    // khai bao 1 cv moi reducer bao gom action creator, acton, reducer
    reducers: {
        // reducer khong duoc chua thanh phan ngau nhien
        addTodo: { 
            reducer(state, action) {
              state.allTodos.unshift (action.payload)            
            },
            prepare(title){
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        completed: false
                    }
                }
            }   
        },
        markComplete(state, action) {
            
            const todoId = action.payload
            state.allTodos = state.allTodos.map(todo => {
                if (todo.id === todoId) todo.completed = !todo.completed
                return todo
            })
            
        },
        deleteTodo(state, action) {
			const todoId = action.payload
			state.allTodos = state.allTodos.filter(todo => todo.id !== todoId)
		},
        // async getAllTodos(state, action) {
        //     try {
        //         const response = await axios.get('https://61b0bbb13c954f001722a5fb.mockapi.io/api/todo')
        //         state.allTodos = response.data
        //     }
        //     catch (error) {
        //         console.log(error)
        //     }
        // }

        todosFetched(state, action) {
            state.allTodos = action.payload
        }
    }
})

// Asynnc action creator, action and reducer dispatch
export const getTodos = () => {
    const getTodosAsync = async dispatch => {
        try {
            const response = await axios.get('https://61b0bbb13c954f001722a5fb.mockapi.io/api/todo')
            dispatch(todosFetched(response.data))
        }
        catch (error) {
            console.log(error)
        }

    }
    return getTodosAsync
}

// Reducer
const todosReducer = todosSlice.reducer

// Selector
export const todosSelector = state => state.todosReducer.allTodos

//export action
export const {addTodo, markComplete, deleteTodo, todosFetched} = todosSlice.actions

//Export reducer

export default todosReducer