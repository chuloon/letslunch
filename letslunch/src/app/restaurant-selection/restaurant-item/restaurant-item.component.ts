import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectionService } from '../services/selection.service';
import * as _ from 'lodash';

@Component({
  selector: 'restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss']
})
export class RestaurantItemComponent implements OnInit {
  @Input() name: string;
  @Input() voteShare: number;
  @Output() voteChange: EventEmitter<any> = new EventEmitter();
  isSelected: boolean = false;

  constructor(public selectionService: SelectionService) { }

  ngOnInit() {
    this.setSelectedState();
  }

  setSelectedState = () => {
    const storedSelectedRestaurantData = localStorage.getItem("selectedRestaurants-" + this.selectionService.sessionId);
    
    if(storedSelectedRestaurantData) {
      const selectedRestaurantData: string[] = JSON.parse(storedSelectedRestaurantData);

      if(selectedRestaurantData.includes(this.name)) {
        this.isSelected = true;
      }
    }
  }

  setVoteShare = (value, isChecked: boolean) => {
    this.voteShare = value;
    
    if(isChecked) {
      this.selectionService.selectedRestaurants.push(this.name);
    }
    else {
      _.remove(this.selectionService.selectedRestaurants, (n) => { return n == this.name });
    }
    localStorage.setItem("selectedRestaurants-" + this.selectionService.sessionId, JSON.stringify(this.selectionService.selectedRestaurants));

    this.voteChange.emit({ name: this.name, voteShare: value });
  }

  getSharePercentage = () => {
    return this.selectionService.totalVotes != 0 ? this.voteShare / this.selectionService.totalVotes * 100 + "%" : "0%";
  }

}
