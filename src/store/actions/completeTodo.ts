import {TodosActionTypes, TodoType} from "../../types/todos";

export const completeTodo = (todo: TodoType[]) => {
  return {
    type: TodosActionTypes.COMPLETE_TODO,
    payload: todo
  }
}