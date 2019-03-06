import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection-menu',
  templateUrl: './selection-menu.component.html',
  styleUrls: ['./selection-menu.component.scss']
})
export class SelectionMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  restaurants: Restaurant[] = [
    {
      name: "McDonald's"
    },
    {
      name: "Burger King"
    }
  ]
}

class Restaurant {
  name: string;
  voteShare?: number = 0;
}