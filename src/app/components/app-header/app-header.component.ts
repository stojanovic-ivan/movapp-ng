import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.less'],
})
export class AppHeaderComponent implements OnInit {
  constructor() {
    setTheme('bs5'); // set Bootstrap 5
  }

  ngOnInit(): void {}
}
