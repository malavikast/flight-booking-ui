// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-create-booking',
// //   imports: [],
// //   templateUrl: './create-booking.component.html',
// //   styleUrl: './create-booking.component.scss'
// // })
// // export class CreateBookingComponent {

// // }

// import { Component, NgModule } from '@angular/core';
// import { BookingService } from '../../../services/booking.service';
// import { NgModel } from '@angular/forms';

// @Component({
//   selector: 'app-create-booking',
//   templateUrl: './create-booking.component.html',
//   styleUrls: ['./create-booking.component.scss'],
//   imports:[NgModel],
// })
// export class CreateBookingComponent {
//   userId!: number;
//   flightId!: number;
//   message = '';

//   constructor(private bookingService: BookingService) { }

//   createBooking() {
//     this.bookingService.createBooking(this.userId, this.flightId).subscribe({
//       next: (response: { id: string; }) => {
//         this.message = 'Booking Successful! Booking ID: ' + response.id;
//       },
//       error: (err: any) => {
//         this.message = 'Booking Failed!';
//         console.error(err);
//       }
//     });
//   }
// }

