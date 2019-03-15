import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  { path: 'session/:sessionId', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
