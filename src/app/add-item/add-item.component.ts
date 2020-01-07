import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  newContent: string;
  @Output('add') add: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.add.emit(this.newContent);
  }

}
