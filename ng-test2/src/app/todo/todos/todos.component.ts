import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  newText = '';
  todos: {
    done: boolean,
    text: string
  }[];
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

  addTodo(newText: string) {
    this.todos.push({
      done: false,
      text: newText
    });
    this.newText = '';
  }
}
