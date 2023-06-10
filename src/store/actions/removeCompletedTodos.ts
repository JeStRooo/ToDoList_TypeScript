import {TodosActionTypes, TodoType} from "../../types/todos";

export const removeCompletedTodos = (todo: TodoType[]) => {
  return {
    type: TodosActionTypes.REMOVE_COMPLETED_TODOS,
    payload: todo
  }
}