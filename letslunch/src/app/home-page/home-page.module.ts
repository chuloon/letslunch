import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RestaurantSelectionModule } from '../restaurant-selection/restaurant-selection.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RestaurantSelectionModule
  ]
})
export class HomePageModule { }
