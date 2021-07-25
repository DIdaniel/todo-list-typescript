import TodoItem from "./todoItem";
import { data } from "./data";

console.log("My Todo List");

for (let i = 0; i < data.length; i++) {
  let todoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
  todoItem.printDetails();
}
