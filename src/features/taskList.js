import { store } from "../store";

const initialState = ['a', 'b', 'c', 'd', 'e', 'f','g']

export const taskReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'tasks/firstTask': return state ;
        case 'tasks/lastTask': return state ;
        default: return state;
    }
}

export const getFirstTask = {
    type: 'task/firstTask',
    payload: 'a'
}

export const getLastTask = {
    type: 'task,lastTask'
}

export const selectTaskList = state => state;