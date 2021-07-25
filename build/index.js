"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = __importDefault(require("./todoItem"));
const data_1 = require("./data");
console.log("My Todo List");
for (let i = 0; i < data_1.data.length; i++) {
    let todoItem = new todoItem_1.default(data_1.data[i].id, data_1.data[i].task, data_1.data[i].complete);
    todoItem.printDetails();
}
