import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageBookingComponent} from '../app/manage-booking/manage-booking.component';
import {FrontdeskComponent} from '../app/frontdesk/frontdesk.component';

const routes: Routes = [
  {path: '', component: FrontdeskComponent},
  {path: 'manage_bookings', component: ManageBookingComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
