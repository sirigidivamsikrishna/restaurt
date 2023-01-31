import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  starttime: string[];
  endtime: string[];
  guests: number[];
  minDate: Date;
  constructor() {}

  ngOnInit(): void {
    document.querySelector('.page-title-wrap-inner').scrollTop = 0;
    window.scroll(0, 0);
    this.minDate = new Date();
    this.starttime = [
      '08:30 am',
      '09:00 am',
      '09:30 pm',
      '10:00 pm',
      '10:30 pm',
      '11:00 am',
      '11:30 am',
      '12:00 pm',
    ];
    this.endtime = [
      '08:30 am',
      '09:00 am',
      '09:30 pm',
      '10:00 pm',
      '10:30 pm',
      '11:00 am',
      '11:30 am',
      '12:00 pm',
    ];
    this.guests = [1, 2, 3, 4, 5, 6];
  }
}
