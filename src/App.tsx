import React from "react";
import { useRecoilState } from "recoil";
import { todoInputState, todoState } from "./Atoms";
import Todo from "./Components/Todo";
import { TodoHeader } from "./Components/TodoHeader";
import { TodoInput } from "./Components/TodoInput";
import { TodoModel } from "./Models/TodoModel";

const App = () => {
  const [todos, setTodos] = useRecoilState(todoState); // [todo1, todo2, todo3, todo4]

  const sortTodos = (todos: TodoModel[]) => {
    const incompleteTodos = todos.filter((todo) => todo.isComplete === false);
    incompleteTodos.sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));

    const completeTodos: TodoModel[] = todos.filter(
      (todo) => todo.isComplete === true
    );
    completeTodos.sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
    return [...incompleteTodos, ...completeTodos];
  };

  const handleAddTodo = (newTodoText: string) => {
    const createdDate = new Date();
    const dueDate = new Date(createdDate.getDate() + 7);

    const newTodo = new TodoModel(
      todos.length + 1,
      newTodoText,
      dueDate.getTime(),
      -1
    );
    setTodos([...todos, newTodo]);
  };

  const handleToggleCompleted = (todo: TodoModel) => {
    const newTodos = [
      ...getOtherTodos(todo.id),
      { ...getTodo(todo.id), isComplete: !todo.isComplete },
    ];
    setTodos(newTodos);
  };

  const handleArchiveTodo = (todo: TodoModel) => {
    const newTodos = [
      ...getOtherTodos(todo.id),
      { ...getTodo(todo.id), isArchived: !todo.isArchived },
    ];
    setTodos(newTodos);
  };

  const getTodo = (todoId: number): TodoModel => {
    return todos.filter((todo) => todo.id === todoId)[0];
  };

  const getOtherTodos = (todoId: number): TodoModel[] => {
    return todos.filter((todo) => todo.id !== todoId);
  };

  return (
    <div
      className={
        "m-6 w-1/2 border shadow-md rounded-lg p-2 bg-white border-gray-200"
      }
    >
      <p className={"text-5xl text-center font-hairline uppercase"}>Todos</p>
      <div className={"mb-6"}>
        <TodoHeader />
        {sortTodos(todos)
          .filter((todo) => todo.isArchived === false)
          .map((todo, index) => {
            return (
              <Todo
                todo={todo}
                handleArchiveTodo={handleArchiveTodo}
                handleToggleCompleted={handleToggleCompleted}
                key={index}
              />
            );
          })}
      </div>
      <TodoInput handleAddTodo={handleAddTodo} />
    </div>
  );
};

export default App;
