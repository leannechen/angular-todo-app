import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { TodoItem } from '../types';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input('item') todoItem: TodoItem;
  @Output('remove') remove: EventEmitter<string> = new EventEmitter();
  @Output('update') update: EventEmitter<TodoItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateItem() {
    const updatedItem = {
      ...this.todoItem,
      isComplete: !this.todoItem.isComplete,
    };
    this.update.emit(updatedItem);
  }

  removeItem() {
    this.remove.emit(this.todoItem.id);
  }

}
