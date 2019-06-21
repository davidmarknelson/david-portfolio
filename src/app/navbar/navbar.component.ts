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

  expandMenu(): void {
    this.expandedMenu = !this.expandedMenu;
  }

  scrollToElement(id: string): void {
    let element = document.querySelector(id);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
