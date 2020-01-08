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
  showFilter = 'all';
  filteredItems: TodoItem[];

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.items = this.todoListService.get();
    this.filteredItems = this.items;
  }

  applyFilter() {
    switch (this.showFilter) {
      case 'doing':
        this.filteredItems = this.items.filter((item) => item.isComplete === false);
        break;
      case 'completed':
        this.filteredItems = this.items.filter((item) => item.isComplete === true);
        break;
      case 'all':
      default:
        this.filteredItems = this.items;
        break;
    }
  }

  addItem(content: string) {
    if (content) {
      this.items = this.todoListService.add(content);
      this.applyFilter();
    }
  }

  updateItem(todoItem: TodoItem) {
    this.items = this.todoListService.update(todoItem);
    this.applyFilter();
  }

  removeItem(id: string) {
   if (confirm('Are you sure you want to remove?')) {
     this.items = this.todoListService.remove(id);
     this.applyFilter();
   }
  }

}
