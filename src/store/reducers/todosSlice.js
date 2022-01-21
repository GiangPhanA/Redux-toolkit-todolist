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
        addTodo: (state, action) => {
            state.allTodos.unshift ({
                id: nanoid(),
                title: action.payload,
                completed: false
            })
        }
    }
})

// Reducer
const todosReducer = todosSlice.reducer

// Selector
export const todosSelector = state => state.todosReducer.allTodos

//export action
export const {addTodo} = todosSlice.actions

//Export reducer

export default todosReducer