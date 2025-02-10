import { Component } from '@angular/core';
import { BookingService } from '../../../services/booking.service';
import { Booking } from '../../../models/booking.model';
import { NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-booking-by-id',
  imports: [NgIf, FormsModule],
  templateUrl: './booking-by-id.component.html',
  styleUrl: './booking-by-id.component.scss'
})
export class BookingByIdComponent {

  bookingId!: number;
  booking: Booking | null = null;

  constructor(private bookingService: BookingService) { }

  getBookingById() {
    this.bookingService.getBookingById(this.bookingId).subscribe({
      next: (data) => {
        this.booking = data;
      },
      error: (err) => {
        console.error('Booking not found!', err);
        this.booking = null;
      }
    });
  }

}
