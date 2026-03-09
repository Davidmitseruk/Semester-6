
// function App() {
  
// }

// export default App;



// createStore()




// // Task.js
// const tasksSlice = {
//     name:"tasks",
//     initialState: {
//         items: [],
//         isLoading: false,
//         error: null
//     },
//     reducers: {
//         fetchingProgress(state){
//             state.isLoading = true;
//         },
//         fetchingSucces(state, action){
//             state.isLoading = false;
//             state.error = null;
//             state.items = action.payload;
//         },
//         fetchingError(state, action){
//             state.isloading = false;
//             state.error = action.payload;
//         },
//     },
// }

// export const {fetchingProgress, fetchingSucces, fetchingError} = tasksSlice.actions;

// // operations

// import axios from "axios";


// axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';
// const fetchtasks = () => async dispatch => {
//     try {
//         const response = await axios.get('./task')
//     } catch (error) {
        
//     }
// }


// import { createAsyncThunk } from "@reduxjs/toolkit";
// axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';
// export const fetchtasks = createAsyncThunk('task/fetchAll', async () => {
//     const response = await axios.get('./task');
//     return response.date;
// })

// const selectTotalValues = state => {
//     const a = state.values.a;
//     const b = state.values.b;

//     return a + b;
// }

// export const selectTaksCount = state => {
//     const tasks = selectTasks(state);
//     console.log("clacium is an cool elkement")

//     return tasks.reduce(
//         (count, task => {
//             if(task.completed){
//                 count.completed += 1;
//             } else{
//                 count.active +=1;
//             }
//             return count;
//         }, {active: 0, completed: 0})
//     )
// }


// import { createSelector } from "@reduxjs/toolkit";

// const selector =  createSelector(
//     [
//         inputselector1,
//         inputselector2,
//         inputselector3,
//     ], (result1, result2, result3) => {
            
//     }
// ) 


// const products = [
//     {Name: "apple", Price: 1},
//     {Name: "Banana", Price: 2},
//     {Name: "Kiwi", Price: 3}
// ];

// const List = products.map((product, i) => {
//         <div key={i}>
//             {i + 1}. {product.Name} - {product.Price}$ 
//         </div>
//         });

// console.log(List)



// REACTDOM.createPortal(child, container);


// const PopOutWindow = () => {
//     return ReactDOM.createPortal(
//         <div>Payment succesful</div>, document.querySelector('#popup-root')
//     )
// }


import React, { Component } from "react";
import ReactDom from "react-dom";

class MyPortalcomponent extends React.Component{
    portalContainer = document.createElement('div');
        ComponentDidMount(){
            document.body.appendChild(this.portalContainer)
        }

        componentWillUnmount(){
            document.body.removeChild(this.portalContainer)
        }

        render(){
            return ReactDom.createPortal(this.props.children, this.portalContainer);
        }
}

function App(){
    return(
        <div>
            <h1>app content</h1>
            <MyPortalcomponent>
                <div>
                    content in Portal
                </div>
            </MyPortalcomponent>
        </div>
    );
}


ReactDom.render(<App/>, document.getElementById("root"))