import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes: Routes = [
  { path: 'contactus', component: ContactUsComponent },
  { path: 'reservation', component: ReservationComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationRoutingModule {}
