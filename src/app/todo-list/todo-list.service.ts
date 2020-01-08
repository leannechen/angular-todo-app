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
      content: '訂車票',
      date: new Date().toUTCString(),
      isComplete: false,
    },
    {
      id: uuid(),
      content: '準備印章',
      date: new Date().toUTCString(),
      isComplete: false,
    },
    {
      id: uuid(),
      content: '準備身分證',
      date: new Date().toUTCString(),
      isComplete: false,
    },
    {
      id: uuid(),
      content: '出門投票',
      date: new Date().toUTCString(),
      isComplete: false,
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
      date: new Date().toUTCString(),
      isComplete: false,
    };
    this._todoList.unshift(item);
    return this.sync();
  }

  update(newItem: TodoItem) {
    const index = this.findIndex(newItem.id);
    if (index < 0) {
      return;
    }
    // Object.assign(this._todoList[index], newItem);
    this._todoList[index] = newItem; // 這樣直接改原資料 OK 嗎？
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
