import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerText: string = '';
  constructor() { }

  ngOnInit(): void {
    this.getHeader();
  }

  getHeader() {
    let dt = new Date();
    let hr = dt.getHours();
    if (hr < 12) {
      this.headerText = ' Good Mornning ';
    } else if (hr > 12 && hr < 18) {
      this.headerText = ' Good Afternoon ';
    } else {
      this.headerText = ' Good Evening ';
    }
  }

}
