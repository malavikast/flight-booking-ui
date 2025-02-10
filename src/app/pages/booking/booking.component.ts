// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-booking',
//   imports: [],
//   templateUrl: './booking.component.html',
//   styleUrl: './booking.component.scss'
// })
// export class BookingComponent {

// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  constructor(private router: Router) { }

  navigateToCreateBooking() {
    this.router.navigate(['/booking/create']);
  }

  navigateToBookingById() {
    this.router.navigate(['/booking/by-id']);
  }

  navigateToBookingByUser() {
    this.router.navigate(['/booking/by-user']);
  }
}
