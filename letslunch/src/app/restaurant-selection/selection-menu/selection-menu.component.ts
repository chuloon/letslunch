import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../services/selection.service';
import * as _ from 'lodash';

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
  ];

  showAddRestaurantField: boolean = false;
  addRestaurantName: string = "";

  constructor(public selectionService: SelectionService) { }

  ngOnInit() {
  }

  addRestaurantButtonClick = () => {
    this.showAddRestaurantField = true;
    setTimeout(() => {
      document.getElementById("add-field-textbox").focus();
    }, 10);
  }

  addRestaurant = () => {
    if(this.addRestaurantName == "") return;

    this.restaurants.push(new Restaurant(this.addRestaurantName, 0));
    this.addRestaurantName = "";
    this.showAddRestaurantField = false;
  }

  changeVote = (event) => {
    const restaurantIndex = this.findRestaurantIndex(event.name);

    this.restaurants[restaurantIndex].voteShare = event.voteShare;
  }

  findRestaurantIndex = (name: string) => {
    return _.findIndex(this.restaurants, (o) => { return o.name == name });
  }
}

class Restaurant {
  constructor(public name: string, public voteShare: number = 0) {
    this.name = name;
    this.voteShare = voteShare;
   }
}