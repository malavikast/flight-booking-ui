// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-create-booking',
// //   imports: [],
// //   templateUrl: './create-booking.component.html',
// //   styleUrl: './create-booking.component.scss'
// // })
// // export class CreateBookingComponent {

// // }

import { Component, NgModule } from '@angular/core';
import { BookingService } from '../../../services/booking.service';
import { FormsModule, NgModel } from '@angular/forms';
import { Booking } from '../../../models/booking.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
  imports:[FormsModule],
})
export class CreateBookingComponent {
  userId!: number;
  flightId!: number;
  message = '';

  constructor(private bookingService: BookingService) { }

  createBooking() {
    this.bookingService.createBooking(this.userId, this.flightId).subscribe({
      next: (response: Booking) => {
        this.message = 'Booking Successful! Booking ID: ' + response.id;
      },
      error: (err: any) => {
        this.message = 'Booking Failed!';
        console.error(err);
      }
    });
  }
}

