import { Component, OnInit, Input } from '@angular/core';
import { SelectionService } from '../services/selection.service';

@Component({
  selector: 'restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss']
})
export class RestaurantItemComponent implements OnInit {
  @Input() name: string;
  @Input() voteShare: number;

  constructor(public selectionService: SelectionService) { }

  ngOnInit() {
  }



}