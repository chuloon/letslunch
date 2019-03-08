import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../services/selection.service';
import * as _ from 'lodash';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-selection-menu',
  templateUrl: './selection-menu.component.html',
  styleUrls: ['./selection-menu.component.scss']
})
export class SelectionMenuComponent implements OnInit {
  restaurants: Restaurant[] = [];

  showAddRestaurantField: boolean = false;
  addRestaurantName: string = "";

  constructor(public selectionService: SelectionService, private db: AngularFirestore) { }

  ngOnInit() {
  }

  addRestaurantButtonClick = () => {
    this.showAddRestaurantField = true;
    setTimeout(() => {
      document.getElementById("add-field-textbox").focus();
    }, 10);
  }

  addRestaurant = () => {
    if (this.addRestaurantName == "") return;

    this.restaurants.push(new Restaurant(this.addRestaurantName, 0));

    if (this.selectionService.sessionId != "") {
      this.db.collection("sessions").doc(this.selectionService.sessionId).set({ restaurants: JSON.stringify(this.restaurants) }).then((result) => {
        this.addRestaurantName = "";
        this.showAddRestaurantField = false;
      });
    }
    else {
      this.db.collection("sessions").add({ restaurants: JSON.stringify(this.restaurants) }).then((result) => {
        this.selectionService.sessionId = result.id;
        this.addRestaurantName = "";
        this.showAddRestaurantField = false;
      });
    }
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