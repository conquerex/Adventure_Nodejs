import { Component, OnInit } from '@angular/core';
import { Todo } from '../share/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  newText = '';
  todos: Todo[];

  constructor() {
    this.todos = [
      {done: false, text: '헬스하기'},
      {done: true, text: '코딩하기'}
    ]
  }

  ngOnInit() {
  }

  toggleTodo(todo) {
    todo.done = !todo.done
  }

  addTodo(text: string) {
    this.todos.push({
      done : false,
      text : text
    })
  }
}
