import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { TodoItem } from './types';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  items: TodoItem[];

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.items = this.todoListService.get();
  }

  addItem(content: string) {
    if (content) {
      this.items = this.todoListService.add(content);
    }
  }

  updateItem(todoItem: TodoItem) {
    this.items = this.todoListService.update(todoItem);
  }

  removeItem(id: string) {
   if (confirm('Are you sure you want to remove?')) {
     this.items = this.todoListService.remove(id);
   }
  }

}
