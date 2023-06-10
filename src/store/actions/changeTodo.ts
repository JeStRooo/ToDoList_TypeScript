import {TodosActionTypes, TodoType} from "../../types/todos";

export const changeTodo = (todo: TodoType[]) => {
  return {
    type: TodosActionTypes.CHANGE_TODO,
    payload: todo
  }
}