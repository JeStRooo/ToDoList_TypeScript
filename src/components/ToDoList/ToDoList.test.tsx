import React from "react";

import {removeCompletedTodos} from "../../store/actions/removeCompletedTodos";
import {addTodo} from "../../store/actions/addTodo";

import {TodosActionTypes} from "../../types/todos";

describe('Add NewTodo and Remove All Todos', () => {
  test('Add NewTodo Testing', () => {

    const dispatch = jest.fn();
    const setTitle = jest.fn();
    const title = 'Test todo';
    jest.spyOn(React, 'useState').mockReturnValueOnce([title, setTitle]);

    const addNewTodo = () => {
      const todo = {
        id: Date.now(),
        title: title,
        completed: false
      }
      setTitle('')
      dispatch(addTodo(todo))
    }

    addNewTodo();

    expect(dispatch).toHaveBeenCalledWith({
      type: TodosActionTypes.ADD_TODO,
      payload: {
        id: expect.any(Number),
        title,
        completed: false,
      },
    });
    expect(setTitle).toHaveBeenCalledWith('');
  });

  test('Remove All Todos Testing', () => {
    const dispatch = jest.fn();

    const filteredTodos = [
      {id: 1, title: 'Todo 1', completed: false},
      {id: 2, title: 'Todo 2', completed: false},
      {id: 3, title: 'Todo 3', completed: true},
      {id: 4, title: 'Todo 4', completed: true},
      {id: 5, title: 'Todo 5', completed: true},
    ];

    const removeTodos = () => {
      const completedTodos = filteredTodos.filter(todo => !todo.completed)
      dispatch(removeCompletedTodos(completedTodos))
    }

    removeTodos()

    expect(dispatch).toHaveBeenCalledWith({
      type: TodosActionTypes.REMOVE_COMPLETED_TODOS,
      payload: [
        {id: 1, title: 'Todo 1', completed: false},
        {id: 2, title: 'Todo 2', completed: false},
      ]
    })
  })
})