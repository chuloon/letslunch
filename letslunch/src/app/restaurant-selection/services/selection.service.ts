import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  totalVotes: number = 0;

  constructor() { }

  restaurantItemChange = (event, voteShare: number, setShareFunction) => {
    if(event.checked) {
      this.totalVotes++;
      voteShare++;
    }
    else {
      this.totalVotes--;
      voteShare--;
    }

    setShareFunction(voteShare);
  }
}
