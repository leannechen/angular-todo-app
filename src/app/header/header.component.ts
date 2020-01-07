import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() siteName = '';

  constructor() { }

  ngOnInit() {
    if (!this.siteName) {
      this.siteName = 'Default Name';
    }
  }

}
