import {ADD_TODO,REMOVE_TODO} from './TodoAction';

const initialState = {
    todos: ['Todo 1', 'Todo 2']
}

function TodoReducer(state = initialState, action:any){
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo:any) => todo.id !== action.payload)
            }
        default:
            return state;
    }
}

export default TodoReducer;