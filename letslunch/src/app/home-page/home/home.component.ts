import { Component, OnInit } from '@angular/core';
import { SelectionService } from 'src/app/restaurant-selection/services/selection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private selectionService: SelectionService) { }

  ngOnInit() {
  }

}
