import { atom } from "recoil";
import { TodoModel } from "../Models/TodoModel";

const dateDue = new Date();
dateDue.setDate(dateDue.getDate() + 7); // dateDue is today + 7 days

const todo1 = new TodoModel(1, "Feed bees", dateDue.getTime(), 1);
const todo2 = new TodoModel(2, "Inspect Comb", dateDue.getTime(), 1);
const todo3 = new TodoModel(3, "Check for SHB", dateDue.getTime(), 2);
const todo4 = new TodoModel(4, "Find queen", dateDue.getTime(), 3);

todo4.isComplete = true;

const defaultTodoState = [todo1, todo2, todo3, todo4]

export const todoState = atom({
  key: "todoState",
  default: defaultTodoState,
});

export const todoInputState = atom({
  key: "todoInputState",
  default: "",
});