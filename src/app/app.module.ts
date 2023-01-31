import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './shared/primeng/primeng/primeng/primeng.module';
import { HomeComponent } from './Screens/home/home.component';
import { FooterComponent } from './Screens/footer/footer.component';
import { ReservationModule } from './reservation/reservation.module';
import { ReservationComponent } from './reservation/reservation/reservation.component';
import { ContactUsComponent } from './reservation/contact-us/contact-us.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ReservationComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
