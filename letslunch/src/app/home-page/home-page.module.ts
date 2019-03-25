import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RestaurantSelectionModule } from '../restaurant-selection/restaurant-selection.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CurrentLeaderComponent } from './current-leader/current-leader.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [HomeComponent, CurrentLeaderComponent],
  imports: [
    CommonModule,
    RestaurantSelectionModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatTooltipModule,
    RouterModule,
    FormsModule,
    MatSnackBarModule
  ]
})
export class HomePageModule { }
