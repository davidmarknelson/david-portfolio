import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  expandedMenu: boolean;

  constructor() { }

  ngOnInit() {
    this.expandedMenu = false;
  }

  expandMenu() {
    this.expandedMenu = !this.expandedMenu;
  }
}
