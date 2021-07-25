import TodoItem from "./todoItem";

class TodoCollection {
  private nextId: number = 1;

  constructor(public userName: string, public todoItems: TodoItem[] = []) {}

  getTodoById(id: number) {
    return this.todoItems.find((item) => item.id === id);
  }
}
