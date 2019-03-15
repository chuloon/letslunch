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

      this.db.collection("sessions").doc(this.selectionService.sessionId).valueChanges().subscribe((result: any) => {
        console.log(JSON.stringify(this.selectionService.restaurants));
        
        if(result.restaurants != JSON.stringify(this.selectionService.restaurants) && result.restaurants != JSON.parse(localStorage.getItem("letsLunchSession")).restaurants)
          this.loadSession();
      });
    }
  }

  loadSession = () => {
    this.db.collection("sessions").doc(this.selectionService.sessionId).get().subscribe(result => {
      this.selectionService.restaurants = JSON.parse(result.data().restaurants);
      this.selectionService.totalVotes = result.data().totalVotes ? parseInt(result.data().totalVotes) : 0;
    });

    const storedSelectedRestaurantData = localStorage.getItem("selectedRestaurants");
    
    if(storedSelectedRestaurantData) {
      this.selectionService.selectedRestaurants = JSON.parse(storedSelectedRestaurantData);
    }
  }

  showLeader = () => {
    return this.selectionService.restaurants != null && this.selectionService.totalVotes > 0;
  }
}
