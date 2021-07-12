import {ADD_TODOS, LOADING_FALSE, LOADING_TRUE, PUSH_TODO, REMOVE_TODO, STATUS_TODO} from "../actionTypes/ActionTypes";


export const setLoadingFalse = () => ({type: LOADING_FALSE})
export const setLoadingTrue = () => ({type: LOADING_TRUE})
export const setAddTodos = (payload) => ({type: ADD_TODOS, payload})
export const setPushTodo = (payload) => ({type: PUSH_TODO, payload})
export const setRemoveTodo = (payload) => ({type: REMOVE_TODO, payload})
export const setStatusTodo = (payload, id, completed) => ({type: STATUS_TODO, payload, id, completed})