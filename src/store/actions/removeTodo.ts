import {TodosActionTypes, TodoType} from "../../types/todos";

export const removeTodo = (todo: TodoType[]) => {
  return {
    type: TodosActionTypes.REMOVE_TODO,
    payload: todo
  }
}