import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  showModal: Object = {
    portfolio1: false,
    portfolio2: false,
    air1: false,
    air2: false,
    air3: false,
    air4: false,
    poke1: false,
    poke2: false,
    poke3: false,
    poke4: false
  }

  constructor() { }

  ngOnInit() {
  }

  toggleModal(pic) {
    if (this.showModal[pic]) {
      this.showModal[pic] = false;
     } else {
      this.showModal[pic] = true;
     }
  }
}
