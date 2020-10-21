import { TodoModel } from "../Models/TodoModel";
import React from "react";
import { useRecoilValue } from "recoil";
import { ownerState } from "../Atoms";

interface OwnProps {
  todo: TodoModel;
  handleToggleCompleted: (todo: TodoModel) => void;
  handleArchiveTodo: (todo: TodoModel) => void;
}

const Todo: React.FC<OwnProps> = ({
  todo,
  handleToggleCompleted,
  handleArchiveTodo,
}) => {
  const owners = useRecoilValue(ownerState); // [unassigned, steve, doug, dave]

  const getOwner = (ownerId: number): string => {
    return owners.filter((owner) => owner.id === ownerId)[0].firstName;
  };

  return (
    <div
      className={
        "flex flex-row justify-between items-end px-1 bg-white hover:bg-gray-400 font-thin border-b"
      }
    >
      <span className={"w-64 " + (todo.isComplete ? "text-gray-500" : "")}>
        {todo.description}
      </span>
      <input
        type={"checkbox"}
        className={"self-center w-16"}
        checked={todo.isComplete}
        onChange={() => handleToggleCompleted(todo)}
      />
      <span
        className={
          "w-16 text-red-700 hover:text-red-500 text-center"
        }
        onClick={() => handleArchiveTodo(todo)}
      >archive</span>
      <span className={"w-16 text-right"}>{getOwner(todo.ownerId)}</span>
    </div>
  );
};

export default Todo;
