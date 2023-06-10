import React, {useState} from "react";

import {removeTodo} from "../../../store/actions/removeTodo";
import {completeTodo} from "../../../store/actions/completeTodo";

import {TodosActionTypes} from "../../../types/todos";

describe('Remove Current Todo and Complete Current Todo', () => {
  test('Remove Current Todo', () => {
    const dispatch = jest.fn()

    const todos = [
      {id: 1, title: 'Todo 1', completed: false},
      {id: 2, title: 'Todo 2', completed: false},
      {id: 3, title: 'Todo 3', completed: true}
    ];

    const todoToRemove = {id: 3, title: 'Todo 3', completed: true}

    const expectedTodoList = [
      {id: 1, title: 'Todo 1', completed: false},
      {id: 2, title: 'Todo 2', completed: false}
    ];

    const removeTodoItem = () => {
      const newTodoList = todos.filter((item) => item.id !== todoToRemove.id)
      dispatch(removeTodo(newTodoList))
    }

    removeTodoItem()

    expect(dispatch).toHaveBeenCalledWith({
      type: TodosActionTypes.REMOVE_TODO,
      payload: expectedTodoList
    })
  })

  test('Complete Current Todo', () => {
    const dispatch = jest.fn()
    const isCompleteTodo = false
    const setIsCompleteTodo = jest.fn()

    jest.spyOn(React, 'useState').mockReturnValueOnce([isCompleteTodo, setIsCompleteTodo]);

    const todos = [
      {id: 1, title: 'Todo 1', completed: false},
      {id: 2, title: 'Todo 2', completed: false},
      {id: 3, title: 'Todo 3', completed: true},
    ];

    const completedTodo = {id: 1, title: 'Todo 1', completed: false};

    const newTodosList = [
      {id: 1, title: 'Todo 1', completed: true},
      {id: 2, title: 'Todo 2', completed: false},
      {id: 3, title: 'Todo 3', completed: true}
    ];

    const completedTodoItem = () => {
      setIsCompleteTodo(!isCompleteTodo)
      const missionCompleted = todos.map(item => item.id !== completedTodo.id ? item : {...item, completed: !isCompleteTodo})
      dispatch(completeTodo(missionCompleted))
    }

    completedTodoItem()

    expect(dispatch).toHaveBeenCalledWith({
      type: TodosActionTypes.COMPLETE_TODO,
      payload: newTodosList
    })
  })
})