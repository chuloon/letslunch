import { Component, OnInit } from '@angular/core';
import { SelectionService, Restaurant } from '../services/selection.service';
import * as _ from 'lodash';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-selection-menu',
  templateUrl: './selection-menu.component.html',
  styleUrls: ['./selection-menu.component.scss']
})
export class SelectionMenuComponent implements OnInit {

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

    this.selectionService.restaurants.push(new Restaurant(this.addRestaurantName, 0));


    if (this.selectionService.sessionId != "") {
      this.selectionService.setRestaurantSession();
      this.addRestaurantName = "";
    }
    else {
      this.db.collection("sessions").add({ restaurants: JSON.stringify(this.selectionService.restaurants) }).then((result) => {
        this.selectionService.sessionId = result.id;
        this.addRestaurantName = "";
        this.showAddRestaurantField = false;

        history.pushState(null, "Let's Lunch!", '/session/' + this.selectionService.sessionId);
      });
    }
  }

  changeVote = (event) => {
    const restaurantIndex = this.findRestaurantIndex(event.name);

    this.selectionService.restaurants[restaurantIndex].voteShare = event.voteShare;
    this.selectionService.setRestaurantSession();
  }

  findRestaurantIndex = (name: string) => {
    return _.findIndex(this.selectionService.restaurants, (o) => { return o.name == name });
  }
}