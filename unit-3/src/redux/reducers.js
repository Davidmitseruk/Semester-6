// import {stausFilters} from "./constants";

// const initialState = {

//      tasks: [
//    { id: 0, text: "Learn HTML and CSS", completed: true },
//    { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//    { id: 4, text: "Build amazing apps", completed: false },
//  ],
//   filters: {
//     status: stausFilters.all,
//   },
//  };

//  export const rootReducer = (state = initialState, action) => {
//  switch(action.type){

//  default:...;

//  return state;
//    }
//  }



import { createReducer } from "@reduxjs/toolkit";
import { StatusFilter } from "./constants";
import {addTask, deleteTask, toggleCompleted} from "./actions"
const tasksInitialState = [];


export const tasksReducer = createReducer(tasksInitialState, {
  [addTask]: (state, action) =>  {},
  [deleteTask]: (state, action) => {},
  [toggleCompleted]: (state, action) => {},
})



