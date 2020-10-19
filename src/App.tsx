import React, { useState } from "react";
import { Todo } from "./Models/Todo";

const App = () => {
  const todo1 = new Todo(1, "Get stuff done", 1234567890, 1234567999);
  const todo2 = new Todo(2, "Get more stuff done", 1234567890, 1234567999);
  const todo3 = new Todo(3, "Get even more stuff done", 1234567890, 1234567999);
  const todo4 = new Todo(4, "Got stuff done", 1234567890, 1234567999);

  todo4.completed = true;

  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([todo1, todo2, todo3, todo4]);

  const sortTodos = (todos: Todo[]) => {
    let incompleteTodos: Todo[] = todos.filter(
      (todo) => todo.completed === false
    );
    incompleteTodos.sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));

    let completeTodos: Todo[] = todos.filter((todo) => todo.completed === true);
    completeTodos.sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
    return [...incompleteTodos, ...completeTodos];
  };

  const handleAddTodo = () => {
    let newTodo = new Todo(todos.length + 1, todoInput, 1, 5);
    setTodos(sortTodos([...todos, newTodo]));
    setTodoInput("");
  };

  const handleToggleCompleted = (todoId: number) => {
    let changingTodo = getTodo(todoId);
    changingTodo.completed = !changingTodo.completed;

    let newTodos = [...getOtherTodos(todoId), changingTodo];

    setTodos(sortTodos(newTodos));
  };

  const handleArchiveTodo = (todoId: number) => {
    let changingTodo = getTodo(todoId);
    changingTodo.archived = true;

    let newTodos = [...getOtherTodos(todoId), changingTodo];

    setTodos(sortTodos(newTodos));
  };

  const getTodo = (todoId: number): Todo => {
    return todos.filter((todo) => todo.id === todoId)[0];
  };

  const getOtherTodos = (todoId: number): Todo[] => {
    return todos.filter((todo) => todo.id !== todoId);
  };

  return (
    <div className={"App m-6 w-1/4 border shadow-md rounded p-2"}>
      <p className={"text-4xl text-center"}>Todos</p>
      <div className={"mb-4"}>
        {sortTodos(todos)
          .filter((todo) => todo.archived === false)
          .map((todo, index) => {
            return (
              <div
                className={"flex flex-row justify-between items-center"}
                key={index}
              >
                <span
                  className={
                    todo.completed ? "line-through w-64" : "no-underline w-64"
                  }
                >
                  {todo.description}
                </span>
                <input
                  type={"checkbox"}
                  className={""}
                  checked={todo.completed}
                  onChange={() => {
                    handleToggleCompleted(todo.id);
                  }}
                />
                <input
                  type={"button"}
                  value={"archive"}
                  className={"w-16 rounded m-1 text-red-700"}
                  onClick={() => handleArchiveTodo(todo.id)}
                />
              </div>
            );
          })}
      </div>
      <div className={"flex flex-row items-center"}>
        <input
          className={"border rounded w-64 p-1"}
          value={todoInput}
          placeholder={"Input your new Todo here"}
          onChange={(event) => {
            setTodoInput(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleAddTodo();
            }
          }}
        />
        <input
          name={"todoInput"}
          type={"button"}
          className={"border ml-1 p-1 w-32 rounded uppercase bg-blue-300"}
          value={"Submit"}
          onClick={() => handleAddTodo()}
          disabled={todoInput === ""}
        />
      </div>
    </div>
  );
};

export default App;
