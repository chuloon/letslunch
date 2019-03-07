import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantItemComponent } from './restaurant-item/restaurant-item.component';
import { SelectionMenuComponent } from './selection-menu/selection-menu.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RestaurantItemComponent, SelectionMenuComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports: [
    SelectionMenuComponent
  ]
})
export class RestaurantSelectionModule { }
