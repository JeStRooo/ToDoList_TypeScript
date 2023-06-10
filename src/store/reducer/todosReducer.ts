import {TodosAction, TodosActionTypes} from "../../types/todos";

const initialState = {
  todos: []
}

export const todosReducer = (state = initialState, action: TodosAction) => {
  switch (action.type) {
    case TodosActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case TodosActionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: action.payload
      }
    case TodosActionTypes.COMPLETE_TODO:
      return {
        ...state,
        todos: action.payload
      }
    case TodosActionTypes.REMOVE_COMPLETED_TODOS:
      return {
        ...state,
        todos: action.payload
      }
    default:
      return state
  }
}