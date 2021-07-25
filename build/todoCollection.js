"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
    }
    getTodoById(id) {
        return this.todoItems.find((item) => item.id === id);
    }
}
