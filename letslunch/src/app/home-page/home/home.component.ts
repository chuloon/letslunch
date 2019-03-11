import { Component, OnInit } from '@angular/core';
import { SelectionService } from 'src/app/restaurant-selection/services/selection.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sessionId: string;

  constructor(private selectionService: SelectionService, private route: ActivatedRoute, private db: AngularFirestore) {
    this.route.params.subscribe(params => this.sessionId = params.sessionId);
    console.log("sessionId: ", this.sessionId);
  }

  ngOnInit() {
    if(this.sessionId) {
      this.selectionService.sessionId = this.sessionId;
      this.loadSession();
    }
  }

  loadSession = () => {
    this.db.collection("sessions").doc(this.selectionService.sessionId).get().subscribe(result => {
      this.selectionService.restaurants = JSON.parse(result.data().restaurants);
      this.selectionService.totalVotes = parseInt(result.data().totalVotes);
    });
  }

}
