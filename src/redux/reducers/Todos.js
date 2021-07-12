import {ADD_TODOS, LOADING_FALSE, LOADING_TRUE, PUSH_TODO, REMOVE_TODO, STATUS_TODO} from "../actionTypes/ActionTypes";

const initialState = {
    todos: [],
    todosLoading: false,
    todosStatus: false,
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOS: {
            return {...state, todos: action.payload}
        }
        case LOADING_TRUE: {
            return {...state, todosLoading: true}
        }
        case LOADING_FALSE: {
            return {...state, todosLoading: false}
        }
        case PUSH_TODO: {
            return {...state, todos: [...state.todos, action.payload]}
        }
        case REMOVE_TODO: {
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        }
        case STATUS_TODO: {
            let find = state.todos.find(todo => todo.id === action.id);
            find.completed = !action.completed
            console.log(find.completed, action.completed)
            return {...state}
        }
        default:
            return state;
    }
}