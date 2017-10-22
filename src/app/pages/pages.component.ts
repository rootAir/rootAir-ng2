import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  // template: ``,
  templateUrl: './pages.component.html',
  // styleUrls: ['./app.component.css']
})
export class PagesComponent {
  
  // debugger
  menu = MENU_ITEMS;
}
