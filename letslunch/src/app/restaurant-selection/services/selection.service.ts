import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  sessionId: string = "";
  totalVotes: number = 0;
  restaurants: Restaurant[] = [];
  selectedRestaurants: string[] = [];
  leader = {
    name: "",
    voteShare: 0
  };

  constructor(private db: AngularFirestore) { }

  restaurantItemChange = (event, voteShare: number, setShareFunction) => {
    if(event.checked) {
      this.totalVotes++;
      voteShare++;
    }
    else {
      this.totalVotes--;
      voteShare--;
    }
    setShareFunction(voteShare, event.checked);
  }

  setRestaurantSession = () => {
    const saveObject = { restaurants: JSON.stringify(this.restaurants), totalVotes: this.totalVotes };

    localStorage.setItem("letsLunchSession-" + this.sessionId, JSON.stringify(saveObject));
    this.db.collection("sessions").doc(this.sessionId).set(saveObject).then((result) => {
      this.calculateLeader();
    });
  }

  calculateLeader = () => {
    let sortedRestaurants = _.sortBy(this.restaurants, [(o) => { return o.voteShare; }]);
    this.leader = sortedRestaurants.pop();
  }
}

export class Restaurant {
  constructor(public name: string, public voteShare: number = 0) {
    this.name = name;
    this.voteShare = voteShare;
  }
}