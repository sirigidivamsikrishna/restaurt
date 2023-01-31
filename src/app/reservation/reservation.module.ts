import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ReservationComponent } from './reservation/reservation.component';
import { PrimengModule } from '.././shared/primeng/primeng/primeng/primeng.module';
// import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReservationRoutingModule } from './reservation-routing.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, PrimengModule, ReservationRoutingModule],
})
export class ReservationModule {}
