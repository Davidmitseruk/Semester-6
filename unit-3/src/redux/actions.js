import {nanoid} from 'nanoid';

export const addTask = text => {
    return{
        type: "tasks/addTasks",
        payload: {
            id: nanoid(),
            completed: false,
            text
        }
}
}

export const deleteTask = taskid => {
    return{
        type: "tasks/deleteTask",
        payload: taskid
    }
}


import {useDispatch} from "react-redux";
const Component = () => {
    const dispatch =useDispatch();
}