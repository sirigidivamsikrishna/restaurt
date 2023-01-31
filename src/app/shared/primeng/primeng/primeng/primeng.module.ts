import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ScrollTopModule } from 'primeng/scrolltop';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MenubarModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    CarouselModule,
    InputTextareaModule,
    ScrollTopModule,
  ],
})
export class PrimengModule {}
