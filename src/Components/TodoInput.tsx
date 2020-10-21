import React from "react";
import { useRecoilState } from "recoil";
import { todoInputState } from "../Atoms";

interface OwnProps {
  handleAddTodo: (newTodoInput: string) => void;
}

export const TodoInput: React.FC<OwnProps> = ({ handleAddTodo }) => {
  const [todoInput, setTodoInput] = useRecoilState(todoInputState);

  return (
    <div className={"flex flex-row w-full justify-between items-center"}>
      <input
        className={"border rounded flex-grow p-1 font-thin text-sm"}
        value={todoInput}
        placeholder={"Add a new Todo"}
        onChange={(event) => {
          setTodoInput(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleAddTodo(todoInput);
            setTodoInput("");
          }
        }}
      />
      <input
        name={"todoInput"}
        type={"button"}
        className={
          "border ml-1 p-1 w-32 rounded uppercase text-gray-700 bg-yellow-400 hover:bg-yellow-500 border-none focus:border-none"
        }
        value={"Submit"}
        onClick={() => {
          handleAddTodo(todoInput);
          setTodoInput("");
        }}
        disabled={todoInput === ""}
      />
    </div>
  );
};
