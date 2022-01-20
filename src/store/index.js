
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducers/todosSlice'





// store
const store = configureStore({
    reducer: {
        todosReducer
    }
})



// Export
export default store