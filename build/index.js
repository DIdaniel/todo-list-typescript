"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = __importDefault(require("./todoItem"));
const todoCollection_1 = __importDefault(require("./todoCollection"));
const data_1 = require("./data");
const sampleTodos = data_1.data.map((item) => new todoItem_1.default(item.id, item.task, item.complete));
const myTodoCollection = new todoCollection_1.default("My Todo List", sampleTodos);
myTodoCollection.addTodo("JS 학습하기 ");
myTodoCollection.addTodo("친구 만나기");
myTodoCollection.markCompelete(3, true);
console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item) => item.printDetails());
