import React, {useState} from 'react';

import {useDispatch, useSelector} from "react-redux";

import TodoItem from "./TodoItem/TodoItem";

import {addTodo} from "../../store/actions/addTodo";
import {removeCompletedTodos} from "../../store/actions/removeCompletedTodos";

import {TodoStateType, Filter} from "../../types/todos"

import classes from "./ToDoList.module.scss";

import addIcon from "../../assets/images/plus-icon.svg";

const ToDoList: React.FC = () => {
  const {todos} = useSelector((state: TodoStateType) => state.todos)

  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [filter, setFilter] = useState(Filter.All);

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case Filter.Active:
        return !todo.completed;
      case Filter.Completed:
        return todo.completed;
      default:
        return true;
    }
  });

  const addNewTodo = () => {
    const todo = {
      id: Date.now(),
      title: title,
      completed: false
    }
    setTitle('')
    dispatch(addTodo(todo))
  }

  const removeTodos = () => {
    const completedTodos = filteredTodos.filter(todo => !todo.completed)
    dispatch(removeCompletedTodos(completedTodos))
  }

  const todosLeft = todos.filter(todo => !todo.completed)

  return (
    <main className={classes.main}>
      <div className={classes.newTodo}>
        <div className={classes.newTodo__form}>
          <input className={classes.newTodo__form__input}
                 id="input"
                 type="text"
                 placeholder="Какое у вас задание на сегодня?"
                 value={title}
                 onChange={e => setTitle(e.target.value)}
          />
          <button className={classes.newTodo__form__buttonAdd}
                  disabled={!title.length}
                  onClick={addNewTodo}
          >
            Добавить
            <img className={classes.newTodo__form__buttonAdd__icon}
                 src={addIcon}
                 alt="plus-icon"
            />
          </button>
        </div>
      </div>
      <div className={classes.menu}>
        <p className={classes.menu__activeTodos}>
          {todosLeft.length} задания осталось
        </p>
        <div className={classes.menu__filter}>
          <p onClick={() => setFilter(Filter.All)}>
            Все
          </p>
          <p onClick={() => setFilter(Filter.Active)}>
            Активные
          </p>
          <p onClick={() => setFilter(Filter.Completed)}>
            Выполненные
          </p>
        </div>
        <p className={classes.menu__removeAll}
            onClick={removeTodos}
        >
          Удалить вып. задания
        </p>
      </div>
      {todos.length ?
        <div className={classes.todoList}>
          {filteredTodos?.map(todo =>
            <TodoItem
              todo={todo}
              key={todo.id}
              todos={todos}
            />
          )}
        </div>
        :
        <h1 style={{margin: 0}}>
          На сегодня у вас нет никаких задач
        </h1>
      }
    </main>
  );
};

export default ToDoList;