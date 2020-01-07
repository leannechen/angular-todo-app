import { Component, OnInit } from '@angular/core';
import { TodoItem } from './types';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  items: TodoItem[];

  constructor() { }

  ngOnInit() {
  }

}
