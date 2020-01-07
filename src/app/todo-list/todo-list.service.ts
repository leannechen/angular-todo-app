import { Injectable } from '@angular/core';
import { TodoItem } from './types';
import { uuid } from 'uuidv4';

const storageName = 'todolist';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private _todoList: TodoItem[];
  private _defaultList: TodoItem[] = [
    {
      id: uuid(),
      content: 'test content 1',
      date: new Date().toUTCString()
    },
    {
      id: uuid(),
      content: 'test content 2',
      date: new Date().toUTCString()
    },
    {
      id: uuid(),
      content: 'test content 3',
      date: new Date().toUTCString()
    },
    {
      id: uuid(),
      content: 'test content 4',
      date: new Date().toUTCString()
    },
  ];

  constructor() {
    this._todoList = JSON.parse(localStorage.getItem(storageName)) as TodoItem[] || this._defaultList;
  }

  get() {
    return this._todoList;
  }

  add(content: string) {
    const item = {
      id: uuid(),
      content,
      date: new Date().toUTCString()
    };
    this._todoList.push(item);
    return this.sync();
  }

  update(newItem: TodoItem) {
    const index = this.findIndex(newItem.id);
    if (index < 0) {
      return;
    }
    Object.assign(this._todoList[index], newItem);
    return this.sync();
  }

  remove(id: string) {
    const index = this.findIndex(id);
    if (index < 0) {
      return;
    }
    this._todoList.splice(index, 1);
    return this.sync();
  }

  private findIndex(id: string): number {
    return this._todoList.findIndex(item => item.id === id);
  }

  private sync() {
    localStorage.setItem(storageName, JSON.stringify(this._todoList));
    return this.get();
  }
}