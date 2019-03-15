import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RestaurantSelectionModule } from '../restaurant-selection/restaurant-selection.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CurrentLeaderComponent } from './current-leader/current-leader.component';

@NgModule({
  declarations: [HomeComponent, CurrentLeaderComponent],
  imports: [
    CommonModule,
    RestaurantSelectionModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ]
})
export class HomePageModule { }
