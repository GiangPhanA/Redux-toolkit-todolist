import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'

// Reducer thunk
export const getTodos = createAsyncThunk('todos/todosFetched', async () => {
	const response = await axios.get('https://61b0bbb13c954f001722a5fb.mockapi.io/api/todo'
	)
	return response.data
})

export const addTodo = createAsyncThunk('todos/todoAdded', async title => {
	const newTodo = {
		id: nanoid(),
		title,
		completed: false
	}

	await axios.post('https://61b0bbb13c954f001722a5fb.mockapi.io/api/todo', newTodo)

	return newTodo
})


export const deleteTodo = createAsyncThunk('todos/todoDeleted', async todoId => {
	await axios.delete(`https://61b0bbb13c954f001722a5fb.mockapi.io/api/todo/${todoId}`)

	return todoId
})


const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        allTodos: []
    },
    // khai bao 1 cv moi reducer bao gom action creator, acton, reducer
    reducers: {
        // reducer khong duoc chua thanh phan ngau nhien
        // addTodo: { 
        //     reducer(state, action) {
        //       state.allTodos.unshift (action.payload)            
        //     },
        //     prepare(title){
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 title,
        //                 completed: false
        //             }
        //         }
        //     }   
        // },
        markComplete(state, action) {
            
            const todoId = action.payload
            state.allTodos = state.allTodos.map(todo => {
                if (todo.id === todoId) todo.completed = !todo.completed
                return todo
            })
            
        },
        // deleteTodo(state, action) {
		// 	const todoId = action.payload
		// 	state.allTodos = state.allTodos.filter(todo => todo.id !== todoId)
		// },
        // async getAllTodos(state, action) {
        //     try {
        //         const response = await axios.get('https://61b0bbb13c954f001722a5fb.mockapi.io/api/todo')
        //         state.allTodos = response.data
        //     }
        //     catch (error) {
        //         console.log(error)
        //     }
        // }

        /* todosFetched(state, action) {
            state.allTodos = action.payload
        } */
    },
    extraReducers: {
        [getTodos.pending]:(state, action) => {
            console.log('fetch todo form api')
        },
        [getTodos.fulfilled]:(state, action) => {
            console.log('done')
            state.allTodos = action.payload
        },
        [getTodos.rejected]: (state, action) => {
			console.log('Failed to get todos!!!')
		},
        [addTodo.fulfilled]: (state, action) => {
			state.allTodos.unshift(action.payload)
		},
        [addTodo.rejected]: (state, action) => {
			console.log('Failed to post todos!!!')
		},

        [deleteTodo.fulfilled]: (state, action) => {
			const todoId = action.payload
			state.allTodos = state.allTodos.filter(todo => todo.id !== todoId)
		},
        [deleteTodo.rejected]: (state, action) => {
			console.log('Failed to delete todos!!!')
		}
    }
})

// Asynnc action creator, action and reducer dispatch
// export const getTodos = () => {
//     const getTodosAsync = async dispatch => {
//         try {
//             const response = await axios.get('https://61b0bbb13c954f001722a5fb.mockapi.io/api/todo')
//             dispatch(todosFetched(response.data))
//         }
//         catch (error) {
//             console.log(error)
//         }

//     }
//     return getTodosAsync
// }

// export const getTodos = () => async dispatch => {
//     try {
//         const response = await axios.get('https://61b0bbb13c954f001722a5fb.mockapi.io/api/todo')
//         dispatch(todosFetched(response.data))
//     }
//     catch (error) {
//         console.log(error)
//     }

// }

// Reducer
const todosReducer = todosSlice.reducer

// Selector
export const todosSelector = state => state.todosReducer.allTodos

//export action
export const {
    // addTodo, 
    markComplete, 
    // deleteTodo, 
    // todosFetched
} = todosSlice.actions

//Export reducer

export default todosReducer