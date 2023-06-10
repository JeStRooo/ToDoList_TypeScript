export enum TodosActionTypes {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  CHANGE_TODO = 'CHANGE_TODO',
  COMPLETE_TODO = 'COMPLETE_TODO',
  REMOVE_COMPLETED_TODOS = 'REMOVE_COMPLETED_TODOS'
}

export enum Filter {
  All,
  Active,
  Completed
}

export interface TodoType {
  id: number,
  title: string,
  completed: boolean
}

export interface TodoStateType {
  todos: {
    todos: TodoType[]
  }
}

interface addTodo {
  type: TodosActionTypes.ADD_TODO,
  payload: TodoType[]
}

interface removeTodo {
  type: TodosActionTypes.REMOVE_TODO,
  payload: TodoType
}

interface completeTodo {
  type: TodosActionTypes.COMPLETE_TODO,
  payload: TodoType
}


interface changeTodo {
  type: TodosActionTypes.CHANGE_TODO,
  payload: TodoType
}

interface removeAllTodos {
  type: TodosActionTypes.REMOVE_COMPLETED_TODOS,
  payload: TodoType[]
}

export type TodosAction = addTodo | removeTodo | completeTodo | changeTodo | removeAllTodos;