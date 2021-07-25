import TodoItem from "./todoItem";
import TodoCollection from "./todoCollection";
import { data } from "./data";

const sampleTodos: TodoItem[] = data.map(
  (item) => new TodoItem(item.id, item.task, item.complete)
);

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

myTodoCollection.addTodo("JS 학습하기 ");
myTodoCollection.addTodo("친구 만나기");

myTodoCollection.markCompelete(3, true);

console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item) => item.printDetails());
