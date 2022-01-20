
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'


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
    }
})

// Reducer
const todosReducer = todosSlice.reducer

// store
const store = configureStore({
    reducer: {
        todosReducer
    }
})

export const todosSelector = state => state.todosReducer.allTodos
// Export
export default store