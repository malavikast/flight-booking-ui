// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-booking-by-user',
//   imports: [],
//   templateUrl: './booking-by-user.component.html',
//   styleUrl: './booking-by-user.component.scss'
// })
// export class BookingByUserComponent {

// }

import { Component } from '@angular/core';
import { BookingService } from '../../../services/booking.service';
import { Booking } from '../../../models/booking.model';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-booking-by-user',
  templateUrl: './booking-by-user.component.html',
  styleUrls: ['./booking-by-user.component.scss'],
  imports: [FormsModule, NgIf, NgFor],
})
export class BookingByUserComponent {
  userId!: number;
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) { }

  getBookingsByUser() {
    this.bookingService.getBookingsByUserId(this.userId).subscribe({
      next: (data) => {
        this.bookings = data;
      },
      error: (err) => {
        console.error('No bookings found for this user!', err);
        this.bookings = [];
      }
    });
  }
}

