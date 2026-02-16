
function App() {
  
}

export default App;



createStore()




// Task.js
const tasksSlice = {
    name:"tasks",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    reducers: {
        fetchingProgress(state){
            state.isLoading = true;
        },
        fetchingSucces(state, action){
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        fetchingError(state, action){
            state.isloading = false;
            state.error = action.payload;
        },
    },
}

export const {fetchingProgress, fetchingSucces, fetchingError} = tasksSlice.actions;

// operations

import axios from "axios";


// axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';
// const fetchtasks = () => async dispatch => {
//     try {
//         const response = await axios.get('./task')
//     } catch (error) {
        
//     }
// }


import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';
export const fetchtasks = createAsyncThunk('task/fetchAll', async () => {
    const response = await axios.get('./task');
    return response.date;
})