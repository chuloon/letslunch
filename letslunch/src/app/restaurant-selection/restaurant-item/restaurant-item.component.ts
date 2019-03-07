import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectionService } from '../services/selection.service';

@Component({
  selector: 'restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss']
})
export class RestaurantItemComponent implements OnInit {
  @Input() name: string;
  @Input() voteShare: number;
  @Output() voteChange: EventEmitter<any> = new EventEmitter();

  constructor(public selectionService: SelectionService) { }

  ngOnInit() {
  }

  setVoteShare = (value) => {
    this.voteShare = value;
    this.voteChange.emit({ name: this.name, voteShare: value });
  }

  getSharePercentage = () => {
    return this.selectionService.totalVotes != 0 ? this.voteShare / this.selectionService.totalVotes * 100 + "%" : "0%";
  }

}
