import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusStopsComponent } from '../BusStops';
import { DonationComponent } from '../Donation';


const routes: Routes = [
  {path: 'stops', component: BusStopsComponent},
  {path: 'donation/:id', component: DonationComponent},
  {path: '', redirectTo: '/stops', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
