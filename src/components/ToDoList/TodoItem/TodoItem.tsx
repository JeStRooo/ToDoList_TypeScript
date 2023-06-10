import React, {useState} from 'react';

import {useDispatch} from "react-redux";

import {removeTodo} from "../../../store/actions/removeTodo";
import {completeTodo} from "../../../store/actions/completeTodo";

import {TodoType} from "../../../types/todos";

import classes from "./TodoItem.module.scss";

import remove from "../../../assets/images/trash-icon.svg";
import complete from "../../../assets/images/complete-icon.svg"

interface TodoItemProps {
  todo: TodoType,
  todos: TodoType[]
}

const TodoItem: React.FC<TodoItemProps> = ({todo, todos}) => {
  const dispatch = useDispatch()

  const [isCompleteTodo, setIsCompleteTodo] = useState(todo.completed)

  const removeTodoItem = () => {
    const newTodoList = todos.filter((item) => item.id !== todo.id)
    dispatch(removeTodo(newTodoList))
  }

  const completedTodoItem = () => {
    setIsCompleteTodo(!isCompleteTodo)
    const missionCompleted = todos.map(item => item.id !== todo.id ? item : {...item, completed: !isCompleteTodo})
    dispatch(completeTodo(missionCompleted))
  }

  const completedStyledText = isCompleteTodo ? {textDecoration: 'line-through', color: 'gray'} : {}

  return (
    <div className={classes.todoItem}>
      <img src={complete}
           style={{filter: `grayscale(${+!todo.completed})`}}
           onClick={completedTodoItem}
           alt="Выполнено"
      />
      <input className={classes.todoItem__inputText}
             value={todo.title}
             readOnly={true}
             style={completedStyledText}
      />
      <div className={classes.todoItem__actions}>
        <img src={remove}
             alt="Удалить"
             className={classes.todoItem__actions__removeTodo}
             onClick={removeTodoItem}
        />
      </div>
    </div>
  );
};

export default TodoItem;