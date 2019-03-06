import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection-menu',
  templateUrl: './selection-menu.component.html',
  styleUrls: ['./selection-menu.component.scss']
})
export class SelectionMenuComponent implements OnInit {
  restaurants: Restaurant[] = [
    new Restaurant("McDonald's", 0),
    new Restaurant("Burger King", 0),
    new Restaurant("Taco Bell", 0),
    new Restaurant("Chipotle", 0),
    new Restaurant("Jimmy John's", 0),
    new Restaurant("Pizza Hut", 0),
    new Restaurant("Nada", 0)
  ]

  constructor() { }

  ngOnInit() {
  }
}

class Restaurant {
  constructor(public name: string, public voteShare: number = 0) {
    this.name = name;
    this.voteShare = voteShare;
   }
}