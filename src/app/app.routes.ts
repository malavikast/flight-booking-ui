// import { Routes } from '@angular/router';

// export const routes: Routes = [];


import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { BookingComponent } from './pages/booking/booking.component';
import { FlightsComponent } from './pages/flights/flights.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default page
    { path: 'users', component: UsersComponent },
    { path: 'flights', component: FlightsComponent },
    { path: 'booking', component: BookingComponent },
];



