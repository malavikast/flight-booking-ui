// import { Routes } from '@angular/router';

// export const routes: Routes = [];


import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { BookingComponent } from './pages/booking/booking.component';
import { FlightsComponent } from './pages/flights/flights.component';
import { BookingByIdComponent } from './pages/booking/booking-by-id/booking-by-id.component';
import { BookingByUserComponent } from './pages/booking/booking-by-user/booking-by-user.component';
import { CreateBookingComponent } from './pages/booking/create-booking/create-booking.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default page
    { path: 'users', component: UsersComponent },
    { path: 'flights', component: FlightsComponent },
    { path: 'booking', component: BookingComponent },
    { path: 'booking/create', component: CreateBookingComponent }, // Page to create booking
    { path: 'booking/by-id', component: BookingByIdComponent }, // Page to get booking by ID
    { path: 'booking/by-user', component: BookingByUserComponent }, //
];



