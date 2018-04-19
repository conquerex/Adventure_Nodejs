import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

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
}
