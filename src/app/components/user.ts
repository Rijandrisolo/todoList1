import { task } from "./task";

export interface User {
    id:number;
    name: string;
    todoList: task[];
  }