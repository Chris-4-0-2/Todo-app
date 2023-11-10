import './style.css';
import {Todo,TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// /todoList.todo.forEach(todo => crearTodoHtml(todo)); tip bellow
todoList.todos.forEach(crearTodoHtml);



// const newTodo = new Todo('js');
// todoList.nuevoTodo(newTodo);
console.log(todoList.todos);