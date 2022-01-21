import { createSlice, nanoid } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        allTodos: [
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
            }
        ]
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
		}
    }
})

// Reducer
const todosReducer = todosSlice.reducer

// Selector
export const todosSelector = state => state.todosReducer.allTodos

//export action
export const {addTodo, markComplete, deleteTodo} = todosSlice.actions

//Export reducer

export default todosReducer