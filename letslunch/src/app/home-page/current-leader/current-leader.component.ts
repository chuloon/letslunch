import { Component, OnInit, Input } from '@angular/core';
import { SelectionService } from 'src/app/restaurant-selection/services/selection.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-current-leader',
  templateUrl: './current-leader.component.html',
  styleUrls: ['./current-leader.component.scss']
})
export class CurrentLeaderComponent implements OnInit {
  leader = {};

  constructor(public selectionService: SelectionService) { }

  ngOnInit() {
    this.selectionService.calculateLeader();
  }
}
