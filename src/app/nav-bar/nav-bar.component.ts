import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
})

export class NavBarComponent implements OnInit {
  items!: MenuItem[];
  ngOnInit() {
    this.items = [
      {
        label: 'Google Map',
      },
    ];
  }

}

