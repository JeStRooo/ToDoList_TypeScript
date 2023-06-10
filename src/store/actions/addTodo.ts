import {TodosActionTypes, TodoType} from "../../types/todos";

export const addTodo = (todo: TodoType) => {
  return {
    type: TodosActionTypes.ADD_TODO,
    payload: todo
  }
}