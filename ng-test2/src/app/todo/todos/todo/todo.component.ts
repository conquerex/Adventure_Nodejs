import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
    <input type="checkbox" >운동하기
  `,
  styles: []
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
